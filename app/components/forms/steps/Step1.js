import React, { use, useEffect, useContext, useState } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../../../utils/schema";
import { useDebounce } from "@/app/hooks/useDebounce"; // adjust import path as needed
import { loginContext } from "../../GlobalContext";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

const Section = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const Step_1 = ({ data, updateData, onValidate }) => {
  const token = Cookies.get("rto-token");
  const [currentMonth, setCurrentMonth] = React.useState("");
  const [currentYear, setCurrentYear] = React.useState();
  const [currentDate, setCurrentDate] = React.useState("");
  const [isCalculate, setCalculator] = useState(false);
  const [states, setState] = useState();
  const [countries, setCountries] = useState();
  const [coCountries, setCoCountries] = useState();
  const [changeState, setChangeState] = useState(false);
  const [changeCoState, setChangeCoState] = useState(false);
  const { setSaveStatus, erroObj, setErrorObj } = useContext(loginContext);
  const [initial, setInitial] = useState({
    month: data.month || currentMonth,
    day: data.day || currentDate,
    year: data.year || currentYear,
    firstName: "",
    lastName: "",
    ssn: "",
    firstStreet: "",
    secondStreet: "",
    city: "",
    state: "Florida",
    zip: "",
    country: {},
    coFirstName: "",
    coLastName: "",
    coSsn: "",
    cofirstStreet: "",
    coSecondStreet: "",
    coCity: "",
    coState: "Florida",
    coZip: "",
    coCountry: "",
    serialNumber: "",
    buildingType: "",
    manufacturer: "",
    buildingColor: "",
    buildingSize: "",
    newOrUsed: "New",
    buildingCost: "0.00",
    term: "60",
    basePayment: "0.00",
    paymentSalesTax: "0.00",
    totalPayment: "0.00",
    paymentAmount90: "10%",
    capCostReduction: "0.00",
    salesTaxCCR: "0.00",
    netCapitalizedCost: "0.00",
    totalDueUpfront: "0.00",
    additionalCashDown: "0.00",
    taxRate: "",
  });

  const debouncedData = useDebounce(data, 5000);
  const formId = Cookies?.get("formId");

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

  const saveFormData = async (formData) => {
    try {
      const payload = {
        formType: "step-1",
        form_id: formId || null,
        buyer_firstName: formData?.firstName || "",
        buyer_lastName: formData?.lastName || "",
        buyer_ssn: formData?.ssn || "",
        buyer_firstStreet: formData?.firstStreet || "",
        buyer_secondStreet: formData?.secondStreet || "",
        buyer_city: formData?.city || "",
        buyer_zip: formData?.zip || "",
        buyer_state: formData?.state || "",
        buyer_country: formData?.country || "",
        coFirstName: formData?.coFirstName || "",
        coLastName: formData?.coLastName || "",
        coSsn: formData?.coSsn || "",
        cofirstStreet: formData?.cofirstStreet || "",
        coSecondStreet: formData?.coSecondStreet || "",
        coCity: formData?.coCity || "",
        coState: formData?.coState || "",
        coZip: formData?.coZip || "",
        coCountry: formData?.coCountry || "",
        serialNumber: formData?.serialNumber || "",
        manufacturer: formData?.manufacturer || "",
        buildingColor: formData?.buildingColor || "",
        buildingSize: formData?.buildingSize || "",
        newOrUsed: formData?.newOrUsed || "New",
        buildingCost: formData?.buildingCost || 0.0,
        term: formData?.term || 0,
        basePayment: formData?.basePayment || 0.0,
        totalPayment: formData?.totalPayment || 0.0,
        paymentAmount90: formData?.paymentAmount90 || 0.0,
        capCostReduction: formData?.capCostReduction || 0.0,
        salesTaxCCR: formData?.salesTaxCCR || 0.0,
        totalDueUpfront: formData?.totalDueUpfront || 0.0,
        additionalCashDown: formData?.additionalCashDown || 0.0,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/form/application-forms`,
        payload,
        config
      );

      Cookies.set("formId", response?.data?.data.id);
      if (response.status === 200) {
        console.log("Auto saved successfully");
        setSaveStatus(true);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    const date = new Date();
    const monthName = date.toLocaleString("default", { month: "long" });
    setCurrentMonth(monthName);
    setCurrentYear(date.getUTCFullYear());
    setCurrentDate(date.getDate());
    scrollTo(0, 0);
    getStates();
  }, []);

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

  // const countries = [
  //   { value: "", label: "-- Select country -- " },
  //   { value: "US", label: "United States" },
  //   { value: "CA", label: "Canada" },
  //   { value: "GB", label: "United Kingdom" },
  //   { value: "AU", label: "Australia" },
  //   { value: "IN", label: "India" },
  //   { value: "DE", label: "Germany" },
  //   { value: "FR", label: "France" },
  //   { value: "JP", label: "Japan" },
  //   { value: "CN", label: "China" },
  //   { value: "BR", label: "Brazil" },
  // ];

  // const states = [
  //   { value: "", label: "-- Select State -- " },
  //   { value: "FL", label: "Florida" },
  //   { value: "GA", label: "Georgia" },
  // ];

  const BuildingType = [
    { value: "", label: "-- Select Building type -- " },
    { value: "new", label: "New" },
    { value: "used", label: "Used" },
  ];

  const BuildingTypeSS = [
    { value: "", label: "-- Select Building type -- " },
    { value: 10, label: "Shed 10% downpayment" },
    { value: 25, label: "Steel 25% downpayment" },
  ];

  const monthsDuration = [
    { value: "36", label: "36" },
    { value: "48", label: "48" },
    { value: "60", label: "60" },
  ];

  function calculateLeasePayment(
    bCost = 0,
    salesTaxRate = 0.075,
    term = 60,
    EnterPaymentAmount90 = 10, // user-selected % (like 10, 25, etc.)
    moneyFactor = 0.0155, // lease rate
    residualPercent = 0.1 // residual value (10%)
  ) {
    // convert entered % to decimal

    const downPayment = Number(EnterPaymentAmount90 / 100);

    const capCostReduction = bCost * downPayment;
    const salesTaxOnCCR = capCostReduction * salesTaxRate;
    const totalDueUpfront = capCostReduction + salesTaxOnCCR;
    const netCapCost = bCost - capCostReduction;
    const residualValue = bCost * residualPercent;

    // PDF-style lease payment calculation
    const monthlyDepreciation = (netCapCost - residualValue) / term;
    const monthlyFinanceCharge = (netCapCost + residualValue) * moneyFactor;
    const basePayment = monthlyDepreciation + monthlyFinanceCharge;

    const paymentSalesTax = basePayment * salesTaxRate;
    const totalPayment = basePayment + paymentSalesTax;

    const totalPaymentsertxt =
      bCost >= 5000
        ? Number(totalPayment) + Number(data.fixedsurtax ?? 0)
        : basePayment;
    console.log("totalPaymentsertxt", totalPaymentsertxt);

    // update your state/UI
    setCalculator(false);
    updateData({
      buildingCost: bCost,
      term,
      capCostReduction: capCostReduction.toFixed(2),
      salesTaxCCR: salesTaxOnCCR.toFixed(2),
      totalDueUpfront: totalDueUpfront.toFixed(2),
      netCapitalizedCost: netCapCost.toFixed(2),
      basePayment: basePayment.toFixed(2),
      paymentSalesTax: paymentSalesTax.toFixed(2),
      totalPayment: totalPaymentsertxt.toFixed(2),
      taxRate: salesTaxRate,
      EnterPaymentAmount90, // store user value as well
    });

    return {
      buildingCost: bCost,
      term,
      capCostReduction: capCostReduction.toFixed(2),
      salesTaxOnCCR: salesTaxOnCCR.toFixed(2),
      totalDueUpfront: totalDueUpfront.toFixed(2),
      netCapitalizedCost: netCapCost.toFixed(2),
      basePayment: basePayment.toFixed(2),
      paymentSalesTax: paymentSalesTax.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
    };
  }

  useEffect(() => {
    if (isCalculate || data.buildingCost > 0) {
      calculateLeasePayment(
        data.buildingCost,
        data.taxRate || 0.075,
        data.term || 60,
        data.paymentAmount90 || 10
      );
      const countryObj = data.country ? JSON.parse(data.country) : "";
      updateData({
        fixedsurtax:
          Object.keys(countryObj).length > 0
            ? data.buildingCost >= 5000 && countryObj?.fixedsurtax > 0
              ? countryObj?.fixedsurtax
              : 0
            : 0,
      });
    }
  }, [isCalculate]);

  useEffect(() => {
    updateData({
      paymentAmount90: data.buildingType || 10,
    });
  }, [data.buildingType]);

  useEffect(() => {
    if (data.state) {
      getCounty();
    }
  }, [changeState]);

  useEffect(() => {
    if (data.coState) {
      getCoCounty();
    }
  }, [changeCoState]);

  useEffect(() => {
    console.log("buildingCost = ", buildingCost);
    console.log("buildingCost type = ", typeof buildingCost);
    if (data.country) {
      try {
        const countryObj = JSON.parse(data.country);
        updateData({
          taxRate: Number(countryObj?.tax) || 0.075,
          fixedsurtax: data.buildingCost >= 5000 ? countryObj?.fixedsurtax : 0,
        });
      } catch (err) {
        console.error("Invalid JSON in data.country:", err);
      }
    }
  }, [data.country]);

  const resetCalculator = () => {
    try {
      updateData({
        buildingCost: "0.00",
        term: "60",
        basePayment: "0.00",
        paymentSalesTax: "0.00",
        totalPayment: "0.00",
        paymentAmount90: "10",
        capCostReduction: "0.00",
        salesTaxCCR: "0.00",
        netCapitalizedCost: "0.00",
        totalDueUpfront: "0.00",
        additionalCashDown: "0.00",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getStates = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}api/get-all-states`,
        config
      );
      console.log("states response = ", response);

      if (response.status == 200) {
        setState(response?.data?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCounty = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}api/get-all-countries?id=${data.state}`,
        config
      );

      if (response.status == 200) {
        setCountries(response?.data?.data);
        setChangeState(false);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status == 404) {
        setCountries([]);
        setChangeState(false);
      }
    }
  };

  const getCoCounty = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}api/get-all-countries?id=${data.coState}`,
        config
      );

      if (response.status == 200) {
        setCoCountries(response?.data?.data);
        setChangeCoState(false);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status == 404) {
        setCoCountries([]);
        setChangeCoState(false);
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={initial}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
        validateOnBlur={true} // validate when field is touched
        validateOnChange={false} // optional, only validate on blur
        enableReinitialize={true}
        validateOnMount
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          validateForm,
          setTouched,
        }) => {
          return (
            <Form className="space-y-4">
              <div className="space-y-4">
                {/* Date Selection */}
                <div className="flex items-center justify-end gap-2 bg-white rounded-lg shadow-md p-4">
                  <h2 className="md:text-xl font-bold">Date:</h2>
                  <Select
                    className="max-w-[110px]"
                    id="months"
                    name="month"
                    value={data.month || currentMonth}
                    onChange={(e) => updateData({ month: e.target.value })}
                    options={months}
                  />
                  <Input
                    className="max-w-[40px]"
                    placeholder="Day"
                    name="day"
                    value={data.day || currentDate}
                    onChange={(e) => updateData({ day: e.target.value })}
                  />
                  <Select
                    className="max-w-[80px]"
                    id="year"
                    name="year"
                    value={data.year || currentYear}
                    onChange={(e) => updateData({ year: e.target.value })}
                    options={year}
                  />
                </div>

                {/* Buyer Name Section */}
                <Section>
                  <h2 className="md:text-xl font-bold mb-4">Buyer Name:</h2>

                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 gap mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          First Name:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      <Input
                        placeholder="First Name"
                        name="firstName"
                        value={data.firstName || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ firstName: e.target.value });
                          setErrorObj({ ...erroObj, firstName: "" });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.firstName &&
                        errors.firstName &&
                        !erroObj.firstName && (
                          <div className="text-red-500 text-sm">
                            {errors.firstName}
                          </div>
                        )}
                      {erroObj.firstName && (
                        <div className="text-red-500 text-sm">
                          {erroObj.firstName}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          Last Name:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      <Input
                        placeholder="Last Name"
                        name="lastName"
                        value={data.lastName || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ lastName: e.target.value });
                          setErrorObj({ ...erroObj, lastName: "" });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.lastName &&
                        errors.lastName &&
                        !erroObj.lastName && (
                          <div className="text-red-500 text-sm">
                            {errors.lastName}
                          </div>
                        )}
                      {erroObj.lastName && (
                        <div className="text-red-500 text-sm">
                          {erroObj.lastName}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          Social Security #:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      {/* <Input
                    placeholder="000-00-0000"
                    name="ssn"
                    value={data.ssn || ""}
                    onChange={(e) => {
                      handleChange(e);
                      updateData({ ssn: e.target.value });
                    }}
                    className="w-full"
                    onBlur={handleBlur}
                  /> */}

                      <Input
                        placeholder="Enter Serial Number"
                        name="ssn"
                        value={data.ssn || ""}
                        onChange={(e) => {
                          let value = e.target.value;

                          // Remove all non-numeric characters
                          value = value.replace(/\D/g, "");

                          // Apply formatting: 000-00-0000
                          if (value.length > 3 && value.length <= 5) {
                            value = value.slice(0, 3) + "-" + value.slice(3);
                          } else if (value.length > 5) {
                            value =
                              value.slice(0, 3) +
                              "-" +
                              value.slice(3, 5) +
                              "-" +
                              value.slice(5, 9);
                          }

                          handleChange({
                            target: { name: "ssn", value },
                          });
                          updateData({ ssn: value });
                          setErrorObj({ ...erroObj, ssn: "" });
                        }}
                        maxLength={11} // "000-00-0000" is 11 characters including dashes
                        className="w-full"
                        onBlur={handleBlur}
                      />

                      {touched.ssn && errors.ssn && !erroObj.ssn && (
                        <div className="text-red-500 text-sm">{errors.ssn}</div>
                      )}
                      {erroObj.ssn && (
                        <div className="text-red-500 text-sm">
                          {erroObj.ssn}
                        </div>
                      )}
                    </div>
                  </div>
                </Section>

                {/* Address Section */}
                <Section>
                  <h2 className="md:text-xl font-bold mb-4">Address:</h2>
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          First Street:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      <Input
                        placeholder=""
                        name="firstStreet"
                        value={data.firstStreet || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ firstStreet: e.target.value });
                          setErrorObj({ ...erroObj, firstStreet: "" });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.firstStreet &&
                        errors.firstStreet &&
                        !erroObj.firstStreet && (
                          <div className="text-red-500 text-sm">
                            {errors.firstStreet}
                          </div>
                        )}

                      {erroObj.firstStreet && (
                        <div className="text-red-500 text-sm">
                          {erroObj.firstStreet}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Secound Street:</span>
                      </div>
                      <Input
                        placeholder=""
                        name="secondStreet"
                        value={data.secondStreet || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ secondStreet: e.target.value });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.secondStreet && errors.secondStreet && (
                        <div className="text-red-500 text-sm">
                          {errors.secondStreet}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          City: <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      <Input
                        placeholder="Enter City"
                        name="city"
                        value={data.city || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ city: e.target.value });
                          setErrorObj({ ...erroObj, city: "" });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
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
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          State: <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={data.state || ""}
                        name="state"
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ state: e.target.value });
                          setErrorObj({ ...erroObj, state: "" });
                          setChangeState(true);
                        }}
                      >
                        <option value="">Select State</option>
                        {states?.map((item, index) => (
                          <option key={item.name} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>

                      {/* <Select
                        placeholder="Florida"
                        name="state"
                        value={data.state || "Florida"}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ state: e.target.value });
                          setErrorObj({ ...erroObj, state: "" });
                        }}
                        className="w-full"
                        options={states}
                        onBlur={handleBlur}
                      /> */}
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
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          Zip: <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      {/* <Input
                      placeholder=""
                      name="zip"
                      value={data.zip || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ zip: e.target.value });
                      }}
                      onBlur={handleBlur}
                      className="w-full"
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
                          updateData({ zip: value });
                          setErrorObj({ ...erroObj, zip: "" });
                        }}
                        onBlur={handleBlur}
                        maxLength={5}
                        className="w-full"
                      />
                      {touched.zip && errors.zip && !erroObj.zip && (
                        <div className="text-red-500 text-sm">{errors.zip}</div>
                      )}
                      {erroObj.zip && (
                        <div className="text-red-500 text-sm">
                          {erroObj.zip}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          County:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>

                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={data.country || ""}
                        name="country"
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ country: e.target.value });
                          setErrorObj({ ...erroObj, country: "" });
                        }}
                      >
                        <option value="">Select County</option>
                        {countries?.map((item, index) => (
                          <option
                            key={item.name + index}
                            value={JSON.stringify(item)}
                          >
                            {item.name}
                          </option>
                        ))}
                      </select>

                      {/* <Select
                        placeholder="Main Lia"
                        name="country"
                        value={data.country || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ country: e.target.value });
                          setErrorObj({ ...erroObj, country: "" });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                        options={countries}
                      /> */}
                      {touched.country &&
                        errors.country &&
                        !erroObj.country && (
                          <div className="text-red-500 text-sm">
                            {errors.country}
                          </div>
                        )}
                      {erroObj.country && (
                        <div className="text-red-500 text-sm">
                          {erroObj.country}
                        </div>
                      )}
                    </div>
                  </div>
                </Section>

                {/* Co-Buyer Name Section */}
                <Section>
                  <h2 className="md:text-xl font-bold mb-4">Co-Buyer Name:</h2>

                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">First Name:</span>
                      </div>
                      <Input
                        placeholder="First Name"
                        name="coFirstName"
                        value={data.coFirstName || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ coFirstName: e.target.value });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.coFirstName && errors.coFirstName && (
                        <div className="text-red-500 text-sm">
                          {errors.coFirstName}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Last Name:</span>
                      </div>
                      <Input
                        placeholder="Last Name"
                        name="coLastName"
                        value={data.coLastName || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ coLastName: e.target.value });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.coLastName && errors.coLastName && (
                        <div className="text-red-500 text-sm">
                          {errors.coLastName}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Social Security #:</span>
                      </div>
                      {/* <Input
                      placeholder="000-00-0000"
                      name="coSsn"
                      value={data.coSsn || ""}
                      onChange={(e) => updateData({ coSsn: e.target.value })}
                      className="w-full"
                    /> */}

                      <Input
                        placeholder="Enter Serial Number"
                        name="coSsn"
                        value={data.coSsn || ""}
                        onChange={(e) => {
                          let value = e.target.value;

                          // Remove all non-numeric characters
                          value = value.replace(/\D/g, "");

                          // Apply formatting: 000-00-0000
                          if (value.length > 3 && value.length <= 5) {
                            value = value.slice(0, 3) + "-" + value.slice(3);
                          } else if (value.length > 5) {
                            value =
                              value.slice(0, 3) +
                              "-" +
                              value.slice(3, 5) +
                              "-" +
                              value.slice(5, 9);
                          }

                          handleChange({
                            target: { name: "coSsn", value },
                          });
                          updateData({ coSsn: value });
                        }}
                        maxLength={11} // "000-00-0000" is 11 characters including dashes
                        className="w-full"
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </Section>

                {/* Co-Buyer Address Section */}
                <Section>
                  <h2 className="md:text-xl font-bold mb-4">
                    Co-Buyer Address:
                  </h2>
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">First Street:</span>
                      </div>
                      <Input
                        placeholder=""
                        name="cofirstStreet"
                        value={data.cofirstStreet || ""}
                        onChange={(e) =>
                          updateData({ cofirstStreet: e.target.value })
                        }
                        className="w-full"
                        onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Secound Street:</span>
                      </div>
                      <Input
                        placeholder=""
                        name="coSecondStreet"
                        value={data.coSecondStreet || ""}
                        onChange={(e) =>
                          updateData({ coSecondStreet: e.target.value })
                        }
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">City:</span>
                      </div>
                      <Input
                        placeholder="Enter City"
                        name="coCity"
                        value={data.coCity || ""}
                        onChange={(e) => updateData({ coCity: e.target.value })}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">State:</span>
                      </div>
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={data.coState || ""}
                        name="coState"
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ coState: e.target.value });
                          setErrorObj({ ...erroObj, coState: "" });
                          setChangeCoState(true);
                        }}
                      >
                        <option value="">Select State</option>
                        {states?.map((item, index) => (
                          <option key={item.name} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {/* <Select
                        placeholder="Florida"
                        name="coState"
                        value={data.coState || "Florida"}
                        onChange={(e) =>
                          updateData({ coState: e.target.value })
                        }
                        className="w-full"
                        options={states}
                      /> */}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Zip:</span>
                      </div>
                      {/* <Input
                      placeholder=""
                      name="coZip"
                      value={data.coZip || ""}
                      onChange={(e) => updateData({ coZip: e.target.value })}
                      className="w-full"
                    /> */}
                      <Input
                        placeholder="Enter Zipcode"
                        name="coZip"
                        value={data.coZip || ""}
                        onChange={(e) => {
                          // Remove all non-numeric characters
                          let value = e.target.value.replace(/\D/g, "");

                          // Limit to 5 digits
                          if (value.length > 5) {
                            value = value.slice(0, 5);
                          }

                          handleChange({
                            target: { name: "coZip", value },
                          });
                          updateData({ coZip: value });
                        }}
                        onBlur={handleBlur}
                        maxLength={5}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">County:</span>
                      </div>
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={data.coCountry || ""}
                        name="coCountry"
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ coCountry: e.target.value });
                          setErrorObj({ ...erroObj, coCountry: "" });
                        }}
                      >
                        <option value="">Select County</option>
                        {coCountries?.map((item, index) => (
                          <option key={item.name + index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {/* <Select
                        placeholder="Main Lia"
                        name="coCountry"
                        value={data.coCountry || ""}
                        onChange={(e) =>
                          updateData({ coCountry: e.target.value })
                        }
                        className="w-full"
                        options={countries}
                      /> */}
                    </div>
                  </div>
                </Section>

                {/* Building Information Section */}
                <Section>
                  <h2 className="md:text-xl font-bold mb-4">
                    Building Information:
                  </h2>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          Serial Number:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      {/* Only numerical input allowed — strip non-digits onChange  // modified by Sid */}
                      <Input
                        name="serialNumber"
                        placeholder="53278"
                        type="text" // modified by Sid
                        inputMode="numeric" // modified by Sid
                        pattern="\d*" // modified by Sid
                        autoComplete="off" // modified by Sid
                        value={data.serialNumber || ""}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/\D/g, ""); // keep digits only  // modified by Sid
                          handleChange({
                            target: { name: "serialNumber", value: raw },
                          }); // modified by Sid
                          updateData({ serialNumber: raw }); // modified by Sid
                          setErrorObj({ ...erroObj, serialNumber: "" }); // modified by Sid
                        }}
                        onBlur={handleBlur}
                        className="w-full"
                        maxLength={20} // optional cap   // modified by Sid
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
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          Building Make:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      <Input
                        placeholder="Manufacturer"
                        name="manufacturer"
                        value={data.manufacturer || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ manufacturer: e.target.value });
                          setErrorObj({ ...erroObj, manufacturer: "" });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.manufacturer &&
                        errors.manufacturer &&
                        !erroObj.manufacturer && (
                          <div className="text-red-500 text-sm">
                            {errors.manufacturer}
                          </div>
                        )}

                      {erroObj.manufacturer && (
                        <div className="text-red-500 text-sm">
                          {erroObj.manufacturer}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">Building Type:</label>
                      </div>
                      <Select
                        name="buildingType"
                        value={data.buildingType || "New"}
                        options={BuildingTypeSS}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ buildingType: e.target.value });
                          setErrorObj({ ...erroObj, buildingType: "" });
                          setCalculator(true);
                        }}
                        onBlur={(e) => {
                          handleBlur(e);
                          setCalculator(true);
                        }}
                        className="text-blue-600"
                      />
                      {touched.buildingType &&
                        errors.buildingType &&
                        !erroObj.buildingType && (
                          <div className="text-red-500 text-sm">
                            {errors.buildingType}
                          </div>
                        )}

                      {erroObj.buildingType && (
                        <div className="text-red-500 text-sm">
                          {erroObj.buildingType}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          Building Color:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      <Input
                        placeholder=""
                        name="buildingColor"
                        value={data.buildingColor || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ buildingColor: e.target.value });
                          setErrorObj({ ...erroObj, buildingColor: "" });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.buildingColor &&
                        errors.buildingColor &&
                        !erroObj.buildingColor && (
                          <div className="text-red-500 text-sm">
                            {errors.buildingColor}
                          </div>
                        )}
                      {erroObj.buildingColor && (
                        <div className="text-red-500 text-sm">
                          {erroObj.buildingColor}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          Building Size:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      <Input
                        placeholder=""
                        name="buildingSize"
                        value={data.buildingSize || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ buildingSize: e.target.value });
                          setErrorObj({ ...erroObj, buildingSize: "" });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.buildingSize &&
                        errors.buildingSize &&
                        !erroObj.buildingSize && (
                          <div className="text-red-500 text-sm">
                            {errors.buildingSize}
                          </div>
                        )}
                      {erroObj.buildingSize && (
                        <div className="text-red-500 text-sm">
                          {erroObj.buildingSize}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          New or Used:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </span>
                      </div>
                      <Select
                        placeholder="New"
                        name="newOrUsed"
                        value={data.newOrUsed || "New"}
                        onChange={(e) => {
                          updateData({ newOrUsed: e.target.value });
                          setErrorObj({ ...erroObj, newOrUsed: "" });
                        }}
                        className="w-full"
                        options={BuildingType}
                      />
                      {touched.newOrUsed &&
                        errors.newOrUsed &&
                        !erroObj.newOrUsed && (
                          <div className="text-red-500 text-sm">
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

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-y-4 mb-4">
                    <div className="grid col-span-2 grid-cols-1 border border-b-0 border-gray-300">
                      <div className="bg-[#4b599b] text-white p-3 text-center">
                        <h2 className="md:text-xl font-bold ">
                          PAYMENT CALCULATION
                        </h2>
                      </div>
                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="buildingCost"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> Building Cost </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="buildingCost"
                          type="text"
                          value={
                            data.buildingCost
                              ? Number(data.buildingCost).toLocaleString()
                              : ""
                          }
                          onChange={(e) => {
                            // Allow only digits
                            const raw = e.target.value.replace(/[^\d]/g, "");

                            // Update state with numeric value only (no commas)
                            updateData({ buildingCost: raw });
                          }}
                          onBlur={() => {
                            setCalculator(true);
                          }}
                          inputMode="numeric"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="term"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span>Term</span> <span>(Months)</span>
                        </label>
                        <Select
                          id="term"
                          type="text"
                          value={data.term || "60"}
                          onChange={(e) => {
                            updateData({ term: e.target.value });
                            setCalculator(true);
                          }}
                          options={monthsDuration}
                          onBlur={() => {
                            setCalculator(true);
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="basePayment"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> Base Payment </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="basePayment"
                          disabled={true}
                          type="text"
                          value={data.basePayment || ""}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/[^\d]/g, "");
                            updateData({ basePayment: raw });
                          }}
                          inputMode="numeric"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="paymentSalesTax"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> Payment Sales Tax </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="paymentSalesTax"
                          type="text"
                          disabled={true}
                          value={data.paymentSalesTax || "0.00"}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/[^\d]/g, "");
                            updateData({ paymentSalesTax: raw });
                          }}
                          inputMode="numeric"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="paymentSalesTax"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> fixedsurtax </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="paymentSalesTax"
                          type="text"
                          disabled={true}
                          value={data.fixedsurtax || "0.00"}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/[^\d]/g, "");
                            updateData({ fixedsurtax: raw });
                          }}
                          inputMode="numeric"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="totalPayment"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> Total Payment </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="totalPayment"
                          type="text"
                          disabled={true}
                          value={data.totalPayment || "0.00"}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^\d]/g, "");
                            updateData({ totalPayment: value });
                          }}
                          inputMode="numeric"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="paymentAmount90"
                          className="text-sm font-medium mb-1 block"
                        >
                          Enter Payment Amount up to 90%
                        </label>

                        <Input
                          id="paymentAmount90"
                          type="text"
                          value={
                            data.paymentAmount90 !== undefined &&
                            data.paymentAmount90 !== ""
                              ? `${data.paymentAmount90}%`
                              : ""
                          }
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, ""); // keep only numbers

                            const maxValue = 90;

                            // Restrict only max when typing
                            if (Number(value) > maxValue) {
                              value = maxValue;
                            }

                            updateData({ paymentAmount90: value });
                            setCalculator(true);
                          }}
                          onBlur={() => {
                            const minValue = Number(data.buildingType) || 0; // 10 or 25 selected
                            const currentValue = Number(data.paymentAmount90);

                            // On blur, if user entered below minimum then correct
                            if (currentValue < minValue) {
                              updateData({ paymentAmount90: minValue });
                              setCalculator(true);
                            }
                          }}
                          inputMode="numeric"
                        />

                        {/* <Input
                          id="paymentAmount90"
                          type="text"
                          value={
                            data.paymentAmount90 !== undefined &&
                            data.paymentAmount90 !== ""
                              ? `${data.paymentAmount90}%`
                              : ""
                          }
                          onChange={(e) => {
                            const onlyNumbers = e.target.value.replace(
                              /\D/g,
                              ""
                            ); // remove anything not a number
                            updateData({ paymentAmount90: onlyNumbers }); // store number only
                            setCalculator(true);
                          }}
                          inputMode="numeric"
                        /> */}
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="capCostReduction"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> Cap. Cost Reduction </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="capCostReduction"
                          type="number"
                          disabled={true}
                          value={data.capCostReduction || "0.00"}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/[^\d]/g, "");
                            updateData({ capCostReduction: raw });
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="salesTaxCCR"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> Sales Tax on CCR </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="salesTaxCCR"
                          type="number"
                          disabled={true}
                          value={data.salesTaxCCR || "0.00"}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/[^\d]/g, "");
                            updateData({ salesTaxCCR: raw });
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="netCapitalizedCost"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> Net Capitalized Cost </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="netCapitalizedCost"
                          type="number"
                          disabled={true}
                          value={data.netCapitalizedCost || "0.00"}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/[^\d]/g, "");
                            updateData({ netCapitalizedCost: raw });
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="totalDueUpfront"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> Total Due Upfront </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="totalDueUpfront"
                          type="number"
                          disabled={true}
                          value={data.totalDueUpfront || "0.00"}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/[^\d]/g, "");
                            updateData({ totalDueUpfront: raw });
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 border-b border-gray-300 items-center px-2 py-2 ">
                        <label
                          htmlFor="additionalCashDown"
                          className="text-sm font-medium mb-1 flex items-center justify-between pr-2"
                        >
                          <span> Additional Cash Down </span>
                          <span className="">($)</span>
                        </label>
                        <Input
                          id="additionalCashDown"
                          type="text"
                          value={data.additionalCashDown || "0.00"}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            updateData({ additionalCashDown: value });
                          }}
                          inputMode="numeric"
                        />
                      </div>
                    </div>

                    <div className="space-y-4 ">
                      <div className="text-center border py-3 px-4 border-gray-300 h-fit">
                        <h3 className="text-xl font-bold mb-2">
                          Sales Tax Rate:
                        </h3>
                        <Input
                          placeholder="7.50%"
                          value={data.taxRate || ""}
                          onChange={(e) =>
                            updateData({ taxRate: e.target.value })
                          }
                          className="max-w-[100px] mx-auto mb-2"
                        />
                        <h4 className="font-semibold text-sm">
                          Tax Rate Example
                        </h4>
                        <p className=" text-sm">Enter .0700 for 7.00%</p>
                      </div>
                      <button
                        type="button"
                        onClick={resetCalculator}
                        className="text-center w-full gap-2 px-8 py-3 bg-[#4b599b] text-white rounded-sm font-medium hover:bg-blue-900 transition-colors"
                      >
                        Reset Calculator
                      </button>
                    </div>
                  </div>
                </Section>
              </div>
            </Form>
          );
        }}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default Step_1;
