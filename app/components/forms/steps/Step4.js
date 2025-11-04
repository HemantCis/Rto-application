import React, { useEffect, useContext } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { step_4_validationSchema as validationSchema } from "../../../../utils/schema";
import { Formik, Form } from "formik";
import Cookies from "js-cookie";
import { useDebounce } from "@/app/hooks/useDebounce";
import axios from "axios";
import { loginContext } from "../../GlobalContext";

const Section = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const Step_4 = ({ data, updateData }) => {
  const token = Cookies.get("rto-token");
  const debouncedData = useDebounce(data, 5000);
  const formId = Cookies?.get("formId");
  const [currentMonth, setCurrentMonth] = React.useState("");
  const [currentYear, setCurrentYear] = React.useState();
  const [currentDate, setCurrentDate] = React.useState("");
  const { erroObj, setErrorObj } = useContext(loginContext);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (Object.keys(debouncedData).length > 0) {
      saveFormData(debouncedData);
    }
  }, [debouncedData]);

    /* Auto-populate Lessee Name from Step 3 (data.lessee) if empty */
    useEffect(() => {
      if (!data?.lesseeName && data?.lessee) {
        updateData({ lesseeName: data.lessee }); // modified by Sid
      }
    }, [data?.lessee, data?.lesseeName, updateData]); // modified by Sid


    /* >>> Auto-populate Mortgagee Name FROM STEP 2: data.mortageCompany (one “g”) <<<
     - Will NOT overwrite if user already typed mortgageeName
     - Kept separate effect to make intent obvious
  */
  useEffect(() => {
    const step2Company = (data?.mortageCompany || "").trim(); // modified by Sid
    if ((!data?.mortgageeName || String(data.mortgageeName).trim() === "") && step2Company) {
      updateData({ mortgageeName: step2Company }); // modified by Sid
    }
  }, [data?.mortgageeName, data?.mortageCompany, updateData]); // modified by Sid


  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
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

  const year = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
    { value: "2028", label: "2028" },
    { value: "2029", label: "2029" },
  ];

  const saveFormData = async (formData) => {
    try {
      const payload = {
        formType: "step-4",
        form_id: formId || null,
        day_of_month: formData.dayOfMonth || "",
        month: formData.month || "",
        year: formData.year || "",
        print_name_of_mortgagee: formData.mortageCompany || "",
        mortgagee_address: formData.mortgageeAddress || "",
        mortgagee_phone_number: formData.buyerPhone || "",
        lessee_name: formData.firstName || "",
        building_manufacturer: formData.manufacturer || "",
        serial_number: formData.serialNumber || "",
        size: formData.buildingSize || "",
        signedBy: formData.signedBy || "",
        mortgagee_signature: "",
        its: formData.its || "",
        title_of_person_signing: formData.signerTitle || "",
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

  useEffect(() => {
    const date = new Date();
    const monthName = date.toLocaleString("default", { month: "long" });
    setCurrentMonth(monthName);
    setCurrentYear(date.getFullYear());
    setCurrentDate(date.getDate());
    updateData({
      month: monthName,
      year: date.getFullYear(),
      dayOfMonth: date.getDate(),
    });
    scrollTo(0, 0);
  }, []);

  const initialValues = {
    dayOfMonth: "",
    month: "",
    year: "",
    mortageCompany: data.mortageCompany,
    mortgageeAddress: "",
    buyerPhone: data.buyerPhone,
    firstName: data.firstName,
    manufacturer: data.manufacturer,
    serialNumber: data.serialNumber,
    buildingSize: data.buildingSize,
    buyerSigned: data.buyerSigned,

    its: "",
    signerTitle: "",
  };

  return (
    <Section>
      <div className="max-w-4xl mx-auto sm:px-6">
        <div className="text-center mb-8 py-5 text-[#4b599b]">
          <h2 className="text-2xl font-bold mb-3 ">
            Outdoor Credit, Inc. MORTGAGEE
          </h2>
          <h2 className="text-2xl underline font-bold mb-1">
            WAIVER AND CONSENT AGREEMENT
          </h2>
        </div>

        <div className="mb-6">
          <p className="mb-4">
            <strong>TO: Outdoor Credit, Inc.</strong>
          </p>
          <p className="mb-4">
            THE UNDERSIGNED MORTGAGEE of the following described premises hereby
            CONSENTS to the installation of Outdoor Credit, Inc.&apos;s
            relocatable building(s), described below, on the said premises and
            does hereby WAIVE and RELINQUISH to Outdoor Credit, Inc. or Outdoor
            Credit&apos;s assigns ALL PRESENT AND FUTURE RIGHTS to levy, distain
            or seize Outdoor Credit&apos;s relocatable building(s) for rents or
            for any other claims or demands of any kind whatsoever, and does
            hereby AGREE that the said building(s) shall not become part of the
            premises but shall at all times remain Outdoor Credit&apos;s assigns
            at any time. This WAIVER AND CONSENT AGREEMENT shall bind the heirs,
            personal representatives, successors and assigns of THE UNDERSIGNED.
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
          validateOnBlur={true} // validate when field is touched
          validateOnChange={false} // optional, only validate on blur
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form className="space-y-4">
              <div className="border-t border-gray-300 pt-4 mb-6">
                <h3 className="text-lg font-bold mb-4">
                  IN WITNESS WHEREOF: J/WE HAVE PLACED MY/OUR HAND(S) AND SEAL
                  This
                </h3>

                <div className="grid lg:grid-cols-3">
                  <div className="col-span-2 space-y-4">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <Input
                        type="text"
                        className="max-w-10"
                        placeholder="27"
                        min="1"
                        max="31"
                        value={data.dayOfMonth || currentDate}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === "" || (value >= 1 && value <= 31)) {
                            updateData({ dayOfMonth: value });
                          }
                        }}
                      />
                      <span className="font-medium">day of</span>
                      <Select
                        className="max-w-28 py-3"
                        value={data.month || currentMonth}
                        onChange={(e) => updateData({ month: e.target.value })}
                        options={months}
                      />
                      {/* <span className="font-medium">20</span> */}
                      <Select
                        className="max-w-[80px]"
                        id="year"
                        name="year"
                        value={data.year || currentYear}
                        onChange={(e) => updateData({ year: e.target.value })}
                        options={year}
                      />
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">
                          Print Name of Mortgagee:
                        </h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"mortageCompany"}
                            value={data.mortageCompany || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ mortageCompany: e.target.value });
                              setErrorObj({ ...erroObj, mortageCompany: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.mortageCompany && errors.mortageCompany && !erroObj.mortageCompany && (
                            <div className="text-red-500 flex text-right text-sm">
                              {errors.mortageCompany}
                            </div>
                          )}

                          {erroObj.mortageCompany && (
                            <div className="text-red-500 text-sm">
                              {erroObj.mortageCompany}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">Mortgagee Address:</h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"mortgageeAddress"}
                            value={data.mortgageeAddress || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ mortgageeAddress: e.target.value });
                              setErrorObj({ ...erroObj, mortgageeAddress: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.mortgageeAddress &&
                            errors.mortgageeAddress && !erroObj.mortgageeAddress &&(
                              <div className="text-red-500 flex text-right text-sm">
                                {errors.mortgageeAddress}
                              </div>
                            )}
                            {erroObj.mortgageeAddress && (
                            <div className="text-red-500 text-sm">
                              {erroObj.mortgageeAddress}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">Phone Number:</h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder="(555) 555-5555"
                            name={"buyerPhone"}
                            value={data.buyerPhone || ""}
                            onChange={(e) => {
                              let input = e.target.value.replace(/\D/g, ""); // remove all non-numeric characters
                              if (input.length > 10) input = input.slice(0, 10); // limit to 10 digits
      
                              // format as (000) 000-0000
                              let formatted = input;
                              if (input.length > 6) {
                                formatted = `(${input.slice(0, 3)}) ${input.slice(
                                  3,
                                  6
                                )}-${input.slice(6)}`;
                              } else if (input.length > 3) {
                                formatted = `(${input.slice(0, 3)}) ${input.slice(
                                  3
                                )}`;
                              } else if (input.length > 0) {
                                formatted = `(${input}`;
                              }
      
                              handleChange(e);
                              updateData({ buyerPhone: formatted });
                              setErrorObj({ ...erroObj, buyerPhone: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.buyerPhone && errors.buyerPhone && !erroObj.buyerPhone && (
                            <div className="text-red-500 flex text-right text-sm">
                              {errors.buyerPhone}
                            </div>
                          )}
                           {erroObj.buyerPhone && (
                            <div className="text-red-500 text-sm">
                              {erroObj.buyerPhone}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">Lessee Name:</h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"lesseeName"}
                            value={data.lesseeName || ""} // modified by Sid
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ lesseeName: e.target.value }); // modified by Sid
                              setErrorObj({ ...erroObj, lesseeName: "" }); // modified by Sid
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.lesseeName &&
                            errors.lesseeName &&
                            !erroObj.lesseeName && (
                              <div className="text-red-500 flex text-right text-sm">
                                {errors.lesseeName}
                              </div>
                            )}
                          {erroObj.lesseeName && (
                            <div className="text-red-500 text-sm">
                              {erroObj.lesseeName}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">Building Manufacturer:</h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"manufacturer"}
                            value={data.manufacturer || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({
                                manufacturer: e.target.value,
                              });
                              setErrorObj({ ...erroObj, manufacturer: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.manufacturer &&
                            errors.manufacturer && !erroObj.manufacturer && (
                              <div className="text-red-500 flex text-right text-sm">
                                {errors.manufacturer}
                              </div>
                            )}
                            {erroObj.manufacturer && (
                            <div className="text-red-500 text-sm">
                              {erroObj.manufacturer}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">Serial Number:</h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder="53278"
                            name={"serialNumber"}
                            value={data.serialNumber || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ serialNumber: e.target.value });
                              setErrorObj({ ...erroObj, serialNumber: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.serialNumber && errors.serialNumber && !erroObj.serialNumber && (
                            <div className="text-red-500 flex text-right text-sm">
                              {errors.serialNumber}
                            </div>
                          )}
                            {erroObj.serialNumber && (
                            <div className="text-red-500 text-sm">
                              {erroObj.serialNumber}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">Size:</h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"buildingSize"}
                            value={data.buildingSize || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ buildingSize: e.target.value });
                              setErrorObj({ ...erroObj, buildingSize: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.buildingSize && errors.buildingSize && !erroObj.buildingSize && (
                            <div className="text-red-500 flex text-right text-sm">
                              {errors.buildingSize}
                            </div>
                          )}
                          {erroObj.buildingSize && (
                            <div className="text-red-500 text-sm">
                              {erroObj.buildingSize}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">By:</h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"buyerSigned"}
                            value={data.buyerSigned || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ buyerSigned: e.target.value });
                              setErrorObj({ ...erroObj, buyerSigned: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.buyerSigned && errors.buyerSigned && 
                          !erroObj.buyerSigned && (
                            <div className="text-red-500 flex text-right text-sm">
                              {errors.buyerSigned}
                            </div>
                          )}
                            {erroObj.buyerSigned && (
                            <div className="text-red-500 text-sm">
                              {erroObj.buyerSigned}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">Signature:</h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"buyerSigned"}
                            value={data.buyerSigned || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ buyerSigned: e.target.value });
                              setErrorObj({ ...erroObj, buyerSigned: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.buyerSigned && errors.buyerSigned && !erroObj.buyerSigned && (
                            <div className="text-red-500 flex text-right text-sm">
                              {errors.buyerSigned}
                            </div>
                          )}
                           {erroObj.buyerSigned && (
                            <div className="text-red-500 text-sm">
                              {erroObj.buyerSigned}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">ITS:</h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"its"}
                            value={data.its || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ its: e.target.value });
                              setErrorObj({ ...erroObj, its: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.its && errors.its && !erroObj.its &&(
                            <div className="text-red-500 flex text-right text-sm">
                              {errors.its}
                            </div>
                          )}
                           {erroObj.its && (
                            <div className="text-red-500 text-sm">
                              {erroObj.its}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 items-center gap-2 mb-1">
                        <h4 className="font-medium">
                          Title of Person Signing:
                        </h4>
                        <div className="flex flex-col w-full">
                          <Input
                            placeholder=""
                            name={"signerTitle"}
                            value={data.signerTitle || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ signerTitle: e.target.value });
                              setErrorObj({ ...erroObj, signerTitle: "" });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.signerTitle && errors.signerTitle && !erroObj.signerTitle && (
                            <div className="text-red-500 flex text-right text-sm">
                              {errors.signerTitle}
                            </div>
                          )}
                            {erroObj.signerTitle && (
                            <div className="text-red-500 text-sm">
                              {erroObj.signerTitle}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Section>
  );
};

export default Step_4;
