import React, { useEffect, useContext, useRef } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { step_5_validationSchema as validationSchema } from "../../../../utils/schema";
import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { useDebounce } from "@/app/hooks/useDebounce";
import axios from "axios";
import { loginContext } from "../../GlobalContext";

/* ---- Date helpers (modified by sid) ---- */
const pad2 = (n) => String(n).padStart(2, "0"); // modified by sid

// Convert Date object -> "MM/DD/YYYY" (modified by sid)
const toMMDDYYYY = (d) =>
  `${pad2(d.getMonth() + 1)}/${pad2(d.getDate())}/${d.getFullYear()}`; // modified by sid

// Convert native ISO date (YYYY-MM-DD) -> "MM/DD/YYYY" (modified by sid)
const fromISOToMMDDYYYY = (iso) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${m}/${d}/${y}`;
}; // modified by sid

// Convert "MM/DD/YYYY" -> "YYYY-MM-DD" for <input type="date"> (modified by sid)
const toISOFromMMDDYYYY = (mmddyyyy) => {
  if (!mmddyyyy) return "";
  const [mm, dd, yyyy] = (mmddyyyy || "").split("/");
  if (!mm || !dd || !yyyy) return "";
  return `${yyyy}-${pad2(mm)}-${pad2(dd)}`;
}; // modified by sid

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
/* ---------------------------------------- */

const Section = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const initialValues = {
  buyerSignature: "",
  buyerDate: "",
  coBuyerSignature: "",
  coBuyerDate: "",
};

const InnerWrapper = ({ className, children }) => {
  return (
    <div className={`border-t border-gray-300 pt-8 mt-8 ${className}`}>
      {children}
    </div>
  );
};

const Step_5 = ({ data, updateData }) => {
  const token = Cookies.get("rto-token");
  const debouncedData = useDebounce(data, 5000);
  const formId = Cookies?.get("formId");
  const { erroObj, setErrorObj } = useContext(loginContext);

    // hidden native date inputs to open calendar (modified by sid)
    const buyerDatePickerRef = useRef(null); // modified by sid
    const coBuyerDatePickerRef = useRef(null); // modified by sid

    useEffect(() => {
      scrollTo(0, 0);
      // default to today's date if empty (modified by sid)
      if (!data.buyerDate) {
        updateData({ buyerDate: toMMDDYYYY(new Date()) });
      }
    }, []);

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
        formType: "step-5",
        form_id: formId || null,
        buyer_name: formData.buyerSignature || "",
        buyer_date: formData.buyerDate || toMMDDYYYY(new Date()),
        co_buyer_name: formData.coBuyerSignature || "",
        co_buyer_date: formData.coBuyerDate || "",
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

  // open the hidden native picker for a given ref (works in Chromium; falls back to click) (modified by sid)
  const openPicker = (ref) => {
    const el = ref?.current;
    if (!el) return;
    if (typeof el.showPicker === "function") {
      el.showPicker();
    } else {
      el.click();
    }
  }; // modified by sid

  // small calendar button (inline, no external deps) (modified by sid)
  const CalendarButton = ({ onClick, label = "Open calendar" }) => (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm bg-white hover:bg-gray-50"
      title={label}
      aria-label={label}
    >
      {/* calendar icon svg (modified by sid) */}
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="1.5"></rect>
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.5"></line>
        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.5"></line>
        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5"></line>
      </svg>
    </button>
  ); // modified by sid

  return (
    <Section>
      <div className="max-w-4xl mx-auto sm:px-6">
        <div className="text-center mb-4 py-4">
          <h2 className="text-2xl font-bold text-[#4b599b]">
            Moving of Outdoor Structure
          </h2>
        </div>

        <div className="mb-6">
          <p>
            Customer agrees not to move the outdoor structure unless the
            Customer contacts OUTDOOR CREDIT, INC. prior to do so. Moving the
            outdoor structure without written consent from OUTDOOR CREDIT, INC.
            will be a violation of the contract and will be considered a
            criminal offense and treated as such.
          </p>
        </div>

        <div className="border-t border-gray-300 pt-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-center text-[#4b599b]">
            ACKNOWLEDGEMENT AND AGREEMENT
          </h3>
          <p className="mb-6">
            The customer agrees not to move the outdoor structure without
            consent from OUTDOOR CREDIT, INC.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
            validateOnBlur={true} // validate when field is touched
            validateOnChange={false} // optional, only validate on blur
          >
            {({ values, handleChange, handleBlur, errors, touched }) => (
              <Form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 sm:mb-20">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">Buyer:</h4>
                    </div>
                    <Input
                      name={"buyerSignature"}
                      value={data.buyerSignature || ""}
                      onChange={(e) =>{
                        handleChange(e);
                        updateData({ buyerSignature: e.target.value })
                        setErrorObj({ ...erroObj, buyerSignature: "" });
                      }}
                      onBlur={handleBlur}
                    />
                     {touched.buyerSignature && errors.buyerSignature && !erroObj.buyerSignature &&(
                          <div className="text-red-500 flex text-right text-sm">
                            {errors.buyerSignature}
                          </div>
                        )}
                   {erroObj.buyerSignature && (
                        <div className="text-red-500 text-sm">
                          {erroObj.buyerSignature}
                        </div>
                      )}
                        
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">Date:</h4>
                    </div>
                    <div className="relative">
                      <Input
                        placeholder="MM/DD/YYYY"
                        className="pr-12" // add room for the button (modified by sid)
                        value={data.buyerDate || ""}
                        onChange={(e) => {
                          const formatted = autoFormatDateInput(e.target.value); // modified by sid
                          updateData({ buyerDate: formatted }); // modified by sid
                          const synthetic = {
                            target: { name: "buyerDate", value: formatted },
                          };
                          handleChange(synthetic);
                          setErrorObj({ ...erroObj, buyerDate: "" });
                        }}
                        onBlur={handleBlur}
                        aria-label="Buyer date, MM/DD/YYYY"
                      />

                      {/* Calendar button inside the input (modified by sid) */}
                      <CalendarButton
                        onClick={() => openPicker(buyerDatePickerRef)} // modified by sid
                        label="Open buyer date calendar" // modified by sid
                      />

                      {/* Hidden native date input to provide the calendar (modified by sid) */}
                      <input
                        ref={buyerDatePickerRef}
                        type="date"
                        className="absolute inset-0 h-0 w-0 opacity-0 pointer-events-none -z-10" // keep out of layout (modified by sid)
                        value={toISOFromMMDDYYYY(
                          data.buyerDate || toMMDDYYYY(new Date())
                        )}
                        onChange={(e) => {
                          const mmddyyyy = fromISOToMMDDYYYY(e.target.value); // modified by sid
                          updateData({ buyerDate: mmddyyyy }); // modified by sid
                          const synthetic = {
                            target: { name: "buyerDate", value: mmddyyyy },
                          };
                          handleChange(synthetic);
                          setErrorObj({ ...erroObj, buyerDate: "" });
                        }}
                        aria-hidden="true"
                        tabIndex={-1}
                      />
                    </div>
                      {touched.buyerDate && errors.buyerDate && !erroObj.buyerDate &&(
                          <div className="text-red-500 flex text-right text-sm">
                            {errors.buyerDate}
                          </div>
                        )}
                      {erroObj.buyerDate && (
                        <div className="text-red-500 text-sm">
                          {erroObj.buyerDate}
                        </div>
                      )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">Co-Buyer:</h4>
                    </div>
                    <Input
                      value={data.coBuyerSignature || ""}
                      onChange={(e) =>
                        updateData({ coBuyerSignature: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">Date:</h4>
                    </div>
                    <div className="relative">
                      <Input
                        placeholder="MM/DD/YYYY"
                        className="pr-12" // add room for the button (modified by sid)
                        value={data.coBuyerDate || ""}
                        onChange={(e) => {
                          const formatted = autoFormatDateInput(e.target.value); // modified by sid
                          updateData({ coBuyerDate: formatted }); // modified by sid
                          const synthetic = {
                            target: { name: "coBuyerDate", value: formatted },
                          };
                          handleChange(synthetic);
                        }}
                        onBlur={handleBlur}
                        aria-label="Co-buyer date, MM/DD/YYYY"
                      />

                      <CalendarButton
                        onClick={() => openPicker(coBuyerDatePickerRef)} // modified by sid
                        label="Open co-buyer date calendar" // modified by sid
                      />

                      <input
                        ref={coBuyerDatePickerRef}
                        type="date"
                        className="absolute inset-0 h-0 w-0 opacity-0 pointer-events-none -z-10" // modified by sid
                        value={toISOFromMMDDYYYY(data.coBuyerDate || "")}
                        onChange={(e) => {
                          const mmddyyyy = fromISOToMMDDYYYY(e.target.value); // modified by sid
                          updateData({ coBuyerDate: mmddyyyy }); // modified by sid
                          const synthetic = {
                            target: { name: "coBuyerDate", value: mmddyyyy },
                          };
                          handleChange(synthetic);
                        }}
                        aria-hidden="true"
                        tabIndex={-1}
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Section>
  );
};

export default Step_5;
