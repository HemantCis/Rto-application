(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "step_2_validationSchema",
    ()=>step_2_validationSchema,
    "step_3_validationSchema",
    ()=>step_3_validationSchema,
    "step_4_validationSchema",
    ()=>step_4_validationSchema,
    "step_5_validationSchema",
    ()=>step_5_validationSchema,
    "step_6_validationSchema",
    ()=>step_6_validationSchema,
    "step_7_validationSchema",
    ()=>step_7_validationSchema,
    "step_8_validationSchema",
    ()=>step_8_validationSchema,
    "validationSchema",
    ()=>validationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
;
const validationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    // Buyer Info
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("First name is required"),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Last name is required"),
    ssn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("SSN is required"),
    firstStreet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Address is required"),
    secondStreet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("City is required"),
    zip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("ZIP is required").matches(/^\d{5}$/, "ZIP must be exactly 5 digits"),
    state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("State is required"),
    country: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Country is required"),
    // Co-Buyer Info
    coFirstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    coLastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    coSsn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    cofirstStreet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    coSecondStreet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    coCity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    coState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    coZip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    coCountry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable(),
    // Building Info
    serialNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Serial number is required"),
    buildingType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Building type is required"),
    manufacturer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Manufacturer is required"),
    buildingColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Building color is required"),
    buildingSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Building size is required"),
    newOrUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().oneOf([
        "new",
        "used"
    ]).required("Required")
});
const step_2_validationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    // Buyer
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Buyer name is required"),
    ssn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().matches(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN format (000-00-0000)").required("SSN is required"),
    // phoneType: Yup.string().required("Phone type is required"),
    buyerPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Phone number is required"),
    firstStreet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Mailing address is required"),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("City is required"),
    state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("State is required"),
    buyerZip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("ZIP is required").matches(/^\d{5}$/, "ZIP must be exactly 5 digits"),
    buyerYearsAtAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Years at address is required"),
    // Co-Buyer
    // coFirstName: Yup.string().required("Co-Buyer name is required"),
    // coSsn: Yup.string()
    //   .required("Co-Buyer SSN is required"),
    // coBuyerPhoneType: Yup.string().required("Phone type is required"),
    // coBuyerPhone: Yup.string()
    //   .matches(/^\(\d{3}\)\s\d{3}-\d{4}$/, "Invalid phone format (000) 000-0000")
    //   .required("Phone number is required"),
    // coBuyerAddress: Yup.string().required("Mailing address is required"),
    // coBuyerCity: Yup.string().required("City is required"),
    // coBuyerState: Yup.string().required("State is required"),
    // coBuyerZip: Yup.string()
    //   .matches(/^\d{5}$/, "Invalid ZIP code")
    //   .required("ZIP is required"),
    // Mortgage & References
    mortageCompany: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Mortgage company is required"),
    name1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Reference name is required"),
    relationship1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Relationship is required"),
    phone1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Phone is required"),
    name2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Reference name is required"),
    relationship2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Relationship is required"),
    phone2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Phone is required"),
    // Employment info
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().email("Invalid email address").required("Email is required"),
    employer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Employer name is required"),
    employerLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Length is required"),
    employerPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Phone is required")
});
const step_3_validationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"]().required("Date is required").typeError("Invalid date format"),
    // agreementNumber: Yup.string()
    //   .required("Agreement Number is required")
    //   .matches(/^[A-Za-z0-9-]+$/, "Only letters, numbers, and dashes allowed"),
    // Removed stray lastName validation to avoid blocking submit; you already validate `lessee` below // modified by Sid
    // lastName: Yup.string()
    //   .required("Lessee name is required")
    //   .min(2, "Name must be at least 2 characters"),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Address is required"),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("City is required"),
    state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("State is required"),
    zip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("ZIP code is required").matches(/^\d{5}$/, "ZIP must be exactly 5 digits"),
    // months: Yup.string().required("Month selection is required"),
    // dueDate: Yup.string()
    //   .required("Due date is required")
    //   .matches(/^\d+$/, "Must be a valid day (e.g., 15)"),
    serialNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Serial number is required"),
    manufacturer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Manufacturer is required"),
    sizeColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Size/Color is required"),
    newOrUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Condition is required"),
    // capCostReduction: Yup.number()
    //   .typeError("Must be a valid number")
    //   .min(0, "Cannot be negative")
    //   .required("Cap. Cost Reduction is required"),
    // salesTaxCCR: Yup.number()
    //   .typeError("Must be a valid number")
    //   .min(0, "Cannot be negative")
    //   .required("Sales Tax is required"),
    // firstMonthlyPayment: Yup.number()
    //   .typeError("Must be a valid number")
    //   .min(0, "Cannot be negative")
    //   .required("First Monthly Payment is required"),
    // percentDownPayment: Yup.string()
    //   .required("Percent Down Payment is required")
    //   .matches(/^\d+%$/, "Must be in percentage format (e.g., 10%)"),
    // totalInitialPayment: Yup.number()
    //   .typeError("Must be a valid number")
    //   .min(0, "Cannot be negative")
    //   .required("Total Initial Payment is required"),
    // totalMonthlyPayment: Yup.number()
    //   .typeError("Must be a valid number")
    //   .min(0, "Cannot be negative")
    //   .required("Total Monthly Payment is required"),
    termAgreement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Term Agreement field is required"),
    authorizedAgent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Authorized Agent is required")
});
const step_4_validationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    dayOfMonth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"]().typeError("Day must be a number").required("Day is required").min(1, "Day must be between 1 and 31").max(31, "Day must be between 1 and 31"),
    month: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Month is required").oneOf([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ], "Invalid month selected"),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Year is required").matches(/^\d{2,4}$/, "Enter a valid year (e.g., 25 or 2025)"),
    mortageCompany: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Mortgagee name is required").min(2, "Must be at least 2 characters"),
    mortgageeAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nullable().notRequired(),
    buyerPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Phone number is required"),
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Lessee name is required").min(2, "Must be at least 2 characters"),
    manufacturer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Building manufacturer is required"),
    serialNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Serial number is required"),
    buildingSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Size is required"),
    // signedBy: Yup.string()
    //   .required("Signed by is required"),
    // signature: Yup.string()
    //   .required("Signature is required"),
    its: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("ITS field is required")
});
const step_5_validationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
});
const step_6_validationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    totalPayment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"]().typeError("Monthly payment must be a valid number.").positive("Monthly payment must be greater than 0.").required("Monthly payment is required."),
    // easyPayBuyerSignature: Yup.string()
    //   .required("Buyer signature is required."),
    easyPayCoBuyerDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"]().required("Date is required.").typeError("Invalid date format."),
    // routingNumber: Yup.string()
    //   .required("Routing number is required."),
    // accountNumber: Yup.string()
    //   .required("Account number is required."),
    // accountType: Yup.string()
    //   .oneOf(["CHECKING", "SAVINGS"], "Please select an account type.")
    //   .required("Account type is required."),
    // cardNumber: Yup.string()
    //   .matches(/^\d{16}$/, "Card number must be exactly 16 digits.")
    //   .required("Card number is required."),
    // expMonth: Yup.string()
    //   .matches(/^(0?[1-9]|1[0-2])$/, "Enter a valid month (01-12).")
    //   .required("Expiration month is required."),
    // expYear: Yup.string()
    // .matches(/^\d{4}$/, "Enter a valid 4-digit year.")
    // .required("Expiration year is required.")
    // .test("is-future-year", "Card has expired.", (value) => {
    //   if (!value) return false;
    //   const currentYear = new Date().getFullYear();
    //   return parseInt(value, 10) >= currentYear;
    // }),
    // cvv: Yup.string()
    //   .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits.")
    //   .required("CVV is required."),
    // Easy Pay Declination Section
    // buyerSigned: Yup.mixed()
    //   .required("Buyer signature is required."),
    declinationBuyerDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"]().required("Date is required.").typeError("Invalid date format."),
    declinationCoBuyerSignature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixed"]().nullable()
});
const step_7_validationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    // Seller Section
    sellerName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Seller name is required.").max(100, "Seller name cannot exceed 100 characters."),
    purchaseOrderDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"]().required("Purchase order date is required.").max(new Date(), "Date cannot be in the future."),
    // Manufacturer Section
    manufacturer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Manufacturer is required.").max(100, "Manufacturer name cannot exceed 100 characters."),
    buildingSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Size is required.").max(50, "Size cannot exceed 50 characters."),
    buildingColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Color is required.").max(50, "Color cannot exceed 50 characters."),
    serialNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Serial number is required.").max(100, "Serial number cannot exceed 100 characters."),
    // Pricing Section
    buildingCost: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"]().typeError("Enter a valid amount.").required("Sales price is required.").min(0, "Sales price cannot be negative."),
    // taxRate: Yup.string().required("Sale tax is required.")
    //   .nullable()
    //   .max(20, "Sales tax field cannot exceed 20 characters."),
    // netSalesPrice: Yup.number()
    //   .typeError("Enter a valid amount.")
    //   .required("Net sales price is required.")
    //   .min(0, "Net sales price cannot be negative."),
    // Acceptance Section
    // outdoorCreditSignature: Yup.string().required("Outdoor Credit signature is required."),
    outdoorCreditDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"]().required("Outdoor Credit date is required.").max(new Date(), "Date cannot be in the future."),
    // dealerSignature: Yup.string().required("Dealer signature is required."),
    dealerDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"]().required("Dealer date is required.").max(new Date(), "Date cannot be in the future.")
});
const step_8_validationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    buyerName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Buyer name is required.").max(100, "Name cannot exceed 100 characters."),
    buildingType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Building type is required.").max(100, "Building type cannot exceed 100 characters."),
    serialNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Building serial number is required.").max(50, "Serial number cannot exceed 50 characters."),
    deliveryDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"]().required("Delivery date is required.").typeError("Invalid date format."),
    // signature: Yup.string()
    //   .required("Signature is required.")
    //   .max(100, "Signature cannot exceed 100 characters."),
    directions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Please provide directions to the property.").max(1000, "Directions cannot exceed 1000 characters.")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/LogoWhite.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/LogoWhite.888aa965.png");}),
"[project]/public/images/LogoWhite.png.mjs { IMAGE => \"[project]/public/images/LogoWhite.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoWhite$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/LogoWhite.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoWhite$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 8534,
    height: 8534,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAZElEQVR42oXPMQ5AQBBA0QkKnc4B3EAUgiiEisIJJEqVxB3ce/1NhsgUFK/Y5O9MRpxz8uX9iNEgR2SDBCNaDKgQ3IH/uaoDm055ghA9TnRYUNsVBSbsGqQ2yDBr5JU6WeTvzAusG8bkCOp1ngAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/LogoBlack.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/LogoBlack.2c47bdef.png");}),
"[project]/public/images/LogoBlack.png.mjs { IMAGE => \"[project]/public/images/LogoBlack.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoBlack$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/LogoBlack.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoBlack$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 8534,
    height: 8534,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuElEQVR42n2PMQ6CMBiFiTi4uXkAb0AcjBoHo5MMnsCE0cnEmdWZhIkNEk5AAkwQBgKEgfYGPUC3bh3aploHkg4yfMk/fH/ee4aU0phiPCili6ZpDgAAizE21wRCyDLP82td18eiKC5d1+2EELOfoD6jKHLCMHQ8z3sFQfCAEFqjwDk3y7I8u677rqrqFMfxvW3bvRYxDMMmTVPb9/2nEjDGK01ACK2TJLllWWYr+r7ffoua2op/fAB+Zq/vk7nUTgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_96ea156c._.js.map