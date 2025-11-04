import React, { useEffect, useContext, useState } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { Form, Formik } from "formik";
import { step_6_validationSchema as validationSchema } from "../../../../utils/schema";
import Cookies from "js-cookie";
import { useDebounce } from "@/app/hooks/useDebounce";
import axios from "axios";
import { loginContext } from "../../GlobalContext";

/* ----------------------------------------------------
 * Date helpers (MM/DD/YYYY)  // modified by Sid
 * ---------------------------------------------------*/
// Pad to 2 digits  // modified by Sid
const pad2 = (n) => String(n).padStart(2, "0"); // modified by Sid

// Date -> "MM/DD/YYYY"  // modified by Sid
const toMMDDYYYY = (d) => {
  if (!d) return "";
  const dt = d instanceof Date ? d : new Date(d);
  return `${pad2(dt.getMonth() + 1)}/${pad2(dt.getDate())}/${dt.getFullYear()}`;
}; // modified by Sid

// "YYYY-MM-DD" -> "MM/DD/YYYY" (for any ISO-like strings) // modified by Sid
const isoToMMDDYYYY = (iso) => {
  if (!iso) return "";
  // also handle already-in-MM/DD/YYYY gracefully
  if (iso.includes("/")) return iso;
  const [y, m, d] = iso.split("T")[0].split("-");
  if (!y || !m || !d) return "";
  return `${pad2(m)}\/${pad2(d)}\/${y}`;
}; // modified by Sid

// Mask raw input to "MM/DD/YYYY" as user types // modified by Sid
const maskToMMDDYYYY = (raw) => {
  const v = String(raw || "").replace(/\D/g, "").slice(0, 8); // keep 8 digits  // modified by Sid
  const mm = v.slice(0, 2);
  const dd = v.slice(2, 4);
  const yyyy = v.slice(4, 8);
  if (v.length <= 2) return mm;
  if (v.length <= 4) return `${mm}/${dd}`;
  return `${mm}/${dd}/${yyyy}`;
}; // modified by Sid

// Normalize any stored value to "MM/DD/YYYY" for display // modified by Sid
const showMMDD = (val) => {
  if (!val) return "";
  return val.includes("-") ? isoToMMDDYYYY(val) : val;
}; // modified by Sid
/* ---------------------------------------------------*/

const Section = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const Step_6 = ({ data, updateData }) => {
  const token = Cookies.get("rto-token");
  const debouncedData = useDebounce(data, 5000);
  const formId = Cookies?.get("formId");
  const { erroObj, setErrorObj } = useContext(loginContext);

  const initialValues = {
    totalPayment: data.totalPayment,
    easyPayBuyerSignature: "",
    easyPayCoBuyerDate: "",
    routingNumber: "",
    accountNumber: "",
    accountType: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",

    // Easy Pay Declination Section
    buyerSigned: data.buyerSigned,
    declinationBuyerDate: "",
    declinationCoBuyerSignature: "",
    declinationCoBuyerDate: "",
  };
  const [bankTypeTop, setBanktype] = useState("bank");

  useEffect(() => {
    scrollTo(0, 0);
    // Set MM/DD/YYYY defaults on first mount if empty  // modified by Sid
    const today = toMMDDYYYY(new Date()); // modified by Sid
    if (!data.easyPayCoBuyerDate) {
      updateData({ easyPayCoBuyerDate: today }); // modified by Sid
    }
    if (!data.declinationBuyerDate) {
      updateData({ declinationBuyerDate: today }); // modified by Sid
    }
    if (!data.declinationCoBuyerDate) {
      updateData({ declinationCoBuyerDate: today }); // modified by Sid
    }
  }, []); // modified by Sid

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
        formType: "step-6",
        form_id: formId || null,
        monthly_payment_amount: formData.totalPayment,
        authorization_signature: formData.easyPayBuyerSignature,
        authorization_date: showMMDD(formData.easyPayCoBuyerDate), // modified by Sid
        routing_number: formData.routingNumber,
        account_number: formData.accountNumber,
        account_type: formData.accountType,
        card_number: formData.cardNumber,
        expiration_month: formData.expMonth,
        expiration_year: formData.expYear,
        cvv: formData.cvv,

        // Easy Pay Declination Section
        buyer_declination_signature: formData.buyerSignature,
        buyer_declination_date: showMMDD(formData.declinationBuyerDate),
        co_buyer_declination_signature: formData.declinationCoBuyerSignature,
        co_buyer_declination_date: showMMDD(formData.declinationCoBuyerDate), 
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

  const bankType = [
    { id: 1, label: "Bank Detail (ACH)", value: "bank" },
    { id: 2, label: "Credit Card", value: "credit" },
  ];

  return (
    <Section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
        validateOnBlur={true} // validate when field is touched
        validateOnChange={false} // optional, only validate on blur
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="space-y-4">
            <div className="max-w-4xl mx-auto sm:px-6 mb-10">
              <div className="text-center mb-3 py-4 text-[#4b599b]">
                <h2 className="text-2xl font-bold">Easy Pay Authorization</h2>
              </div>

              <div className="space-y-3 mb-6 text-center">
                <p className="">
                  Outdoor Credit Inc. utilizes the Easy Pay Payment System at no
                  additional cost to you.
                </p>
                <h2 className="text-lg font-bold">
                  Your first payment will be 30 days from{" "}
                  <br className="md:block hidden" /> the receipt of your
                  building.
                </h2>
              </div>

              {/* Easy Pay Authorization Section */}
              <div className="border border-gray-300 rounded-lg p-6 mb-8">
                {/* <h3 className="text-xl font-bold mb-4">Easy Pay Authorization</h3> */}

                <div className="mb-4">
                  <p className="mb-4">
                    I hereby authorize{" "}
                    <span className="font-medium">OUTDOOR CREDIT INC.</span> to
                    instruct my financial institution to make payments due to
                    OUTDOOR CREDIT INC. from the account shown on the voided
                    check attached.*
                  </p>
                  <p className="mb-4">
                    I understand that the monthly payment of ${" "}
                    <Input
                      className="inline-flex max-w-20 border"
                      name={"monthlyPayment"}
                      value={data.monthlyPayment || "0.00"}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ monthlyPayment: e.target.value });
                        setErrorObj({ ...erroObj, monthlyPayment: "" });
                      }}
                      onBlur={handleBlur}
                    />{" "}
                    {touched.monthlyPayment &&
                      errors.monthlyPayment &&
                      !erroObj.monthlyPayment && (
                        <span className="text-red-500 flex text-right text-sm">
                          {"required"}
                        </span>
                      )}
                    {erroObj.monthlyPayment && (
                      <span className="text-red-500 text-sm">{"required"}</span>
                    )}
                    will be taken directly out of my checking account on the
                    date requested above each month for the term of my agreement
                    with OUTDOOR CREDIT INC.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Buyer Authorization */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">Signature</h4>
                    </div>
                    <Input
                      value={data.easyPayBuyerSignature || ""}
                      name={"easyPayBuyerSignature"}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ easyPayBuyerSignature: e.target.value });
                        setErrorObj({ ...erroObj, easyPayBuyerSignature: "" });
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.easyPayBuyerSignature &&
                      errors.easyPayBuyerSignature &&
                      !erroObj.easyPayBuyerSignature && (
                        <div className="text-red-500 flex text-right text-sm">
                          {errors.easyPayBuyerSignature}
                        </div>
                      )}
                    {erroObj.easyPayBuyerSignature && (
                      <div className="text-red-500 text-sm">
                        {erroObj.easyPayBuyerSignature}
                      </div>
                    )}
                  </div>

                  {/* Co-Buyer Authorization */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">Date:</h4>
                    </div>
                    <Input
                      type="text" // enforce MM/DD/YYYY  // modified by Sid
                      placeholder="MM/DD/YYYY" // modified by Sid
                      value={
                        showMMDD(data.easyPayCoBuyerDate) ||
                        toMMDDYYYY(new Date())
                      } // modified by Sid
                      onChange={(e) => {
                        const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                        updateData({ easyPayCoBuyerDate: masked }); // modified by Sid
                        setErrorObj({ ...erroObj, easyPayCoBuyerDate: "" }); // modified by Sid
                      }}
                      onBlur={handleBlur}
                      className="p-2 border border-gray-300 rounded"
                    />
                    {touched.easyPayCoBuyerDate &&
                      errors.easyPayCoBuyerDate &&
                      !erroObj.easyPayCoBuyerDate && (
                        <div className="text-red-500 flex text-right text-sm">
                          {errors.easyPayCoBuyerDate}
                        </div>
                      )}
                    {erroObj.easyPayCoBuyerDate && (
                      <div className="text-red-500 text-sm">
                        {erroObj.easyPayCoBuyerDate}
                      </div>
                    )}
                  </div>
                </div>

                {/* Banking Information */}
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm mb-4">
                    * Attach a voided check or provide routing and account
                    information.
                  </p>
                  <div className="grid md:grid-cols-2 gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">Select Type:</h4>
                        <Select
                          placeholder=""
                          name={"bankType"}
                          value={bankTypeTop || ""}
                          onChange={(e) => {
                            setBanktype(e.target.value);
                          }}
                          className="w-full"
                          options={bankType}
                        />
                      </div>
                    </div>
                  </div>

                  {bankTypeTop == "bank" ? (
                    <>
                      <div className="border-t border-gray-300 pt-4 grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium">Routing #:</h4>
                          </div>
                          <Input
                            type="text"
                            name={"routingNumber"}
                            value={data.routingNumber || ""}
                            onChange={(e) => {
                              const value = e.target.value.replace(
                                /\D/g,
                                ""
                              ); // Remove non-digit chars
                              handleChange(e);
                              updateData({ routingNumber: value });
                              updateData({ easyPayOption: "accept"});
                              setErrorObj({ ...erroObj, routingNumber: "" });
                            }}
                            placeholder="Routing Number"
                            onBlur={handleBlur}
                          />
                          {touched.routingNumber &&
                            errors.routingNumber &&
                            !erroObj.routingNumber && (
                              <div className="text-red-500 flex text-right text-sm">
                                {errors.routingNumber}
                              </div>
                            )}
                          {erroObj.routingNumber && (
                            <div className="text-red-500 text-sm">
                              {erroObj.routingNumber}
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium">Account #:</h4>
                          </div>
                          <Input
                            type="text"
                            name={"accountNumber"}
                            value={data.accountNumber || ""}
                            onChange={(e) => {
                              const value = e.target.value.replace(
                                /\D/g,
                                ""
                              ); // Remove non-digit chars
              
                              handleChange(e);
                              updateData({ accountNumber: value });
                              updateData({ easyPayOption: "accept"});
                              setErrorObj({ ...erroObj, accountNumber: "" });
                            }}
                            placeholder="Account Number"
                            onBlur={handleBlur}
                          />
                          {touched.accountNumber &&
                            errors.accountNumber &&
                            !erroObj.accountNumber && (
                              <div className="text-red-500 flex text-right text-sm">
                                {errors.accountNumber}
                              </div>
                            )}
                          {erroObj.accountNumber && (
                            <div className="text-red-500 text-sm">
                              {erroObj.accountNumber}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">
                          Please indicate account type:
                        </h4>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <Input
                              type="radio"
                              name="accountType"
                              value="CHECKING"
                              checked={data.accountType === "CHECKING"}
                              onChange={(e) => {
                                handleChange(e);
                                updateData({ accountType: e.target.value });
                                updateData({ easyPayOption: "accept"});
                                setErrorObj({ ...erroObj, accountType: "" });
                              }}
                              className="text-blue-600"
                            />
                            <span>CHECKING</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <Input
                              type="radio"
                              name="accountType"
                              value="SAVINGS"
                              checked={data.accountType === "SAVINGS"}
                              onChange={(e) => {
                                handleChange(e);
                                updateData({ accountType: e.target.value });
                                updateData({ easyPayOption: "accept"});
                                setErrorObj({ ...erroObj, accountType: "" });
                              }}
                              className="text-blue-600"
                            />
                            <span>SAVINGS</span>
                          </label>
                        </div>
                        {touched.accountType &&
                          errors.accountType &&
                          !erroObj.accountType && (
                            <div className="text-red-500 text-sm">
                              {errors.accountType}
                            </div>
                          )}
                        {erroObj.accountType && (
                          <div className="text-red-500 text-sm">
                            {erroObj.accountType}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      {/* Credit Card Details */}
                      <div className="border-t border-gray-300 pt-4">
                        <h4 className="font-bold mb-3">Credit Card Details</h4>

                        <div className="grid sm:grid-cols-3 gap-2">
                          <div className="md:col-span-2 sm:col-span-3">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium">Card Number:</h4>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                              {/* <Input
                              type="number"
                              name={"cardNumber"}
                              value={data.cardNumber || ""}
                              onChange={(e) =>{
                                handleChange(e),
                                updateData({ cardNumber: e.target.value })
                              }}
                              onBlur={handleBlur}
                              placeholder=""
                              maxLength={16}
                              className="no-spinner"
                            /> */}

                              <input
                                type="text"
                                name="cardNumber"
                                value={data.cardNumber || ""}
                                onChange={(e) => {
                                  const value = e.target.value.replace(
                                    /\D/g,
                                    ""
                                  ); // Remove non-digit chars
                                  if (value.length <= 16) {
                                    handleChange(e);
                                    updateData({ cardNumber: value });
                                    updateData({ easyPayOption: "accept"});
                                    setErrorObj({ ...erroObj, cardNumber: "" });
                                  }
                                }}
                                placeholder="Card Number"
                                onBlur={handleBlur}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                inputMode="numeric"
                              />

                              {touched.cardNumber &&
                                errors.cardNumber &&
                                !erroObj.cardNumber && (
                                  <div className="text-red-500 text-sm">
                                    {errors.cardNumber}
                                  </div>
                                )}
                              {erroObj.cardNumber && (
                                <div className="text-red-500 text-sm">
                                  {erroObj.cardNumber}
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium">Month:</h4>
                            </div>
                            {/* <Input
                            type="number"
                            name={"expMonth"}
                            value={data.expMonth || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ expMonth: e.target.value });
                            }}
                            onBlur={handleBlur}
                            placeholder="MM"
                            maxLength={2}
                            className="no-spinner"
                          /> */}
                            <input
                              type="text"
                              name="expMonth"
                              value={data.expMonth || ""}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // Remove non-digit chars
                                if (value.length <= 2) {
                                  handleChange(e);
                                  updateData({ expMonth: value });
                                  updateData({ easyPayOption: "accept"});
                                  setErrorObj({ ...erroObj, expMonth: "" });
                                }
                              }}
                              placeholder="MM"
                              onBlur={handleBlur}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              inputMode="numeric"
                            />
                            {touched.expMonth &&
                              errors.expMonth &&
                              !erroObj.expMonth && (
                                <div className="text-red-500 text-sm">
                                  {errors.expMonth}
                                </div>
                              )}
                            {erroObj.expMonth && (
                              <div className="text-red-500 text-sm">
                                {erroObj.expMonth}
                              </div>
                            )}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium">Year:</h4>
                            </div>
                            {/* <Input
                            type="number"
                            name={"expYear"}
                            value={data.expYear || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ expYear: e.target.value });
                            }}
                            onBlur={handleBlur}
                            placeholder="YYYY"
                            maxLength={4}
                            className="no-spinner"
                          /> */}

                            <input
                              type="text"
                              name="expYear"
                              value={data.expYear || ""}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // Remove non-digit chars
                                if (value.length <= 4) {
                                  handleChange(e);
                                  updateData({ expYear: value });
                                  updateData({ easyPayOption: "accept"});
                                  setErrorObj({ ...erroObj, expYear: "" });
                                }
                              }}
                              placeholder="YYYY"
                              onBlur={handleBlur}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              inputMode="numeric"
                            />
                            {touched.expYear &&
                              errors.expYear &&
                              !erroObj.expYear && (
                                <div className="text-red-500 text-sm">
                                  {errors.expYear}
                                </div>
                              )}
                            {erroObj.expYear && (
                              <div className="text-red-500 text-sm">
                                {erroObj.expYear}
                              </div>
                            )}
                          </div>
                          <div className="">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium">CCV:</h4>
                            </div>
                            {/* <Input
                            type="number"
                            name={"cvv"}
                            value={data.cvv || ""}
                            onChange={(e) => {
                              handleChange(e);
                              updateData({ cvv: e.target.value });
                            }}
                            placeholder="CVV"
                            maxLength={4}
                            className="no-spinner"
                            onBlur={handleBlur}
                          /> */}
                            <input
                              type="text"
                              name="cvv"
                              value={data.cvv || ""}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // Remove non-digit chars
                                if (value.length <= 4) {
                                  handleChange(e);
                                  updateData({ cvv: value });
                                  updateData({ easyPayOption: "accept"});
                                  setErrorObj({ ...erroObj, cvv: "" });
                                }
                              }}
                              placeholder="YYYY"
                              onBlur={handleBlur}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              inputMode="numeric"
                            />
                            {touched.cvv && errors.cvv && !erroObj.cvv && (
                              <div className="text-red-500 text-sm">
                                {errors.cvv}
                              </div>
                            )}
                            {erroObj.cvv && (
                              <div className="text-red-500 text-sm">
                                {erroObj.cvv}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Easy Pay Declination Section */}
              <div className="border border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Easy Pay Declination</h3>

                <p className="text-sm mb-3">
                    Please choose whether you would like to use the EasyPay
                    System offered by OUTDOOR CREDIT INC.
                  </p>

                  <div className="flex flex-col gap-3 mb-4">
                    {/* Accept Option */}
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="easyPayOption"
                        value="accept"
                        checked={data.easyPayOption === "accept"}
                        onChange={(e) => {
                          updateData({ easyPayOption: e.target.value });
                        }}
                        className="mt-1"
                      />
                      <span>
                        <strong>Yes, I want to use EasyPay</strong>
                        <br />
                        {/* <span className="text-sm text-gray-600">
                          My payment will be automatically deducted each month.
                        </span> */}
                      </span>
                    </label>

                    {/* Decline Option */}
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="easyPayOption"
                        value="decline"
                        checked={data.easyPayOption === "decline"}
                        onChange={(e) => {
                          updateData({ easyPayOption: e.target.value });
                          // Clear all EasyPay data when declining
                          updateData({
                            routingNumber: "",
                            accountNumber: "",
                            accountType: "",
                            cardNumber: "",
                            expMonth: "",
                            expYear: "",
                            cvv: "",
                          });
                        }}
                        className="mt-1"
                      />
                      <span>
                        <strong>No, I decline the EasyPay System</strong>
                        <br />
                        {/* <span className="text-sm text-gray-600">
                          I understand that I am responsible for making payments
                          on or before the due date. If a payment is more than
                          10 days late, a late fee will apply.
                        </span> */}
                      </span>
                    </label>
                  </div>

                <div className={`border-t border-gray-300 pt-4`}>
                  {/* <h4 className="font-bold mb-3">Easy Pay Declination</h4> */}
                  <div className={`${data.easyPayOption == "decline" ? "" : "hidden" }  mb-4`}>
                  <p className="mb-4">
                    I decline the opportunity to use the EasyPay System offered
                    by OUTDOOR CREDIT INC. I understand by declining that it is
                    my responsibility to insure that payments are received on or
                    before the due date. If the payment is more than 10 days
                    late I will be charged a late fee.
                  </p>
                </div>
                
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">Buyer Signature:</h4>
                    </div>
                    <Input
                      value={data.buyerSigned || ""}
                      name={"buyerSigned"}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({
                          buyerSigned: e.target.value,
                        });
                        setErrorObj({ ...erroObj, buyerSigned: "" });
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.buyerSigned &&
                      errors.buyerSigned &&
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
                  <div className="">
                    <div className="flex items-center gap-2 mt-2">
                      <h4 className="font-medium">Date:</h4>
                    </div>
                    <Input
                      type="text" // enforce MM/DD/YYYY  // modified by Sid
                      placeholder="MM/DD/YYYY" // modified by Sid
                      value={
                        showMMDD(data.declinationBuyerDate) ||
                        toMMDDYYYY(new Date())
                      } // modified by Sid
                      onChange={(e) => {
                        const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                        handleChange({
                          target: { name: "declinationBuyerDate", value: masked },
                        }); // modified by Sid
                        updateData({ declinationBuyerDate: masked }); // modified by Sid
                      }}
                      className="p-2 border border-gray-300 rounded"
                      onBlur={handleBlur}
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">Co-Buyer Signature:</h4>
                    </div>
                    <Input
                      value={data.declinationCoBuyerSignature || ""}
                      onChange={(e) =>
                        updateData({
                          declinationCoBuyerSignature: e.target.files[0],
                        })
                      }
                    />
                  </div>
                  <div className="">
                    <div className="flex items-center gap-2 mt-2">
                      <h4 className="font-medium">Date:</h4>
                    </div>
                    <Input
                      type="text" // enforce MM/DD/YYYY // modified by Sid
                      placeholder="MM/DD/YYYY" // modified by Sid
                      value={
                        showMMDD(data.declinationCoBuyerDate) ||
                        toMMDDYYYY(new Date())
                      } // modified by Sid
                      onChange={(e) => {
                        const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                        updateData({ declinationCoBuyerDate: masked }); // modified by Sid
                      }}
                      className="p-2 border border-gray-300 rounded"
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default Step_6;
