import React, { useEffect, useContext } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { Formik, Form } from "formik";
import { step_8_validationSchema as validationSchema } from "@/utils/schema";
import Cookies from "js-cookie";
import { useDebounce } from "@/app/hooks/useDebounce";
import axios from "axios";
import { loginContext } from "../../GlobalContext";

/* ----------------------------------------------
 * Date helpers (MM/DD/YYYY)  // modified by Sid
 * ---------------------------------------------*/
const pad2 = (n) => String(n).padStart(2, "0"); // modified by Sid

const toMMDDYYYY = (d) => {
  if (!d) return "";
  const dt = d instanceof Date ? d : new Date(d);
  return `${pad2(dt.getMonth() + 1)}/${pad2(dt.getDate())}/${dt.getFullYear()}`;
}; // modified by Sid

const isoToMMDDYYYY = (iso) => {
  if (!iso) return "";
  if (iso.includes("/")) return iso; // already formatted // modified by Sid
  const [y, m, d] = iso.split("T")[0].split("-");
  if (!y || !m || !d) return "";
  return `${pad2(m)}/${pad2(d)}/${y}`;
}; // modified by Sid

const maskToMMDDYYYY = (raw) => {
  const v = String(raw || "").replace(/\D/g, "").slice(0, 8); // keep max 8 digits // modified by Sid
  const mm = v.slice(0, 2);
  const dd = v.slice(2, 4);
  const yyyy = v.slice(4, 8);
  if (v.length <= 2) return mm;
  if (v.length <= 4) return `${mm}/${dd}`;
  return `${mm}/${dd}/${yyyy}`;
}; // modified by Sid

const showMMDD = (val) => {
  if (!val) return "";
  return val.includes("-") ? isoToMMDDYYYY(val) : val;
}; // modified by Sid
/* ---------------------------------------------*/

const Section = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const Step_8 = ({ data, updateData }) => {
  const token = Cookies.get("rto-token");
  const debouncedData = useDebounce(data, 5000);
  const formId = Cookies?.get("formId");
  const { erroObj, setErrorObj } = useContext(loginContext);

  // 1) hydrate from previous steps (step 3 / 4 / 7)
  useEffect(() => {
    const patch = {};

    // buyer name should come from global lessee
    if (!data.buyerName) {
      if (data.lessee) {
        patch.buyerName = data.lessee; // modified by Sid
      } else if (data.lesseeName) {
        patch.buyerName = data.lesseeName; // modified by Sid
      }
    }

    // building type: try to build one from earlier step data
    if (!data.buildingType) {
      if (data.buildingType) {
        patch.buildingType = data.buildingType; // modified by Sid
      } else {
        const color = data.buildingColor || "";
        const size = data.buildingSize || "";
        const combo = [color, size].filter(Boolean).join(" / ");
        if (combo) patch.buildingType = combo; // modified by Sid
      }
    }

    // serial number from common keys
    if (!data.serialNumber) {
      if (data.serialNumber) {
        patch.serialNumber = data.serialNumber; // modified by Sid
      } else if (data.property_serial_number) {
        patch.serialNumber = data.property_serial_number; // modified by Sid
      } else if (data.serial) {
        patch.serialNumber = data.serial; // modified by Sid
      }
    }

    // delivery date default -> MM/DD/YYYY (NOT ISO) // modified by Sid
    if (!data.deliveryDate) {
      patch.deliveryDate = toMMDDYYYY(new Date()); // modified by Sid
    } else {
      patch.deliveryDate = showMMDD(data.deliveryDate); // ensure normalized // modified by Sid
    }

    if (Object.keys(patch).length > 0) {
      updateData(patch); // modified by Sid
    }
  }, []);

  // 2) set default delivery date and scroll (MM/DD/YYYY)  // modified by Sid
  useEffect(() => {
    scrollTo(0, 0);
    if (!data.deliveryDate) {
      updateData({
        deliveryDate: toMMDDYYYY(new Date()), // modified by Sid
      });
    } else {
      // normalize if it was ISO  // modified by Sid
      updateData({ deliveryDate: showMMDD(data.deliveryDate) }); // modified by Sid
    }
  }, []);

  // 3) auto-save (kept as-is; submit will also save) // modified by Sid
  useEffect(() => {
    if (Object.keys(debouncedData).length > 0) {
      saveFormData(debouncedData); // modified by Sid
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
        formType: "step-8",
        form_id: formId || null,
        buyer_name: formData.buyerName || "", // modified by Sid
        building_type: formData.buildingType || "", // modified by Sid
        building_serial_number: formData.serialNumber || "", // modified by Sid
        delivery_date: showMMDD(formData.deliveryDate) || toMMDDYYYY(new Date()), // modified by Sid
        signature: formData.signature || "", // modified by Sid
        directions: formData.directions || "", // modified by Sid
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/form/application-forms`,
        payload,
        config
      );
      if (response.status === 200) {
        console.log("Auto/Manual saved successfully"); // modified by Sid
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response?.data?.message);
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  // --- explicit submit handler to persist to DB on button click --- // modified by Sid
  const handleSubmitToDB = async (_, actions) => {
    try {
      await saveFormData(data); // save current in-memory `data` // modified by Sid
      console.log("Submitted and saved to DB"); // modified by Sid
    } finally {
      actions.setSubmitting(false); // modified by Sid
    }
  };

  const initialValues = {
    buyerName: "",
    buildingType: "",
    serialNumber: "",
    deliveryDate: "",
    signature: "",
    directions: "",
  };

  return (
    <Section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitToDB} // submit saves to DB // modified by Sid
        validateOnBlur={true}
        validateOnChange={false}
      >
        {({ handleChange, handleBlur, errors, touched, isSubmitting }) => (
          <Form className="space-y-4">
            <div className="max-w-4xl mx-auto sm:px-6 mb-10 text-lg">
              <div className="text-center mb-6 py-4 text-[#4b599b] underline">
                <h2 className="text-3xl font-bold mb-5">
                  Outdoor Credit, INC.
                </h2>
                <h2 className="text-2xl font-bold">
                  Delivery Receipt and Acknowledgment
                </h2>
              </div>

              <div className="border-t border-gray-300 pt-4 mb-6"></div>

              {/* Buyer Acknowledgment Section */}
              <div className="mb-6">
                {touched.buyerName &&
                  errors.buyerName &&
                  !erroObj.buyerName && (
                    <div className="text-red-500 flex text-right text-sm">
                      {errors.buyerName}
                    </div>
                  )}
                {erroObj.buyerName && (
                  <div className="text-red-500 text-sm">
                    {erroObj.buyerName}
                  </div>
                )}
                <p className="flex flex-wrap items-center gap-1">
                  Buyer
                  <Input
                    className="max-w-96 m-1 inline-flex"
                    name={"buyerName"}
                    value={data.buyerName || data.lessee || data.lesseeName || ""}
                    onChange={(e) => {
                      handleChange(e);
                      updateData({ buyerName: e.target.value }); // modified by Sid
                      setErrorObj({ ...erroObj, buyerName: "" }); // modified by Sid
                    }}
                    onBlur={handleBlur}
                  />
                  I Acknowledge delivery of a
                  <Input
                    className="!w-fit m-1 inline-flex"
                    name={"buildingType"}
                    value={data.buildingType || ""}
                    onChange={(e) => {
                      handleChange(e);
                      setErrorObj({ ...erroObj, buildingType: "" }); // modified by Sid
                      updateData({ buildingType: e.target.value }); // modified by Sid
                    }}
                    onBlur={handleBlur}
                  />
                  {touched.buildingType &&
                    errors.buildingType &&
                    !erroObj.buildingType && (
                      <span className="text-red-500 flex text-right text-sm">
                        {errors.buildingType}
                      </span>
                    )}
                  {erroObj.buildingType && (
                    <span className="text-red-500 text-sm">
                      {erroObj.buildingType}
                    </span>
                  )}
                  Building serial #
                  <Input
                    className="!w-fit m-1 inline-flex"
                    name={"serialNumber"}
                    value={data.serialNumber || ""}
                    onChange={(e) => {
                      handleChange(e);
                      updateData({ serialNumber: e.target.value }); // modified by Sid
                      setErrorObj({ ...erroObj, serialNumber: "" }); // modified by Sid
                    }}
                    onBlur={handleBlur}
                  />
                  {touched.serialNumber &&
                    errors.serialNumber &&
                    !erroObj.serialNumber && (
                      <span className="text-red-500 flex text-right text-sm">
                        {errors.serialNumber}
                      </span>
                    )}
                  {erroObj.serialNumber && (
                    <span className="text-red-500 text-sm">
                      {erroObj.serialNumber}
                    </span>
                  )}
                  on the date
                  {/* Delivery Date: masked MM/DD/YYYY text input  // modified by Sid */}
                  <Input
                    className="!w-fit m-1 inline-flex"
                    name={"deliveryDate"}
                    value={showMMDD(data.deliveryDate) || toMMDDYYYY(new Date())} // modified by Sid
                    type="text" // modified by Sid
                    placeholder="MM/DD/YYYY" // modified by Sid
                    onChange={(e) => {
                      const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                      handleChange({ target: { name: "deliveryDate", value: masked }}); // modified by Sid
                      updateData({ deliveryDate: masked }); // modified by Sid
                      setErrorObj({ ...erroObj, deliveryDate: "" }); // modified by Sid
                    }}
                    onBlur={handleBlur}
                  />
                  {touched.deliveryDate &&
                    errors.deliveryDate &&
                    !erroObj.deliveryDate && (
                      <span className="text-red-500 flex text-right text-sm">
                        {errors.deliveryDate}
                      </span>
                    )}
                  {erroObj.deliveryDate && (
                    <span className="text-red-500 text-sm">
                      {erroObj.deliveryDate}
                    </span>
                  )}
                </p>

                <div className="mt-4">
                  <p className="font-semibold leading-tight">
                    I am satisfied and happy with the building, delivery and
                    set-up.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 mb-6"></div>

              {/* Signature Section - Optional field (not mandatory) */} {/* modified by Sid */}
              <div className="grid grid-cols-2 mb-6">
                <div className="">
                  <div className="flex items-center gap-2 mb-1">
                    <label>Signature:</label>
                  </div>
                  <Input
                    value={data.signature || ""}
                    name={"signature"}
                    onChange={(e) => {
                      handleChange(e);
                      updateData({ signature: e.target.value }); // modified by Sid
                      setErrorObj({ ...erroObj, signature: "" }); // modified by Sid
                    }}
                    onBlur={handleBlur}
                  />
                  {/* Removed validation for signature field - not mandatory */} {/* modified by Sid */}
                </div>
              </div>

              {/* Important Notices */}
              <div className="mb-6 space-y-3 font-semibold leading-tight">
                <p>
                  If your building is damaged or you have a problem with the
                  set-up and delivery call your dealer&apos;s once immediately.
                </p>
                <p>
                  If a return trip is requested to move the building, customer
                  will be subject to a minimum $500 fee.
                </p>
              </div>

              <div className="border-t border-gray-300 mb-8 mt-10"></div>

              {/* Directions Section - Optional field (not mandatory) */} {/* modified by Sid */}
              <div className="mb-8">
                <label className="font-semibold text-lg mb-4 block text-center">
                  ****Please write directions to customer&apos;s property
                  below.***
                </label>
                <textarea
                  value={data.directions || ""}
                  name="directions"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    updateData({ directions: e.target.value }); // modified by Sid
                    setErrorObj({ ...erroObj, directions: "" }); // modified by Sid
                  }}
                  placeholder="Write the directions..."
                  className="w-full p-3 border border-gray-300 rounded h-32 resize-vertical"
                />
                {/* Removed validation for directions field - not mandatory */} {/* modified by Sid */}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col flex-wrap justify-center gap-4 mt-6">
                <button
                  type="button"
                  className="max-w-64 mx-auto bg-[#4b599b] text-white px-6 py-2 rounded hover:bg-blue-900 transition-colors"
                  onClick={() => window.print()}
                >
                  Print Documents
                </button>

                {/* This is the actual form submit button that saves to DB */} {/* modified by Sid */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="max-w-64 mx-auto bg-[#4b599b] text-white px-6 py-2 rounded hover:bg-blue-900 transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? "Saving..." : "Submit & Save"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default Step_8;