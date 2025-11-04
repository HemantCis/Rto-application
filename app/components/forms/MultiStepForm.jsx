"use client";
import { useEffect, useState, useContext } from "react";
import { ChevronLeft, ChevronRight, Check, Route, Network } from "lucide-react";
import Step_1 from "./steps/Step1";
import Step_2 from "./steps/Step2";
import Step_3 from "./steps/Step3";
import Step_4 from "./steps/Step4";
import Step_5 from "./steps/Step5";
import Step_6 from "./steps/Step6";
import Step_7 from "./steps/Step7";
import Step_8 from "./steps/Step8";
import FormHeader from "./FormHeader";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { loginContext } from "../GlobalContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validationSchema as step_1_validationSchema } from "../../../utils/schema";
import { step_2_validationSchema } from "@/utils/schema";
import { step_3_validationSchema } from "@/utils/schema";
import { step_4_validationSchema } from "@/utils/schema";
import { step_5_validationSchema } from "@/utils/schema";
import { step_6_validationSchema } from "@/utils/schema";
import { step_7_validationSchema } from "@/utils/schema";
import { step_8_validationSchema } from "@/utils/schema";
import * as Yup from "yup";
import axios from "axios";

// Step 1: Personal Information
const Step1 = ({ data, updateData }) => (
  <Step_1 data={data} updateData={updateData} />
);

// Step 2: Contact Details
const Step2 = ({ data, updateData }) => (
  <Step_2 data={data} updateData={updateData} />
);

// Step 3: Address
const Step3 = ({ data, updateData }) => (
  <Step_3 data={data} updateData={updateData} />
);

// Step 4: Education
const Step4 = ({ data, updateData }) => (
  <Step_4 data={data} updateData={updateData} />
);

// Step 5: Employment
const Step5 = ({ data, updateData }) => (
  <Step_5 data={data} updateData={updateData} />
);

// Step 6: Skills
const Step6 = ({ data, updateData }) => (
  <Step_6 data={data} updateData={updateData} />
);

// Step 7: References
const Step7 = ({ data, updateData }) => (
  <Step_7 data={data} updateData={updateData} />
);

// Step 8: Preferences
const Step8 = ({ data, updateData }) => (
  <Step_8 data={data} updateData={updateData} />
);

// Main Form Component
export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { erroObj, setErrorObj } = useContext(loginContext);
  const totalSteps = 8;
  const router = useRouter();
  const formId = Cookies?.get("formId");
  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const stepSchemas = {
    1: step_1_validationSchema,
    2: step_2_validationSchema,
    3: step_3_validationSchema,
    4: step_4_validationSchema,
    5: step_5_validationSchema,
    6: step_6_validationSchema,
    7: step_7_validationSchema,
    8: step_8_validationSchema,
    // add more as needed
  };

  useEffect(() => {
    const savedStep = JSON.parse(localStorage.getItem("currentStep"));
    if (savedStep) {
      setCurrentStep(savedStep);
    }
  }, []);

  // const nextStep = () => {
  //   if (currentStep < totalSteps) {
  //     setCurrentStep(currentStep + 1);
  //     localStorage.setItem('currentStep', JSON.stringify(currentStep+1) || 1);
  //   }
  //   switch(currentStep){
  //     case 1:
  //       // firstStepFormValidation(formData);
  //       break;

  //     case 2:
  //       // secondStepFormValidation();
  //       break;

  //     default:
  //       console.log("No validation");
  //   }

  // };
  const formValidators = {};
  // const nextStep = async () => {
  //   const currentSchema = stepSchemas[currentStep];
  //   if (currentSchema) {
  //     try {
  //       // Validate only current step's fields
  //       await currentSchema.validate(formData, { abortEarly: false });
  //       // Validation passed, move to next step
  //       setCurrentStep((prev) => prev + 1);
  //       localStorage.setItem('currentStep', JSON.stringify(currentStep + 1));
  //     } catch (err) {
  //       // Validation failed — show errors
  //       if (err.inner) {
  //         err.inner.forEach((e) => {
  //           // toast.error(e.message);
  //           console.log("value = ", e.message);
  //         });
  //       }
  //       return; // stop here — don’t go next
  //     }
  //   } else {
  //     // No schema for this step — just move ahead
  //     setCurrentStep((prev) => prev + 1);
  //     localStorage.setItem('currentStep', JSON.stringify(currentStep + 1));
  //   }
  // };

  const nextStep = async () => {
    // Define fields for each step
    const stepFields = {
      1: [
        "firstName",
        "lastName",
        "ssn",
        "firstStreet",
        "city",
        "zip",
        "state",
        "country",
        "coFirstName",
        "coLastName",
        "coSsn",
        "cofirstStreet",
        "coCity",
        "coState",
        "coZip",
        "coCountry",
        "manufacturer",
        "buildingType",
        "buildingColor",
        "buildingSize",
        "newOrUsed",
      ],
      2: [
        "firstName",
        "ssn",
        "phoneType",
        "buyerPhone",
        "firstStreet",
        "buyerCity",
        "state",
        "zip",
        "buyerYearsAtAddress",
        // "coFirstName",
        // "coSsn",
        // "coBuyerPhoneType",
        // "coBuyerPhone",
        // "coBuyerAddress",
        // "coBuyerCity",
        // "coBuyerState",
        // "coBuyerZip",
        "mortageCompany",
        "name1",
        "relationship1",
        "phone1",
        "name2",
        "relationship2",
        "phone2",
        "email",
        "employer",
        "employerLength",
        "employerPhone",
        // "coEmployer",
        // "coEmployerLength",
        // "coEmployerPhone",
        "buyerSigned",
        "buyerDate",
        "coBuyerSigned",
        "coBuyerDate",
      ],
      3: [
        "date",
        // "agreementNumber",
        "lastName",
        "address",
        "city",
        "state",
        "zip",
        // "months",
        // "dueDate",
        "serialNumber",
        "manufacturer",
        "sizeColor",
        "newOrUsed",
        "capCostReduction",
        // "salesTaxCCR",
        // "firstMonthlyPayment",
        // "percentDownPayment",
        // "totalInitialPayment",
        // "totalMonthlyPayment",
        // "termAgreement",
        // "authorizedAgent",
        // "lessee",
        // "coLessee",
        // "agreementNumber2",
      ],

      4: [
        "dayOfMonth",
        "month",
        "year",
        "mortageCompany",
        "mortgageeAddress",
        "buyerPhone",
        "firstName",
        "manufacturer",
        "serialNumber",
        "buildingSize",
        // "signedBy",
        // "signature",
        "its",
        "signerTitle",
      ],

      5: [
        // "buyerSignature", 
        // "buyerDate"
      ],

      6: [
        "totalPayment",
        "easyPayBuyerSignature",
        "easyPayCoBuyerDate",
        "routingNumber",
        "accountNumber",
        "accountType",
        "cardNumber",
        "expMonth",
        "expYear",
        "cvv",
        "buyerSigned",
        "declinationBuyerDate",
        "declinationCoBuyerSignature",
        "declinationCoBuyerDate",
      ],

      7: [
        "sellerName",
        "purchaseOrderDate",
        "manufacturer",
        "buildingSize",
        "buildingColor",
        "serialNumber",
        "buildingCost",
        "taxRate",
        // "netSalesPrice",
        "outdoorCreditSignature",
        "outdoorCreditDate",
        "dealerSignature",
        "dealerDate",
      ],

      8: [
        "buyerName",
        "buildingType",
        "serialNumber",
        "deliveryDate",
        "signature",
        "directions",
      ],
      // add more steps here if needed
    };

    const fieldsToValidate = stepFields[currentStep] || [];

    // Build schema dynamically for this step
    const currentSchema = Yup.object().shape(
      fieldsToValidate.reduce((acc, key) => {
        if (currentStep == 1 && step_1_validationSchema.fields[key]) {
          acc[key] = step_1_validationSchema.fields[key];
        } else if (currentStep == 2 && step_2_validationSchema.fields[key]) {
          acc[key] = step_2_validationSchema.fields[key];
        } else if (currentStep == 3 && step_3_validationSchema.fields[key]) {
          acc[key] = step_3_validationSchema.fields[key];
        } else if (currentStep == 4 && step_4_validationSchema.fields[key]) {
          acc[key] = step_4_validationSchema.fields[key];
        } else if (currentStep == 5 && step_5_validationSchema.fields[key]) {
          acc[key] = step_5_validationSchema.fields[key];
        } else if (currentStep == 6 && step_6_validationSchema.fields[key]) {
          acc[key] = step_6_validationSchema.fields[key];
        } else if (currentStep == 7 && step_7_validationSchema.fields[key]) {
          acc[key] = step_7_validationSchema.fields[key];
        } else if (currentStep == 8 && step_8_validationSchema.fields[key]) {
          acc[key] = step_8_validationSchema.fields[key];
        }
        return acc;
      }, {})
    );

    try {
      await currentSchema.validate(formData, { abortEarly: false });

      // ✅ Passed validation
      if (currentStep < 8) {
        setCurrentStep((prev) => prev + 1);
        localStorage.setItem("currentStep", JSON.stringify(currentStep + 1));
      } else {
        // Final step reached
        handleSubmit();
      }
    } catch (err) {
      if (err.inner) {
        const touchedObj = {};
        const errorObj = {};

        err.inner.forEach((e) => {
          console.log("value = ", e.message);
          console.log("name = ", e.path);
          if (e.path) {
            touchedObj[e.path] = true;
            errorObj[e.path] = e.message;
          }
        });
        setErrorObj(errorObj);

        // ✅ Automatically show validation below inputs
        // setTouched(touchedObj);
        // setErrors(errorObj);
      }
      return;
    }
  };

  // const nextStep = async () => {
  //   const currentSchema = stepSchemas[currentStep];

  //   if (!currentSchema) {
  //     // No validation schema found for this step
  //     setCurrentStep((prev) => prev + 1);
  //     localStorage.setItem("currentStep", JSON.stringify(currentStep + 1));
  //     return;
  //   }

  //   try {
  //     // Validate current step's data only
  //     await currentSchema.validate(formData, { abortEarly: false });

  //     // ✅ Passed validation
  //     setCurrentStep((prev) => prev + 1);
  //     localStorage.setItem("currentStep", JSON.stringify(currentStep + 1));
  //   } catch (err) {
  //     if (err.inner && formValidators[currentStep]) {
  //       const touchedObj = {};
  //       const errorObj = {};

  //       err.inner.forEach((e) => {
  //         if (e.path) {
  //           touchedObj[e.path] = true;
  //           errorObj[e.path] = e.message;
  //         }
  //       });

  //       // ✅ Update Formik state for this step
  //       formValidators[currentStep].setTouched(touchedObj);
  //       formValidators[currentStep].setErrors(errorObj);
  //     }

  //     // ❌ Stop navigation
  //     return;
  //   }
  // };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      localStorage.setItem("currentStep", JSON.stringify(currentStep - 1) || 1);
    }
  };

  const handleSubmit = async() => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}api/form/generate-pdf/${formId}`,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("response", response);
      if (response.status === 200) {
         window.open("https://api.sandboxrto.crmlexicon.com"+response?.data?.pdfUrl, '_blank');

        toast.success(response.data.message , {
          position: "top-right",
          autoClose: 5000,
          theme: "dark"
        });        
      }
    } catch (error) {
      if (error.response) {  
        toast.error(error.response?.data?.message , {
          position: "top-center",
          autoClose: 5000,
          theme: "dark"
          })
      } else {
        console.log("Error:", error.message);
      }
    }

    // alert("Form Submitted Successfully!");
    // toast.success("Form Submit successfully", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   theme: "dark",
    // });

    // router.push("/dashboard");
  };

  const renderStep = () => {
    const stepProps = {
      data: formData,
      updateData: updateFormData,
      onValidate: (validateForm, setTouched) => {
        formValidators[currentStep] = { validateForm, setTouched };
      },
    };

    switch (currentStep) {
      case 1:
        return <Step1 {...stepProps} />;
      case 2:
        return <Step2 {...stepProps} />;
      case 3:
        return <Step3 {...stepProps} />;
      case 4:
        return <Step4 {...stepProps} />;
      case 5:
        return <Step5 {...stepProps} />;
      case 6:
        return <Step6 {...stepProps} />;
      case 7:
        return <Step7 {...stepProps} />;
      case 8:
        return <Step8 {...stepProps} />;
      default:
        return <Step1 {...stepProps} />;
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 to-indigo-100 sm:py-8 py-4 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-4 relative">
          <FormHeader mode="dark" />

          {/* Progress Steps */}

          {/* Progress Bar */}
          <div className="w-full bg-white rounded-full h-2 mt-1 shadow">
            <div
              className="bg-[#4b599b] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className="flex justify-end items-center ">
            <span className="text-[10px] sm:text-sm font-medium text-gray-600">
              Step {currentStep} / {totalSteps}
            </span>
          </div>
        </div>

        {/* Form Card */}
        <div className="">
          {renderStep()}

          {/* Navigation Buttons */}
          <div
            className={`flex gap-y-2 mt-4 sm:pt-6 items-center justify-between flex-wrap`}
          >
            <div className="sm:hidden grid w-full items-center text-center mb-3">
              <span className="text-sm font-medium text-gray-600 ">
                Step {currentStep} / {totalSteps}
              </span>
            </div>
            {currentStep !== 10 && (
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`sm:w-fit w-[48%] justify-center flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? "opacity-0"
                    : "bg-[#4b599b] text-white hover:bg-blue-900 cursor-pointer"
                }`}
              >
                <ChevronLeft size={20} />
                Previous
              </button>
            )}

            <div className="sm:grid hidden items-center ">
              <span className="text-sm font-medium text-gray-600 ">
                Step {currentStep} / {totalSteps}
              </span>
            </div>

            {currentStep === totalSteps ? (
              <button
                onClick={nextStep}
                className="sm:w-fit w-[48%] justify-center flex items-center gap-2 sm:px-8 px-5 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors cursor-pointer"
              >
                <Check size={20} />
                Submit
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="sm:w-fit w-[48%] justify-center flex items-center gap-2 sm:px-8 px-5 py-3 bg-[#4b599b] text-white rounded-lg font-medium hover:bg-blue-900 transition-colors cursor-pointer"
              >
                Next
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
