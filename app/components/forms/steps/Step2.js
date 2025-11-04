import React, { useEffect, useContext } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { step_2_validationSchema as validationSchema } from "@/utils/schema";
import { useDebounce } from "@/app/hooks/useDebounce";
import { Formik, Form } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import { loginContext } from "../../GlobalContext";

const Section = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 pb-8 ${className}`}>
      {children}
    </div>
  );
};

const InnerWrapper = ({ className, children }) => {
  return (
    <div className={`border-t border-gray-300 pt-8 mt-10 ${className}`}>
      {children}
    </div>
  );
};

// ---------- Helpers for MM/DD/YYYY formatting ----------
// modified by Sid — format a Date object to MM/DD/YYYY
const formatDateToMMDDYYYY = (dateObj) => {
  const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
  const dd = String(dateObj.getDate()).padStart(2, "0");
  const yyyy = dateObj.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
};

// modified by Sid — take raw user input, keep digits, and insert / as MM/DD/YYYY
const maskToMMDDYYYY = (raw) => {
  const digits = (raw || "").replace(/\D/g, "").slice(0, 8); // keep at most 8 digits
  const mm = digits.slice(0, 2);
  const dd = digits.slice(2, 4);
  const yyyy = digits.slice(4, 8);
  if (digits.length <= 2) return mm;
  if (digits.length <= 4) return `${mm}/${dd}`;
  return `${mm}/${dd}/${yyyy}`;
};


const Step_2 = ({ data, updateData }) => {
  const token = Cookies.get("rto-token");
  const debouncedData = useDebounce(data, 5000);
  const formId = Cookies?.get("formId");
  const { setSaveStatus, erroObj, setErrorObj } = useContext(loginContext);
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

  const states = [
    { value: "", label: "Select State" },
    { id: 1, value: "FL", label: "Florida" },
    { id: 2, value: "GA", label: "Georgia" },
  ];

  const phoneType = [
    { value: "Work", label: "Work" },
    { value: "Cell", label: "Cell" },
  ];

  const initialValues = {
    // Buyer info
    firstName: data.firstName,
    ssn: data.ssn,
    phoneType: "",
    buyerPhone: data.buyerPhone,
    firstStreet: data.firstStreet,
    city: data.city,
    state: data.state,
    zip: data.zip,
    buyerYearsAtAddress: data.buyerYearsAtAddress,

    // Co-Buyer info
    coFirstName: data.coFirstName,
    coSsn: data.coSsn,
    coBuyerPhoneType: data.coBuyerPhoneType,
    coBuyerPhone: data.coBuyerPhone,
    cofirstStreet: data.cofirstStreet,
    coCity: data.coCity,
    coState: data.coState,
    coZip: data.coZip,

    // Mortgage & References
    mortageCompany: "",
    name1: "",
    relationship1: "",
    phone1: "",
    name2: "",
    relationship2: "",
    phone2: "",

    // Employment info
    email: "",
    employer: "",
    employerLength: "",
    employerPhone: "",
    coEmployer: "",
    coEmployerLength: "",
    coEmployerPhone: "",

    // Signatures
    buyerSigned: data.buyerSigned,
    buyerDate: "",
    coBuyerSigned: "",
    coBuyerDate: "",
  };

  const saveFormData = async (formData) => {
    try {
      const payload = {
        formType: "step-2",
        form_id: formId || null,
        firstName: formData?.firstName || "",
        ssn: formData?.ssn || "",
        phoneType: formData?.phoneType || "",
        buyerPhone: formData?.buyerPhone || "",
        buyerAddress: formData?.firstStreet || "",
        buyerCity: formData?.city || "",
        buyerState: formData?.state || "",
        buyerZip: formData?.zip || "",
        buyerYearsAtAddress: formData?.buyerYearsAtAddress || "",
        coFirstName: formData?.coFirstName || "",
        coSsn: formData?.coSsn || "",
        coBuyerPhoneType: formData?.coBuyerPhoneType || "",
        coBuyerPhone: formData?.coBuyerPhone || "",
        coBuyerAddress: formData?.cofirstStreet || "",
        coBuyerCity: formData?.coCity || "",
        coBuyerState: formData?.coState || "",
        coBuyerZip: formData?.coZip || "",
        mortageCompany: formData?.mortageCompany || "",
        name1: formData?.name1 || "",
        relationship1: formData?.relationship1 || "",
        phone1: formData?.phone1 || "",
        name2: formData?.name2 || "",
        relationship2: formData?.relationship2 || "",
        phone2: formData?.phone2 || "",
        email: formData?.email || "",
        employer: formData?.employer || "",
        employerLength: formData?.employerLength || "",
        employerPhone: formData?.employerPhone || "",
        coEmployer: formData?.coEmployer || "",
        coEmployerLength: formData?.coEmployerLength || "",
        coEmployerPhone: formData?.coEmployerPhone || "",
        // modified by Sid — API receives dates as MM/DD/YYYY strings
        buyerSigned: formData?.buyerSigned || "",
        buyerDate: formData?.buyerDate || "",
        coBuyerSigned: formData?.coBuyerSigned || "",
        coBuyerDate: formData?.coBuyerDate || "",
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
    // modified by Sid — set default Buyer Date in MM/DD/YYYY (masked text, not input type="date")
    const todayMMDDYYYY = formatDateToMMDDYYYY(new Date());
    updateData({
      buyerDate: data.buyerDate || todayMMDDYYYY, // modified by Sid
    });
    // Optionally set a default Co-Buyer date too (if needed)
    updateData({
      coBuyerDate: data.coBuyerDate || todayMMDDYYYY, // modified by Sid
    });
    scrollTo(0, 0);
  }, []); // modified by Sid

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
        validateOnBlur={true} // validate when field is touched
        validateOnChange={false} // optional, only validate on blur
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="space-y-4">
            <Section>
              <div className="text-center mb-8 py-5">
                <h2 className="text-2xl underline font-bold mb-1 text-[#4b599b]">
                  Information Sheet
                </h2>
                <p className="text-sm font-semibold">
                  ALL INFORMATION MUST BE COMPLETE AND ELEGIBLE
                </p>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-4 gap mb-4">
                {/* buyer col  */}
                <div className="buyerCol space-y-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Buyer:<span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      name="firstName"
                      value={`${data.firstName || ""} ${
                        data.lastName || ""
                      }`.trim()}
                      onChange={(e) => {
                        handleChange(e);

                        const [first, ...rest] = e.target.value.split(" ");
                        const last = rest.join(" ");

                        updateData({ firstName: e.target.value });

                        setErrorObj({ ...erroObj, firstName: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {/* <Input
                      placeholder=""
                      name="firstName"
                      value={data.firstName || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ firstName: e.target.value });
                        setErrorObj({ ...erroObj, firstName: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    /> */}
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
                      <label className="font-medium">
                        SS#: <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    {/* <Input
                      placeholder="000-00-0000"
                      value={data.ssn || ""}
                      name={"ssn"}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ ssn: e.target.value });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    /> */}
                    <Input
                      placeholder="000-00-0000"
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
                      <div className="text-red-500 text-sm">{erroObj.ssn}</div>
                    )}
                  </div>
                  <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-4 gap-y-2 items-end">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">
                          Phone: <span className="text-red-500 text-sm">*</span>
                        </label>
                      </div>
                      <Select
                        placeholder=""
                        name={"phoneType"}
                        value={data.phoneType || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ phoneType: e.target.value });
                        }}
                        className="w-full"
                        options={phoneType}
                        onBlur={handleBlur}
                      />
                      {touched.phoneType && errors.phoneType && (
                        <div className="text-red-500 text-sm">
                          {errors.phoneType}
                        </div>
                      )}
                    </div>
                    <div className="col-span-2">
                      {/* <Input
                        placeholder="(000) 000-0000"
                        name={"buyerPhone"}
                        value={data.buyerPhone || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ buyerPhone: e.target.value });
                          setErrorObj({ ...erroObj, buyerPhone: "" });
                        }}
                        className="w-full"
                        onBlur={handleBlur}
                      /> */}
                      <Input
                        placeholder="(000) 000-0000"
                        name="phone1"
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
                        className="w-full"
                        onBlur={handleBlur}
                      />
                      {touched.buyerPhone &&
                        errors.buyerPhone &&
                        !erroObj.buyerPhone && (
                          <div className="text-red-500 text-sm">
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
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Mailing Address:{" "}
                        <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      value={data.firstStreet || ""}
                      name={"firstStreet"}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ firstStreet: e.target.value });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.firstStreet && errors.firstStreet && (
                      <div className="text-red-500 text-sm">
                        {errors.firstStreet}
                      </div>
                    )}
                  </div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">
                          City: <span className="text-red-500 text-sm">*</span>
                        </label>
                      </div>
                      <Input
                        placeholder=""
                        name={"city"}
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
                        <label className="font-medium">
                          State: <span className="text-red-500 text-sm">*</span>
                        </label>
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
                        }}
                      >
                        {states?.map((item, index) => (
                          <option key={item.label} value={item.id}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      {/* <Select
                        placeholder=""
                        value={data.state || ""}
                        onChange={(e) => {
                          handleChange(e);
                          updateData({ state: e.target.value });
                          setErrorObj({ ...erroObj, state: "" });
                        }}
                        className="w-full"
                        name={"state"}
                        options={states}
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
                        <label className="font-medium">
                          Zip: <span className="text-red-500 text-sm">*</span>
                        </label>
                      </div>
                      {/* <Input
                placeholder=""
                value={data.buyerZip || ""}
                name={"buyerZip"}
                onChange={(e) => {
                  handleChange(e);
                  updateData({ buyerZip: e.target.value })}}
                className="w-full"
                onBlur={handleBlur}
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
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Years at this Address:{" "}
                        <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      name={"buyerYearsAtAddress"}
                      value={data.buyerYearsAtAddress || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ buyerYearsAtAddress: e.target.value });
                        setErrorObj({ ...erroObj, buyerYearsAtAddress: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.buyerYearsAtAddress &&
                      errors.buyerYearsAtAddress &&
                      !erroObj.buyerYearsAtAddress && (
                        <div className="text-red-500 text-sm">
                          {errors.buyerYearsAtAddress}
                        </div>
                      )}
                    {erroObj.buyerYearsAtAddress && (
                      <div className="text-red-500 text-sm">
                        {erroObj.buyerYearsAtAddress}
                      </div>
                    )}
                  </div>
                </div>

                {/* co-buyer col  */}
                <div className="coBuyerCol space-y-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">Co-Buyer:</label>
                    </div>
                    <Input
                      placeholder=""
                      value={data.coFirstName || ""}
                      onChange={(e) =>
                        updateData({ coFirstName: e.target.value })
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">SS#:</label>
                    </div>
                    {/* <Input
                      placeholder="000-00-0000"
                      value={data.coSsn || ""}
                      onChange={(e) => updateData({ coSsn: e.target.value })}
                      className="w-full"
                    /> */}

                    <Input
                      placeholder="000-00-0000"
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
                  <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-4 gap-y-2 items-end">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">Phone:</label>
                      </div>
                      <Select
                        placeholder=""
                        value={data.coBuyerPhoneType || ""}
                        onChange={(e) =>
                          updateData({ coBuyerPhoneType: e.target.value })
                        }
                        className="w-full"
                        options={phoneType}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input
                        placeholder="(000) 000-0000"
                        value={data.coBuyerPhone || ""}
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
                          updateData({ coBuyerPhone: formatted });
                        }}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">Mailing Address:</label>
                    </div>
                    <Input
                      placeholder=""
                      value={data.cofirstStreet || ""}
                      onChange={(e) =>
                        updateData({ cofirstStreet: e.target.value })
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">City:</label>
                      </div>
                      <Input
                        placeholder=""
                        value={data.coCity || ""}
                        onChange={(e) => updateData({ coCity: e.target.value })}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">State:</label>
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
                        }}
                      >
                        {states?.map((item, index) => (
                          <option key={item.label} value={item.id}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      {/* <Select
                        placeholder=""
                        value={data.coState || ""}
                        onChange={(e) =>
                          updateData({ coState: e.target.value })
                        }
                        className="w-full"
                        options={states}
                      /> */}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">Zip:</label>
                      </div>
                      {/* <Input
                        placeholder=""
                        value={data.coBuyerZip || ""}
                        onChange={(e) =>
                          updateData({ coBuyerZip: e.target.value })
                        }
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
                  </div>
                </div>
              </div>

              <InnerWrapper>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Mortage Company:
                        <span className="text-red-500 text-sm">*</span>{" "}
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      value={data.mortageCompany || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ mortageCompany: e.target.value });
                        setErrorObj({ ...erroObj, mortageCompany: "" });
                      }}
                      name={"mortageCompany"}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.mortageCompany &&
                      errors.mortageCompany &&
                      !erroObj.mortageCompany && (
                        <div className="text-red-500 text-sm">
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
              </InnerWrapper>

              <InnerWrapper>
                <div className="col-span-2 mb-5">
                  <p className="font-bold">
                    References-(not living in same household, 2 required)
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Name: <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      name={"name1"}
                      value={data.name1 || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ name1: e.target.value });
                        setErrorObj({ ...erroObj, name1: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.name1 && errors.name1 && !erroObj.name1 && (
                      <div className="text-red-500 text-sm">{errors.name1}</div>
                    )}
                    {erroObj.name1 && (
                      <div className="text-red-500 text-sm">
                        {erroObj.name1}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Relationship:{" "}
                        <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      name={"relationship1"}
                      value={data.relationship1 || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ relationship1: e.target.value });
                        setErrorObj({ ...erroObj, relationship1: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.relationship1 &&
                      errors.relationship1 &&
                      !erroObj.relationship1 && (
                        <div className="text-red-500 text-sm">
                          {errors.relationship1}
                        </div>
                      )}
                    {erroObj.relationship1 && (
                      <div className="text-red-500 text-sm">
                        {erroObj.relationship1}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Phone: <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder="(000) 000-0000"
                      name="phone1"
                      value={data.phone1 || ""}
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
                        updateData({ phone1: formatted });
                        setErrorObj({ ...erroObj, phone1: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.phone1 && errors.phone1 && !erroObj.phone1 && (
                      <div className="text-red-500 text-sm">
                        {errors.phone1}
                      </div>
                    )}
                    {erroObj.phone1 && (
                      <div className="text-red-500 text-sm">
                        {erroObj.phone1}
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Name: <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      value={data.name2 || ""}
                      name={"name2"}
                      onChange={(e) => {
                        handleChange(e), updateData({ name2: e.target.value });
                        setErrorObj({ ...erroObj, name2: "" });
                      }}
                      onBlur={handleBlur}
                      className="w-full"
                    />
                    {touched.name2 && errors.name2 && !erroObj.name2 && (
                      <div className="text-red-500 text-sm">{errors.name2}</div>
                    )}
                    {erroObj.name2 && (
                      <div className="text-red-500 text-sm">
                        {erroObj.name2}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Relationship:{" "}
                        <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      name={"relationship2"}
                      value={data.relationship2 || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ relationship2: e.target.value });
                        setErrorObj({ ...erroObj, relationship2: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.relationship2 &&
                      errors.relationship2 &&
                      !erroObj.relationship2 && (
                        <div className="text-red-500 text-sm">
                          {errors.relationship2}
                        </div>
                      )}
                    {erroObj.relationship2 && (
                      <div className="text-red-500 text-sm">
                        {erroObj.relationship2}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Phone: <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder="(000) 000-0000"
                      name="phone2"
                      value={data.phone2 || ""}
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
                        updateData({ phone2: formatted });
                        setErrorObj({ ...erroObj, phone2: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.phone2 && errors.phone2 && !erroObj.phone1 && (
                      <div className="text-red-500 text-sm">
                        {errors.phone2}
                      </div>
                    )}
                    {erroObj.phone2 && (
                      <div className="text-red-500 text-sm">
                        {erroObj.phone2}
                      </div>
                    )}
                  </div>
                </div>
              </InnerWrapper>

              <InnerWrapper>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        E-Mail Address:{" "}
                        <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      value={data.email || ""}
                      name={"email"}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ email: e.target.value });
                        setErrorObj({ ...erroObj, email: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && !erroObj.email && (
                      <div className="text-red-500 text-sm">{errors.email}</div>
                    )}
                    {erroObj.email && (
                      <div className="text-red-500 text-sm">
                        {erroObj.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Employer:{" "}
                        <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      name={"employer"}
                      value={data.employer || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ employer: e.target.value });
                        setErrorObj({ ...erroObj, employer: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.employer &&
                      errors.employer &&
                      !erroObj.employer && (
                        <div className="text-red-500 text-sm">
                          {errors.employer}
                        </div>
                      )}
                    {erroObj.employer && (
                      <div className="text-red-500 text-sm">
                        {erroObj.employer}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Length: <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      placeholder=""
                      name={"employerLength"}
                      value={data.employerLength || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ employerLength: e.target.value });
                        setErrorObj({ ...erroObj, employerLength: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.employerLength &&
                      errors.employerLength &&
                      !erroObj.employerLength && (
                        <div className="text-red-500 text-sm">
                          {errors.employerLength}
                        </div>
                      )}
                    {erroObj.employerLength && (
                      <div className="text-red-500 text-sm">
                        {erroObj.employerLength}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">
                        Work Phone:{" "}
                        <span className="text-red-500 text-sm">*</span>
                      </label>
                    </div>
                    <Input
                      name={"employerPhone"}
                      placeholder="(000) 000-0000"
                      value={data.employerPhone || ""}
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
                        updateData({ employerPhone: formatted });
                        setErrorObj({ ...erroObj, employerPhone: "" });
                      }}
                      className="w-full"
                      onBlur={handleBlur}
                    />
                    {touched.employerPhone &&
                      errors.employerPhone &&
                      !erroObj.employerPhone && (
                        <div className="text-red-500 text-sm">
                          {errors.employerPhone}
                        </div>
                      )}
                    {erroObj.employerPhone && (
                      <div className="text-red-500 text-sm">
                        {erroObj.employerPhone}
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4 border-t border-gray-200 pt-5 mt-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">Co-Name Employer:</label>
                    </div>
                    <Input
                      placeholder=""
                      value={data.coEmployer || ""}
                      onChange={(e) =>
                        updateData({ coEmployer: e.target.value })
                      }
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">Length:</label>
                    </div>
                    <Input
                      placeholder=""
                      value={data.coEmployerLength || ""}
                      onChange={(e) =>
                        updateData({ coEmployerLength: e.target.value })
                      }
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="font-medium">Work Phone:</label>
                    </div>
                    <Input
                      placeholder="(000) 000-0000"
                      value={data.coEmployerPhone || ""}
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
                        updateData({ coEmployerPhone: formatted });
                      }}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-gray-500 text-sm font-semibold mb-6">
                    BY AFFIXING MY (OUR) SIGNATURES BELOW, I (WE) CERTIFY ALL OF
                    THE INFORMATION SUPPLIED BY ME ON THIS FORM IS TRUE AND
                    CORRECT, AND HEREBY AUTHORIZE THE RELEASE OF ANY
                    INFORMATION, DEEMED NECESSARY BY LESSOR, RELATING TO
                    EMPLOYMENT, INCOME, AND EXISTING OR PRIOR LEASES INCLUDING
                    PROPERTY. ANY FALSE STATEMENT CAN BE
                  </p>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">
                          Buyer Signed:{" "}
                          <span className="text-red-500 text-sm">*</span>
                        </label>
                      </div>
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
                        className="w-full"
                      />
                      {touched.buyerSigned &&
                        errors.buyerSigned &&
                        !erroObj.buyerSigned && (
                          <div className="text-red-500 text-sm">
                            {errors.buyerSigned}
                          </div>
                        )}
                      {erroObj.buyerSigned && (
                        <div className="text-red-500 text-sm">
                          {erroObj.buyerSigned}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">
                          Date: <span className="text-red-500 text-sm">*</span>
                        </label>
                      </div>
                       {/* modified by Sid — changed to text with MM/DD/YYYY mask */}
                       <Input
                        type="text" // modified by Sid — text to allow MM/DD/YYYY mask
                        name={"buyerDate"}
                        placeholder="MM/DD/YYYY" // modified by Sid
                        value={
                          data.buyerDate ||
                          formatDateToMMDDYYYY(new Date()) // modified by Sid
                        }
                        onChange={(e) => {
                          const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                          handleChange({ target: { name: "buyerDate", value: masked }});
                          updateData({ buyerDate: masked }); // modified by Sid
                          setErrorObj({ ...erroObj, buyerDate: "" });
                        }}
                        onBlur={handleBlur}
                        className="w-full"
                      />
                      {touched.buyerDate &&
                        errors.buyerDate &&
                        !erroObj.buyerDate && (
                          <div className="text-red-500 text-sm">
                            {errors.buyerDate}
                          </div>
                        )}
                      {erroObj.buyerDate && (
                        <div className="text-red-500 text-sm">
                          {erroObj.buyerDate}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">Co-Buyer Signed:</label>
                      </div>
                      <Input
                        placeholder=""
                        value={data.coBuyerSigned || ""}
                        onChange={(e) =>
                          updateData({ coBuyerSigned: e.target.value })
                        }
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">Date:</label>
                      </div>
                     {/* modified by Sid — changed to text with MM/DD/YYYY mask */}
                     <Input
                        type="text" // modified by Sid — text to allow MM/DD/YYYY mask
                        name={"coBuyerDate"}
                        placeholder="MM/DD/YYYY" // modified by Sid
                        value={
                          data.coBuyerDate ||
                          formatDateToMMDDYYYY(new Date()) // modified by Sid
                        }
                        onChange={(e) => {
                          const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                          handleChange({ target: { name: "coBuyerDate", value: masked }});
                          updateData({ coBuyerDate: masked }); // modified by Sid
                        }}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </InnerWrapper>
            </Section>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Step_2;
