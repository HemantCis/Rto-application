import React, { useCallback, useEffect, useContext } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { Formik, Form } from "formik";
import { step_3_validationSchema as validationSchema } from "@/utils/schema";
import Cookies from "js-cookie";
import { useDebounce } from "@/app/hooks/useDebounce";
import axios from "axios";
import { loginContext } from "../../GlobalContext";


// ---- Date helpers (modified by sid) ----
const pad2 = (n) => String(n).padStart(2, "0"); // modified by sid
const toMMDDYYYY = (d) =>
  `${pad2(d.getMonth() + 1)}/${pad2(d.getDate())}/${d.getFullYear()}`; // modified by sid

// Auto-insert slashes while typing: "MMDDYYYY" -> "MM/DD/YYYY" (modified by sid)
const autoFormatDateInput = (raw) => {
  const v = String(raw || "").replace(/\D/g, "").slice(0, 8);
  const mm = v.slice(0, 2);
  const dd = v.slice(2, 4);
  const yyyy = v.slice(4, 8);
  if (v.length <= 2) return mm;
  if (v.length <= 4) return `${mm}/${dd}`;
  return `${mm}/${dd}/${yyyy}`;
}; // modified by sid

const Section = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const InnerWrapper = ({ className, children }) => {
  return (
    <div className={`border-t border-gray-300 pt-8 mt-8 ${className}`}>
      {children}
    </div>
  );
};

const Step_3 = ({ data, updateData }) => {
  const token = Cookies.get("rto-token");
  const debouncedData = useDebounce(data, 5000);
  const formId = Cookies?.get("formId");
  const { erroObj, setErrorObj } = useContext(loginContext);

  useEffect(() => {
    if (Object.keys(debouncedData).length > 0) {
      saveFormData(debouncedData);
    }
  }, [debouncedData]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    const today = toMMDDYYYY(new Date()); // modified by sid

    // Step 1 buyer full name
    const step1BuyerName = [data.firstName, data.lastName]
      .filter(Boolean)
      .map((x) => x.trim())
      .join(" "); // modified by Sid

    // Step 1 co-buyer full name
    const step1CoBuyerName = [data.coFirstName, data.coLastName]
      .filter(Boolean)
      .map((x) => x.trim())
      .join(" "); // modified by Sid

    // Step 1 address -> step 3 address
    const step1Address =
      data.address && data.address.trim().length
        ? data.address
        : [data.firstStreet, data.secondStreet].filter(Boolean).join(", "); // modified by Sid

    // Step 1 size/color -> step 3
    const step1SizeColor = [
      data.buildingColor ? data.buildingColor.trim() : "",
      data.buildingSize ? data.buildingSize.trim() : "",
    ]
      .filter(Boolean)
      .join("/"); // modified by Sid

    const patch = {};

    // date
    if (!data.date) {
      patch.date = today; // modified by Sid
    }

    // names
    if (!data.lessee && step1BuyerName) {
      patch.lessee = step1BuyerName; // modified by Sid
    }
    if (!data.coLessee && step1CoBuyerName) {
      patch.coLessee = step1CoBuyerName; // modified by Sid
    }

    // address block
    if (!data.address && step1Address) {
      patch.address = step1Address; // modified by Sid
    }
    if (!data.city && data.city) {
      patch.city = data.city; // modified by Sid
    }
    if (!data.state && data.state) {
      patch.state = data.state; // modified by Sid
    }
    if (!data.zip && data.zip) {
      patch.zip = data.zip; // modified by Sid
    }
    // county (your API calls it "country" in step 1, we keep the JSON string)
    if (!data.county && data.country) {
      patch.county = data.country; // modified by Sid
    }

    // building / property from step 1
    if (!data.serialNumber && data.serialNumber) {
      patch.serialNumber = data.serialNumber; // modified by Sid
    }
    if (!data.manufacturer && data.manufacturer) {
      patch.manufacturer = data.manufacturer; // modified by Sid
    }
    if (!data.sizeColor && step1SizeColor) {
      patch.sizeColor = step1SizeColor; // modified by Sid
    }
    if (!data.newOrUsed && data.newOrUsed) {
      patch.newOrUsed = data.newOrUsed; // modified by Sid
    }

    // payment / calculator from step 1
    if (!data.capCostReduction && data.capCostReduction) {
      patch.capCostReduction = data.capCostReduction; // modified by Sid
    }
    if (!data.salesTaxCCR && data.salesTaxCCR) {
      patch.salesTaxCCR = data.salesTaxCCR; // modified by Sid
    }
    // step 1: totalDueUpfront -> step 3: totalInitialPayment
    if (!data.totalInitialPayment && data.totalDueUpfront) {
      patch.totalInitialPayment = data.totalDueUpfront; // modified by Sid
    }
    // step 1: totalPayment -> step 3: totalMonthlyPayment
    if (!data.totalMonthlyPayment && data.totalPayment) {
      patch.totalMonthlyPayment = data.totalPayment; // modified by Sid
    }
    // step 1: term -> step 3: termAgreement (you can still override in step 3)
    if (!data.termAgreement && data.term) {
      patch.termAgreement = data.term; // modified by Sid
    }

    if (Object.keys(patch).length > 0) {
      updateData(patch); // modified by Sid
    }
  }, []);

    /**
   * 2) Generate agreement number and set size/color once
   */
    useEffect(() => {
      const id = Number(formId) || 0; // modified by Sid
      const patch = {}; // modified by Sid
  
      if (!data.agreementNumber) {
        const year = new Date().getFullYear(); // modified by Sid
        const baseNumber = 10001 + id; // modified by Sid
        patch.agreementNumber = `${year}${baseNumber}`; // modified by Sid
      }
  
      if (!data.sizeColor) {
        patch.sizeColor =
          (data.buildingColor ? data.buildingColor : "") +
          (data.buildingSize ? "/" + data.buildingSize : ""); // modified by Sid
      }
  
      if (Object.keys(patch).length > 0) updateData(patch); // modified by Sid
    }, []);


  useEffect(() => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const currentMonthName = monthNames[new Date().getMonth()];
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    updateData({
      date: new Date().toISOString().split("T")[0],
      months: currentMonthName,
      dueDate: yesterday.getDate()
    });
  }, []);

  console.log("month = ", data.months);

  const saveFormData = async (formData) => {
    try {
      const payload = {
        formType: "step-3",
        form_id: formId || null,
        date: formData?.date || toMMDDYYYY(new Date()), // modified by sid
        agreementNumber: formData?.agreementNumber,
        lessor_name: formData?.firstName,
        lessor_address: formData?.address,
        lessor_city: formData?.city,
        lessor_state: formData?.state,
        lessor_zip: formData?.zip,
        initial_payment_month: formData?.months,
        payment_due_day: formData?.dueDate,
        property_serial_number: formData?.serial,
        property_manufacturer: formData?.manufacturer,
        property_size_color: formData?.sizeColor,
        property_condition: formData?.condition,
        capitalized_cost_reduction: formData?.sales_tax_cap_reduction || "0.00",
        salesTaxCCR: formData?.salesTaxCCR || "0.00",
        first_monthly_payment: formData?.paymentSalesTax || "0.00",
        down_payment_percent: formData?.paymentAmount90 || "10%",
        total_initial_payment: formData?.totalDueUpfront || "0.00",
        monthly_rental_payment: formData?.totalPayment || "0.00",
        termAgreement: formData?.termAgreement || "",
        authorizedAgent: formData?.authorizedAgent || "",
        lessee: formData?.firstName || "",
        coLessee: formData?.coLessee || "",
        agreementNumber2: formData?.agreementNumber || "",
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/form/application-forms`,
        payload,
        config
      );
      if (response.status === 200) {
        console.log("Auto saved successfully");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response?.data?.message);
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  const months = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  const states = [
    { value: "FL", label: "Florida" },
    { value: "CA", label: "California" },
  ];

  const ConditionType = [
    { value: "", label: "Select Condition" },
    { value: "new", label: "New" },
    { value: "Used", label: "Used" },
  ];

  const monthsDuration = [
    { value: "3", label: "3" },
    { value: "6", label: "6" },
    { value: "9", label: "9" },
    { value: "12", label: "12" },
    { value: "18", label: "18" },
    { value: "24", label: "24" },
    { value: "36", label: "36" },
    { value: "48", label: "48" },
    { value: "60", label: "60" },
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const initialValues = {
    date: toMMDDYYYY(new Date()), // modified by sid
    agreementNumber: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    months: "",
    dueDate: "",
    serial: "",
    manufacturer: "",
    sizeColor: "",
    condition: "",
    capCostReduction: "0.00",
    salesTaxCCR: "0.00",
    firstMonthlyPayment: data.totalPayment,
    percentDownPayment: data.paymentAmount90,
    totalInitialPayment: data.totalDueUpfront,
    totalMonthlyPayment: data.totalPayment,
    termAgreement: "",
    authorizedAgent: "",
    lessee: "",
    coLessee: "",
  };

  // useEffect(() => {
  //   const id = Number(formId) || 0;
  //   const termAgree = data.term == 60 ? "52" : data.term == 48 ? "55" : data.term == 36 ? "60" : 0
  //   let term4 = (Number(data.buildingCost) / Number(data.basePayment)) + Number(data.totalDueUpfront)
  //   updateData({
  //     termAgreement4 : term4,
  //     termAgreement5: termAgree
  //   });
  // }, []);

  useEffect(() => {
    const id = Number(formId) || 0;
  
    const termAgree =
      Number(data.term) === 60 ? "52" :
      Number(data.term) === 48 ? "55" :
      Number(data.term) === 36 ? "60" : "0";
  
    const buildingCost = Number(data.buildingCost) || 0;
    const basePayment = Number(data.basePayment) || 1; // avoid divide by zero
    const totalDueUpfront = Number(data.totalDueUpfront) || 0;
    const capCostReduction = Number(data.capCostReduction) || 0;
    const totalPayment = Number(data.totalPayment) || 0;
  
    const term4 = ((buildingCost / basePayment) + totalDueUpfront).toFixed(2);

    const ccr3 = (capCostReduction + totalPayment).toFixed(2);
  
    updateData({
      termAgreement4: term4,
      termAgreement5: termAgree,
      ccr3: ccr3
    });
  }, []);

  /**
   * 2) Generate agreement number and set size/color once
   */
  useEffect(() => {
    const id = Number(formId) || 0; // modified by Sid
    const patch = {}; // modified by Sid

    if (!data.agreementNumber) {
      const year = new Date().getFullYear(); // modified by Sid
      const baseNumber = 10001 + id; // modified by Sid
      patch.agreementNumber = `${year}${baseNumber}`; // modified by Sid
    }

    if (!data.sizeColor) {
      patch.sizeColor =
        (data.buildingColor ? data.buildingColor : "") +
        (data.buildingSize ? "/" + data.buildingSize : ""); // modified by Sid
    }

    if (Object.keys(patch).length > 0) updateData(patch); // modified by Sid
  }, []);


   // === Helpers to enforce two decimals for currency fields ===
   const keepTwoDecimals = (raw) => { // modified by Sid
    const cleaned = (raw || "").toString().replace(/[^\d.]/g, ""); // allow digits and dot // modified by Sid
    const parts = cleaned.split("."); // modified by Sid
    if (parts.length === 1) return parts[0]; // modified by Sid
    const int = parts[0]; // modified by Sid
    const frac = parts.slice(1).join(""); // collapse extra dots // modified by Sid
    return int + "." + frac.slice(0, 2); // cap to 2 decimals // modified by Sid
  };
  const formatToTwo = (val) => { // modified by Sid
    const n = Number(val); // modified by Sid
    return isNaN(n) ? "" : n.toFixed(2); // modified by Sid
  };

  // shorthand factory for onChange/onBlur bindings // modified by Sid
  const twoDecHandlers = (field) => ({ // modified by Sid
    onChange: (e) => updateData({ [field]: keepTwoDecimals(e.target.value) }), // modified by Sid
    onBlur: () => {
      const v = data[field];
      if (v !== undefined && v !== null && v !== "") {
        updateData({ [field]: formatToTwo(v) }); // modified by Sid
      }
    },
  });



  return (
    <div className="space-y-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
        validateOnBlur={true} // validate when field is touched
        validateOnChange={false} // optional, only validate on blur
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Section>
            <Form className="space-y-4">
              <div className="text-center mb-8 py-5">
                <h2 className="text-2xl underline font-bold mb-1 text-[#4b599b]">
                  LEASE - PURCHASE AGREEMENT
                </h2>
              </div>

              <div className="flex items-center md:flex-nowrap flex-wrap justify-between gap-2 mb-8">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Date</span>
                  <Input
                    placeholder="MM/DD/YYYY" // modified by sid
                    // type="date" // replaced to enforce MM/DD/YYYY (modified by sid)
                    value={data.date || toMMDDYYYY(new Date())} // modified by sid
                    onChange={(e) => {
                      const formatted = autoFormatDateInput(e.target.value); // modified by sid
                      updateData({ date: formatted }); // modified by sid
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium md:whitespace-nowrap">
                    Agreement Number:{" "}
                    <span className="text-red-500 text-sm">*</span>
                  </span>
                  <Input
                    className="min-w-50"
                    placeholder=""
                    name="agreementNumber"
                    value={data.agreementNumber || ""}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^\d]/g, "");
                      handleChange({
                        target: { name: "agreementNumber", value: raw },
                      });
                      updateData({ agreementNumber: raw }); // modified by Sid
                      setErrorObj({ ...erroObj, agreementNumber: "" }); // modified by Sid
                    }}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className={`flex mb-2 ml-3 justify-end`}>
                {touched.agreementNumber &&
                  errors.agreementNumber &&
                  !erroObj.agreementNumber && (
                    <div className="text-red-500 text-sm">
                      {errors.agreementNumber}
                    </div>
                  )}

                {erroObj.agreementNumber && (
                  <div className="text-red-500 text-sm">
                    {erroObj.agreementNumber}
                  </div>
                )}
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 gap mb-4">
                <div className="">
                  <h4 className="font-semibold text-lg mb-2">
                    (1) LESSOR/OWNER: OUTDOOR CREDIT INC.
                  </h4>
                  <div className="mb-2 sm:pl-6">
                    <p>
                      1135 NW 23rd Ave, Gainesville,
                      <br className="lg:block hidden" /> Florida 32609
                    </p>
                    <p>Phone: 877-228-0125</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex md:flex-nowrap flex-wrap items-center gap-2 mb-2">
                    <h4 className="font-semibold text-lg whitespace-nowrap">
                      (1A) LESSEE(s):
                    </h4>
                    <Input
                      placeholder=""
                      value={data.firstName || ""}
                      onChange={(e) =>
                        updateData({ firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="sm:pl-6">
                    <div className="flex md:flex-nowrap flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-medium">Address:</h4>
                      <Input
                        placeholder=""
                        value={data.address || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ address: e.target.value });
                          setErrorObj({ ...erroObj, address: "" });
                        }}
                      />
                    </div>
                    <div className={`flex mb-2 ml-3`}>
                      {touched.address &&
                        errors.address &&
                        !erroObj.address && (
                          <div className="text-red-500 text-sm">
                            {errors.address}
                          </div>
                        )}

                      {erroObj.address && (
                        <div className="text-red-500 text-sm">
                          {erroObj.address}
                        </div>
                      )}
                    </div>
                    <div className="grid md:grid-cols-3 gap-2">
                      <div className="">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">City:</h4>
                        </div>
                        <Input
                          placeholder=""
                          value={data.city || ""}
                          onChange={(e) => {
                            handleChange(e);
                            updateData({ city: e.target.value });
                            setErrorObj({ ...erroObj, city: "" });
                          }}
                        />
                        {touched.city && errors.city && !erroObj.city && (
                          <div className="text-red-500 text-sm">
                            {errors.city}
                          </div>
                        )}

                        {erroObj.city && (
                          <div className="text-red-500 text-sm">
                            {erroObj.city}
                          </div>
                        )}
                      </div>
                      <div className="">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">State:</h4>
                        </div>
                        <Select
                          placeholder=""
                          value={data.state || ""}
                          onChange={(e) => {
                            handleChange(e);
                            updateData({ state: e.target.value });
                            setErrorObj({ ...erroObj, city: "" });
                          }}
                          options={states}
                        />
                        {touched.state && errors.state && !erroObj.state && (
                          <div className="text-red-500 text-sm">
                            {errors.state}
                          </div>
                        )}

                        {erroObj.state && (
                          <div className="text-red-500 text-sm">
                            {erroObj.state}
                          </div>
                        )}
                      </div>
                      <div className="">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">Zip:</h4>
                        </div>
                        {/* <Input
                          placeholder=""
                          value={data.Zip || ""}
                          onChange={(e) => updateData({ Zip: e.target.value })}
                        /> */}

                        <Input
                          placeholder="Enter Zipcode"
                          name="zip"
                          value={data.zip || ""}
                          onChange={(e) => {
                            // Remove all non-numeric characters
                            let value = e.target.value.replace(/\D/g, "");

                            // Limit to 5 digits
                            if (value.length > 5) {
                              value = value.slice(0, 5);
                            }

                            handleChange({
                              target: { name: "zip", value },
                            });
                            handleChange(e);
                            setErrorObj({ ...erroObj, zip: "" });
                          }}
                          onBlur={handleBlur}
                          maxLength={5}
                          className="w-full"
                        />
                        {touched.zip && errors.zip && !erroObj.zip && (
                          <div className="text-red-500 text-sm">
                            {errors.zip}
                          </div>
                        )}

                        {erroObj.zip && (
                          <div className="text-red-500 text-sm">
                            {erroObj.zip}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="m-0 text-sm">
                    “You” and “your” mean the person(s) signing the Agreement as
                    the Lessee. “We”, “us” and “our” mean OUTDOOR CREDIT INC..,
                    as the Lessor/Owner. “Property” is the property you are
                    renting
                  </p>
                </div>
              </div>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  (2) TERM OF AGREEMENT:
                </h4>
                <div className="sm:pl-6">
                  <p>
                    This is a monthly rental agreement with ownership options.
                    Your initial payment is for the month of
                    <Select
                      className="!w-fit ml-2 inline-flex"
                      value={data.months || ""}
                      onChange={(e) => updateData({ months: e.target.value })}
                      options={months}
                    />
                    .After the first month, your payment will be due on the{" "}
                    <Input
                      className="!w-fit mx-1 inline-flex"
                      value={data.dueDate || ""}
                      onChange={(e) => {
                        updateData({ dueDate: e.target.value });
                      }}
                    />{" "}
                    of the following month and each month thereafter. You are
                    not required to renew this agreement, however, you may renew
                    this agreement and obtain ownership of the Property if you
                    are in compliance with its terms by making a renewal payment
                    to us before the end of your paid rental term. You
                    understand that if you do not renew this Agreement on time,
                    it will expire automatically
                  </p>
                  <p className="font-semibold text-sm mt-2 mb-4">
                    You must make renewal payments in advance to continue using
                    this Property.
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  (3) DESCRIPTION OF PROPERTY:
                </h4>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 sm:pl-6">
                  <div className="">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">
                        Serial #:{" "}
                        <span className="text-red-500 text-sm">*</span>
                      </span>
                    </div>
                    <Input
                      placeholder=""
                      name={"serialNumber"}
                      value={data.serialNumber || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ serialNumber: e.target.value });
                        setErrorObj({ ...erroObj, serialNumber: "" });
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.serialNumber &&
                      errors.serialNumber &&
                      !erroObj.serialNumber && (
                        <div className="text-red-500 text-sm">
                          {errors.serialNumber}
                        </div>
                      )}
                    {erroObj.serialNumber && (
                      <div className="text-red-500 text-sm">
                        {erroObj.serialNumber}
                      </div>
                    )}
                  </div>
                  <div className="">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">
                        Manufacturer:
                        <span className="text-red-500 text-sm">*</span>
                      </span>
                    </div>
                    <Input
                      placeholder=""
                      name={"manufacturer"}
                      value={data.manufacturer || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ manufacturer: e.target.value });
                        setErrorObj({ ...erroObj, manufacturer: "" });
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.manufacturer && errors.manufacturer && (
                      <div className="text-red-500 text-sm ">
                        {errors.manufacturer}
                      </div>
                    )}

                    {erroObj.manufacturer && (
                      <div className="text-red-500 text-sm">
                        {erroObj.manufacturer}
                      </div>
                    )}
                  </div>
                  <div className="">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">
                        Size/Color:
                        <span className="text-red-500 text-sm">*</span>
                      </span>
                    </div>
                    <Input
                      placeholder=""
                      name={"sizeColor"}
                      value={data.sizeColor || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ sizeColor: e.target.value });
                        setErrorObj({ ...erroObj, sizeColor: "" });
                      }}
                      disabled={true}
                      onBlur={handleBlur}
                    />
                    {touched.sizeColor &&
                      errors.sizeColor &&
                      !erroObj.sizeColor && (
                        <div className="text-red-500 text-sm">
                          {errors.sizeColor}
                        </div>
                      )}
                    {erroObj.sizeColor && (
                      <div className="text-red-500 text-sm">
                        {erroObj.sizeColor}
                      </div>
                    )}
                  </div>
                  <div className="">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">
                        Condition - New/Used:
                        <span className="text-red-500 text-sm">*</span>
                      </span>
                    </div>
                    <Select
                      placeholder=""
                      name={"newOrUsed"}
                      value={data.newOrUsed || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ newOrUsed: e.target.value });
                        setErrorObj({ ...erroObj, newOrUsed: "" });
                      }}
                      options={ConditionType}
                      onBlur={handleBlur}
                    />
                    {touched.newOrUsed &&
                      errors.newOrUsed &&
                      !erroObj.newOrUsed && (
                        <div className="text-red-500 text-sm ">
                          {errors.newOrUsed}
                        </div>
                      )}
                    {erroObj.newOrUsed && (
                      <div className="text-red-500 text-sm">
                        {erroObj.newOrUsed}
                      </div>
                    )}
                  </div>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  (4) TOTAL INITIAL PAYMENT:{" "}
                  <span className="font-normal">Capitalized</span>
                </h4>
                <div className="grid col-span-2 grid-cols-1 sm:pl-6">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-y-2 items-center px-2 py-2 ">
                    <label
                      htmlFor="capCostReduction"
                      className="text-sm font-medium mb-1 flex items-center md:justify-between md:pr-4"
                    >
                      <span> Cap. Cost Reduction </span>
                      <span className="">($)</span>
                    </label>
                    <Input
                      id="capCostReduction"
                      type="number"
                      value={data.capCostReduction || "0.00"}
                      onChange={(e) =>
                        updateData({ capCostReduction: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-y-2 items-center px-2 py-2 ">
                    <label
                      htmlFor="salesTaxCCR"
                      className="text-sm font-medium mb-1 flex items-center md:justify-between md:pr-4"
                    >
                      <span> Sales Tax (on Capitalized Cost Reduction) </span>
                      <span className="">($)</span>
                    </label>
                    <Input
                      id="salesTaxCCR"
                      type="number"
                      value={data.salesTaxCCR || "0.00"}
                      onChange={(e) =>
                        updateData({ salesTaxCCR: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-y-2 items-center px-2 py-2 ">
                    <label
                      htmlFor="firstMonthlyPayment"
                      className="text-sm font-medium mb-1 flex items-center md:justify-between md:pr-4"
                    >
                      <span> First Monthly Payment (including tax) </span>
                      <span className="">($)</span>
                    </label>
                    <Input
                      id="firstMonthlyPayment"
                      type="number"
                      value={data.totalPayment || "0.00"}
                      onChange={(e) =>
                        updateData({ totalPayment: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-y-2 items-center px-2 py-2 ">
                    <label
                      htmlFor="percentDownPayment"
                      className="text-sm font-medium mb-1 flex items-center md:justify-between md:pr-4"
                    >
                      <span> Percent of Down Payment </span>
                      <span className="">(%)</span>
                    </label>
                    <Input
                      id="percentDownPayment"
                      type="text"
                      value={data.paymentAmount90 || "10%"}
                      onChange={(e) =>
                        updateData({ paymentAmount90: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-y-2 items-center px-2 py-2 ">
                    <label
                      htmlFor="totalInitialPayment"
                      className="text-sm font-medium mb-1 flex items-center md:justify-between md:pr-4"
                    >
                      <span> Total Initial Payment </span>
                      <span className="">($)</span>
                    </label>
                    <Input
                      id="totalInitialPayment"
                      type="number"
                      value={data.totalDueUpfront || "0.00"}
                      onChange={(e) =>
                        updateData({ totalDueUpfront: e.target.value })
                      }
                    />
                  </div>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  (5) AMOUNT AND TIMING OF PAYMENTS:
                </h4>
                <div className="grid col-span-2 grid-cols-1 sm:pl-6">
                  <div className="grid grid-cols-2 gap-y-2 items-center px-2 py-2 ">
                    <label
                      htmlFor="capCostReduction"
                      className="text-sm font-medium mb-1 flex items-center md:justify-between md:pr-4"
                    >
                      <span> Monthly Rental Payment </span>
                      <span className="">($)</span>
                    </label>
                    <Input
                      id="capCostReduction"
                      type="number"
                      value={data.capCostReduction || "0.00"}
                      onChange={(e) =>
                        updateData({ capCostReduction: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-y-2 items-center px-2 py-2 ">
                    <label
                      htmlFor="salesTaxCCR"
                      className="text-sm font-medium mb-1 flex items-center md:justify-between md:pr-4"
                    >
                      <span> Sales Tax </span>
                      <span className="">($)</span>
                    </label>
                    <Input
                      id="salesTaxCCR"
                      type="number"
                      value={data.paymentSalesTax || "0.00"}
                      onChange={(e) =>
                        updateData({ paymentSalesTax: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-y-2 items-center px-2 py-2 ">
                    <label className="text-sm font-medium mb-1 flex items-center md:justify-between md:pr-4">
                      <span> Total Monthly Rental Payment </span>
                      <span className="">($)</span>
                    </label>
                    <Input
                      type="number"
                      value={data.totalPayment || "0.00"}
                      onChange={(e) =>
                        updateData({ totalPayment: e.target.value })
                      }
                    />
                  </div>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  (6) OTHER CHARGES:
                </h4>
                <div className="sm:pl-6">
                  <p>
                    Reinstatement Fee: $ 5.00 If you fail to make a renewal
                    payment within 10 days of your monthly renewal date, you
                    must pay this fee. Return ACH/Check Fee: $ 25.00 If you make
                    the rental payment by check/ach and the check/ach is
                    dishonored by the bank you agree to pay the return ach/check
                    charge.
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  (7) COST OF LEASE:
                </h4>
                <div className="sm:pl-6">
                  <p>
                    <span className="font-semibold">
                      You can acquire ownership of the Property by paying
                      monthly rental renewal payments of $
                      <Input
                        placeholder="0.00"
                        className="my-1 max-w-24 inline-flex mx-2"
                        value={data.totalPayment || ""}
                        onChange={(e) =>
                          updateData({ totalPayment: e.target.value })
                        }
                      />{" "}
                      for{" "}
                      <Select
                        className="my-1 !w-fit max-w-24 inline-flex mx-2"
                        value={data.term || ""}
                        onChange={(e) => updateData({ term: e.target.value })}
                        options={monthsDuration}
                      />
                      months in a row plus the Capitalized Cost Reduction plus
                      sales tax for a Total Cost of $
                      <Input
                        placeholder="0.00"
                        className="my-1 max-w-24 inline-flex mx-2"
                        value={data.ccr3}
                        onChange={(e) =>
                          updateData({ termAgreement2: e.target.value })
                        }
                      />
                      . You can also acquire ownership of the Property by paying
                      us the Estimated Fair Market Value of the Leased Property
                      of $
                      <Input
                        placeholder="0.00"
                        className="my-1 max-w-24 inline-flex mx-2"
                        value={data.buildingCost || ""}
                        onChange={(e) =>
                          updateData({ buildingCost: e.target.value })
                        }
                      />
                      , plus tax. These amounts do not include state or local
                      sales taxes.
                    </span>{" "}
                    The Total Cost includes the Initial Payment and the Lease
                    Set Up fee but does not include other charges, such as late
                    fees or return ach/check charges, which are disclosed in
                    this Agreement
                  </p>
                  <p className="font-semibold text-sm mt-2 mb-4">
                    Your Cost of Lease Services is $
                    <Input
                      placeholder="0.00"
                      className="max-w-24 inline-flex mx-2"
                      value={data.termAgreement4 || ""}
                      {...twoDecHandlers("termAgreement4")} // modified by Sid
                      inputMode="decimal"
                      step="0.01"
                      pattern="^\\d+(\\.\\d{0,2})?$" // modified by Sid
                    />
                    ,{" "}
                    <span className="font-normal">
                      which is the difference between the Estimated Fair Market
                      Value of the Property and the Cost of Lease.
                    </span>
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  (8) EARLY PURCHASE OPTION:
                </h4>
                <div className="sm:pl-6">
                  <p>
                    If you have complied with all the terms of this Agreement,
                    you can purchase the property at any time by paying
                    <Input
                      placeholder="48"
                      className="max-w-24 inline-flex mx-2"
                      value={data.termAgreement5 || ""}
                      onChange={(e) =>
                        updateData({ termAgreement5: e.target.value })
                      }
                    />
                    % of the difference between the total of scheduled rental
                    payments (including sales tax) and the total amount that has
                    been paid on the account.
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  (9) GOVERNING LAW/CHOICE OF FORUM:
                </h4>
                <div className="sm:pl-6">
                  <p>
                    The interpretation, construction and validity of this
                    Agreement shall be governed by the internal laws of the
                    State of Florida, without regard to any conflicts of law,
                    except to the extent necessary to comply with the disclosure
                    and other requirements of the Rental Purchase Agreement Act
                    under statutes when the property is made available under
                    lease within the State of Florida.
                  </p>
                </div>
                <div className="font-semibold my-4 space-y-3">
                  <p>
                    NOTICE TO LESSEE: (a) Do not sign this rental purchase
                    agreement before you have read it or if it contains blank
                    spaces. (b) You are entitled to an exact copy of the rental
                    purchase agreement you sign. Keep it to protect your legal
                    rights.
                  </p>
                  <p>
                    You acknowledge that you have received a copy of this rental
                    purchase agreement.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Input
                      id="authorizedAgent"
                      value={data.authorizedAgent || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ authorizedAgent: e.target.value });
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.authorizedAgent && errors.authorizedAgent && (
                      <div className="text-red-500 text-sm ">
                        {errors.authorizedAgent}
                      </div>
                    )}

                    <label
                      htmlFor="authorizedAgent"
                      className="font-semibold text-lg"
                    >
                      Authorized Agent - Lessor{" "}
                      <br className="md:block hidden" /> OUTDOOR CREDIT INC.
                    </label>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Input
                        id="firstName"
                        value={data.firstName || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ firstName: e.target.value });
                        }}
                        onBlur={handleBlur}
                      />

                      <label
                        htmlFor="authorizedAgent"
                        className="font-semibold text-lg"
                      >
                        Lesse
                      </label>
                    </div>
                    <div className="space-y-2">
                      <Input
                        id="authorizedAgent"
                        value={data.authorizedAgentCoLesse || ""}
                        onChange={(e) =>
                          updateData({ authorizedAgentCoLesse: e.target.value })
                        }
                      />
                      <label
                        htmlFor="authorizedAgent"
                        className="font-semibold text-lg"
                      >
                        Co-Lesse
                      </label>
                    </div>
                  </div>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (10) DAMAGES TO PROPERTY:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    WE DO NOT CARRY ANY INSURANCE ON THE PROPERTY. You are fully
                    responsible for its safety until it is returned to us. You
                    are fully responsible for damages to or destruction of the
                    Property from all causes. If the property is damaged, you
                    must pay us immediately for all repairs. If the Property is
                    lost, stolen or destroyed, you must pay us the fair market
                    value of the Property on the date of loss. You must also pay
                    this amount if you fail to return the Property to us when
                    this Agreement expires.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (11) WARRANTIES:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    While you are renting, to the full extent allowed by law, we
                    disclaim ALL WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A
                    PARTICULAR PURPOSE. If you obtain ownership of the Property,
                    we will transfer any unexpired manufacturer’s warranty on
                    the Property to you if allowed by the terms of the warranty.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (12) REINSTATEMENT:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    If you fail to make a timely renewal payment, this Agreement
                    expires. You can reinstate it without losing any rights or
                    options previously acquired if you make all payments or
                    return the Property to us within the later of five days of
                    the expiration date or as soon as we ask you to. Then you
                    will have up to 100 days from the date of return to
                    reinstate by making all payments due to us on your account.
                    If you reinstate, we will provide you the same Property or
                    Property of similar quality and condition.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2"> (13) TAXES: </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    You must pay all state and local taxes imposed on payments
                    you make to us plus any other taxes that may be imposed.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2"> (14) EQUITY: </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    WE OWN THE PROPERTY. You have no ownership interest in the
                    Property unless you have complied with the Rental Purchase
                    Option or Early Purchase Option provisions of this
                    agreement.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (15) TERMINATION AND DEFAULT:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    You can terminate this Agreement at any time by returning
                    the Property to us or making arrangements with us for its
                    return. If you terminate, you are not entitled to any
                    refunds of payments made. YOU AGREE TO CONTINUE MAKING
                    RENTAL PAYMENTS UNTIL THE PROPERTY IS RETURNED TO US OR
                    UNTIL YOU OBTAIN OWNERSHIP. We can terminate this Agreement
                    if you fail to keep any terms in this Agreement all of which
                    are material. We can notify you of termination in writing or
                    by telling you.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (16) MAINTENANCE:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    We will provide service for the property, covering normal
                    repairs THAT ARE UNDER THE MANUFACTURERS WARRANTY. We will
                    not be responsible for the cost of unauthorized repairs done
                    by others. You are responsible for damage due to misuse or
                    negligence.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (17) LOCATION OF PROPERTY:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    You agree to keep the property at the address shown in Item
                    (1A). If you remove the Property without our prior written
                    consent, it is a breach of this Agreement.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (18) RETURN OF PROPERTY ON TERMINATION:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    If this agreement is terminated for any reason, you agree to
                    return the Property to us immediately. You also agree to pay
                    us any rental payments or other charges that you owe us when
                    the Property is returned.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (19) SECURITY DEPOSIT:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    If you terminate this Agreement we will refund your security
                    deposit less any amounts still due on your account within 30
                    days after termination. Or, if you want to acquire ownership
                    of the Property, we will apply your security deposit to the
                    Total Cost (Item 7 above) or your Early Purchase Option
                    Price (Item 8 above).{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (20) ASSIGNMENT:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    You have no right to sell, transfer, assign, pawn or
                    sublease the Property or this Agreement. We can sell,
                    transfer, or assign our rights to this Agreement.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (21) REMBURSEMENT OF COST:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    If you fail to make timely renewal payment without returning
                    the Property or fail to observe any other term in this
                    Agreement, you are in default and this Agreement terminates
                    automatically. If you default, and after we give you in
                    notice required by law, we are entitled to all legal
                    remedies, including repossession of our Property and our
                    damages. If you default, you must pay for our costs of
                    collections and/or repossession which may include court
                    costs and attorneys' fees if incurred and if allowed by
                    applicable state law.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (22) DAMAGES TO OTHER PROPERTY:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    You agree that we will not be responsible for any loss of or
                    damage to any other property arising out of the delivery,
                    your use or our repossession of the Property.{" "}
                  </p>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <h4 className="font-semibold text-lg mb-2">
                  {" "}
                  (23) MISCELLANEOUS PROVISIONS:{" "}
                </h4>
                <div className="sm:pl-9">
                  <p>
                    {" "}
                    YOU UNDERSTAND THAT NO CHANGES MAY BE MADE TO THIS AGREEMENT
                    EXCEPT BY BOTH PARTIES IN WRITING, SIGNED BY BOTH PARTIES.
                    YOU HAVE EXAMINED THE PROPERTY AND YOU AGREE THAT YOU HAVE
                    RECEIVED THE PROPERTY IN SATISFACTORY CONDITION.{" "}
                  </p>
                </div>
                <div className="my-4">
                  <p className="font-semibold mb-3">
                    You acknowledge that you have received a copy of this rental
                    purchase agreement
                  </p>
                  <div className=" lg:grid lg:grid-cols-2">
                    <div className="space-y-3">
                      <div className="grid md:grid-cols-2 items-center">
                        <label className="font-medium whitespace-nowrap">
                          Lessee:
                        </label>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"firstName"}
                            value={data.firstName || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ firstName: e.target.value });
                              setErrorObj({ ...erroObj, firstName: "" });
                            }}
                            className=""
                            onBlur={handleBlur}
                          />
                          {touched.firstName &&
                            errors.firstName &&
                            !errors.firstName && (
                              <div className="text-red-500 text-sm text-left ">
                                {errors.firstName}
                              </div>
                            )}
                          {erroObj.firstName && (
                            <div className="text-red-500 text-sm text-left ">
                              {erroObj.firstName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 items-center">
                        <label className="font-medium whitespace-nowrap">
                          Co-Lessee:
                        </label>
                        <Input
                          placeholder=""
                          value={data.coLessee || ""}
                          onChange={(e) =>
                            updateData({ coLessee: e.target.value })
                          }
                          className=""
                        />
                      </div>
                      <div className="grid md:grid-cols-2 items-center">
                        <label className="font-medium whitespace-nowrap">
                          Agreement Number:
                        </label>
                        <div className="flex flex-col w-full">
                        <Input
                            placeholder=""
                            name={"agreementNumber"}
                            value={data.agreementNumber || ""}
                            onChange={(e) => {
                              const raw = e.target.value.replace(/[^\d]/g, "");
                              handleChange({
                                target: {
                                  name: "agreementNumber",
                                  value: raw,
                                },
                              });
                              updateData({ agreementNumber: raw }); // modified by Sid
                              setErrorObj({
                                ...erroObj,
                                agreementNumber: "",
                              }); // modified by Sid
                            }}
                            className=""
                            onBlur={handleBlur}
                          />

                          {touched.agreementNumber &&
                            errors.agreementNumber &&
                            !erroObj.agreementNumber && (
                              <div className="text-red-500 text-sm text-left">
                                {errors.agreementNumber}
                              </div>
                            )}

                          {erroObj.agreementNumber && (
                            <div className="text-red-500 text-sm text-left ">
                              {erroObj.agreementNumber}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </InnerWrapper>
            </Form>
          </Section>
        )}
      </Formik>
    </div>
  );
};

export default Step_3;
