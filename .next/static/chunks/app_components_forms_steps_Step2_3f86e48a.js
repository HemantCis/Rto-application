(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/forms/steps/Step2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Select.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useDebounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GlobalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GlobalContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
const Section = (param)=>{
    let { children, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-lg p-4 pb-8 ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/forms/steps/Step2.js",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Section;
const InnerWrapper = (param)=>{
    let { className, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t border-gray-300 pt-8 mt-10 ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/forms/steps/Step2.js",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = InnerWrapper;
// ---------- Helpers for MM/DD/YYYY formatting ----------
// modified by Sid — format a Date object to MM/DD/YYYY
const formatDateToMMDDYYYY = (dateObj)=>{
    const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
    const dd = String(dateObj.getDate()).padStart(2, "0");
    const yyyy = dateObj.getFullYear();
    return "".concat(mm, "/").concat(dd, "/").concat(yyyy);
};
// modified by Sid — take raw user input, keep digits, and insert / as MM/DD/YYYY
const maskToMMDDYYYY = (raw)=>{
    const digits = (raw || "").replace(/\D/g, "").slice(0, 8); // keep at most 8 digits
    const mm = digits.slice(0, 2);
    const dd = digits.slice(2, 4);
    const yyyy = digits.slice(4, 8);
    if (digits.length <= 2) return mm;
    if (digits.length <= 4) return "".concat(mm, "/").concat(dd);
    return "".concat(mm, "/").concat(dd, "/").concat(yyyy);
};
const Step_2 = (param)=>{
    let { data, updateData } = param;
    _s();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("rto-token");
    const debouncedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(data, 5000);
    const formId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("formId");
    const { setSaveStatus, erroObj, setErrorObj } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GlobalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step_2.useEffect": ()=>{
            if (Object.keys(debouncedData).length > 0) {
                saveFormData(debouncedData);
            }
        }
    }["Step_2.useEffect"], [
        debouncedData
    ]);
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        }
    };
    const states = [
        {
            value: "",
            label: "Select State"
        },
        {
            id: 1,
            value: "FL",
            label: "Florida"
        },
        {
            id: 2,
            value: "GA",
            label: "Georgia"
        }
    ];
    const phoneType = [
        {
            value: "Work",
            label: "Work"
        },
        {
            value: "Cell",
            label: "Cell"
        }
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
        coBuyerDate: ""
    };
    const saveFormData = async (formData)=>{
        try {
            const payload = {
                formType: "step-2",
                form_id: formId || null,
                firstName: (formData === null || formData === void 0 ? void 0 : formData.firstName) || "",
                ssn: (formData === null || formData === void 0 ? void 0 : formData.ssn) || "",
                phoneType: (formData === null || formData === void 0 ? void 0 : formData.phoneType) || "",
                buyerPhone: (formData === null || formData === void 0 ? void 0 : formData.buyerPhone) || "",
                buyerAddress: (formData === null || formData === void 0 ? void 0 : formData.firstStreet) || "",
                buyerCity: (formData === null || formData === void 0 ? void 0 : formData.city) || "",
                buyerState: (formData === null || formData === void 0 ? void 0 : formData.state) || "",
                buyerZip: (formData === null || formData === void 0 ? void 0 : formData.zip) || "",
                buyerYearsAtAddress: (formData === null || formData === void 0 ? void 0 : formData.buyerYearsAtAddress) || "",
                coFirstName: (formData === null || formData === void 0 ? void 0 : formData.coFirstName) || "",
                coSsn: (formData === null || formData === void 0 ? void 0 : formData.coSsn) || "",
                coBuyerPhoneType: (formData === null || formData === void 0 ? void 0 : formData.coBuyerPhoneType) || "",
                coBuyerPhone: (formData === null || formData === void 0 ? void 0 : formData.coBuyerPhone) || "",
                coBuyerAddress: (formData === null || formData === void 0 ? void 0 : formData.cofirstStreet) || "",
                coBuyerCity: (formData === null || formData === void 0 ? void 0 : formData.coCity) || "",
                coBuyerState: (formData === null || formData === void 0 ? void 0 : formData.coState) || "",
                coBuyerZip: (formData === null || formData === void 0 ? void 0 : formData.coZip) || "",
                mortageCompany: (formData === null || formData === void 0 ? void 0 : formData.mortageCompany) || "",
                name1: (formData === null || formData === void 0 ? void 0 : formData.name1) || "",
                relationship1: (formData === null || formData === void 0 ? void 0 : formData.relationship1) || "",
                phone1: (formData === null || formData === void 0 ? void 0 : formData.phone1) || "",
                name2: (formData === null || formData === void 0 ? void 0 : formData.name2) || "",
                relationship2: (formData === null || formData === void 0 ? void 0 : formData.relationship2) || "",
                phone2: (formData === null || formData === void 0 ? void 0 : formData.phone2) || "",
                email: (formData === null || formData === void 0 ? void 0 : formData.email) || "",
                employer: (formData === null || formData === void 0 ? void 0 : formData.employer) || "",
                employerLength: (formData === null || formData === void 0 ? void 0 : formData.employerLength) || "",
                employerPhone: (formData === null || formData === void 0 ? void 0 : formData.employerPhone) || "",
                coEmployer: (formData === null || formData === void 0 ? void 0 : formData.coEmployer) || "",
                coEmployerLength: (formData === null || formData === void 0 ? void 0 : formData.coEmployerLength) || "",
                coEmployerPhone: (formData === null || formData === void 0 ? void 0 : formData.coEmployerPhone) || "",
                // modified by Sid — API receives dates as MM/DD/YYYY strings
                buyerSigned: (formData === null || formData === void 0 ? void 0 : formData.buyerSigned) || "",
                buyerDate: (formData === null || formData === void 0 ? void 0 : formData.buyerDate) || "",
                coBuyerSigned: (formData === null || formData === void 0 ? void 0 : formData.coBuyerSigned) || "",
                coBuyerDate: (formData === null || formData === void 0 ? void 0 : formData.coBuyerDate) || ""
            };
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "https://api.sandboxrto.crmlexicon.com/"), "api/form/application-forms"), payload, config);
            if (response.status === 200) {
                console.log("Auto saved successfully");
            }
        } catch (error) {
            if (error.response) {
                var _error_response_data, _error_response;
                console.log((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message);
            } else {
                console.log("Error:", error.message);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step_2.useEffect": ()=>{
            // modified by Sid — set default Buyer Date in MM/DD/YYYY (masked text, not input type="date")
            const todayMMDDYYYY = formatDateToMMDDYYYY(new Date());
            updateData({
                buyerDate: data.buyerDate || todayMMDDYYYY
            });
            // Optionally set a default Co-Buyer date too (if needed)
            updateData({
                coBuyerDate: data.coBuyerDate || todayMMDDYYYY
            });
            scrollTo(0, 0);
        }
    }["Step_2.useEffect"], []); // modified by Sid
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formik"], {
            initialValues: initialValues,
            validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["step_2_validationSchema"],
            onSubmit: (values)=>console.log(values),
            validateOnBlur: true,
            validateOnChange: false,
            children: (param)=>{
                let { values, handleChange, handleBlur, errors, touched } = param;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    className: "space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-8 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl underline font-bold mb-1 text-[#4b599b]",
                                        children: "Information Sheet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        children: "ALL INFORMATION MUST BE COMPLETE AND ELEGIBLE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                lineNumber: 210,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-4 gap mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "buyerCol space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Buyer:",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 225,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        name: "firstName",
                                                        value: "".concat(data.firstName || "", " ").concat(data.lastName || "").trim(),
                                                        onChange: (e)=>{
                                                            handleChange(e);
                                                            const [first, ...rest] = e.target.value.split(" ");
                                                            const last = rest.join(" ");
                                                            updateData({
                                                                firstName: e.target.value
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                firstName: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.firstName && errors.firstName && !erroObj.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.firstName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 262,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.firstName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 268,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "SS#: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 276,
                                                                    columnNumber: 30
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 275,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "000-00-0000",
                                                        name: "ssn",
                                                        value: data.ssn || "",
                                                        onChange: (e)=>{
                                                            let value = e.target.value;
                                                            // Remove all non-numeric characters
                                                            value = value.replace(/\D/g, "");
                                                            // Apply formatting: 000-00-0000
                                                            if (value.length > 3 && value.length <= 5) {
                                                                value = value.slice(0, 3) + "-" + value.slice(3);
                                                            } else if (value.length > 5) {
                                                                value = value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5, 9);
                                                            }
                                                            handleChange({
                                                                target: {
                                                                    name: "ssn",
                                                                    value
                                                                }
                                                            });
                                                            updateData({
                                                                ssn: value
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                ssn: ""
                                                            });
                                                        },
                                                        maxLength: 11,
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.ssn && errors.ssn && !erroObj.ssn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.ssn
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 323,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.ssn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.ssn
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 326,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid lg:grid-cols-3 grid-cols-1 md:gap-4 gap-y-2 items-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "Phone: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 text-sm",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                            lineNumber: 333,
                                                                            columnNumber: 34
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 332,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 331,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "",
                                                                name: "phoneType",
                                                                value: data.phoneType || "",
                                                                onChange: (e)=>{
                                                                    handleChange(e);
                                                                    updateData({
                                                                        phoneType: e.target.value
                                                                    });
                                                                },
                                                                className: "w-full",
                                                                options: phoneType,
                                                                onBlur: handleBlur
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 336,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            touched.phoneType && errors.phoneType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: errors.phoneType
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 349,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 330,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "(000) 000-0000",
                                                                name: "phone1",
                                                                value: data.buyerPhone || "",
                                                                onChange: (e)=>{
                                                                    let input = e.target.value.replace(/\D/g, ""); // remove all non-numeric characters
                                                                    if (input.length > 10) input = input.slice(0, 10); // limit to 10 digits
                                                                    // format as (000) 000-0000
                                                                    let formatted = input;
                                                                    if (input.length > 6) {
                                                                        formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3, 6), "-").concat(input.slice(6));
                                                                    } else if (input.length > 3) {
                                                                        formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3));
                                                                    } else if (input.length > 0) {
                                                                        formatted = "(".concat(input);
                                                                    }
                                                                    handleChange(e);
                                                                    updateData({
                                                                        buyerPhone: formatted
                                                                    });
                                                                    setErrorObj({
                                                                        ...erroObj,
                                                                        buyerPhone: ""
                                                                    });
                                                                },
                                                                className: "w-full",
                                                                onBlur: handleBlur
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 367,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            touched.buyerPhone && errors.buyerPhone && !erroObj.buyerPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: errors.buyerPhone
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 400,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            erroObj.buyerPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: erroObj.buyerPhone
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 405,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 354,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Mailing Address:",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 415,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 413,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 412,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        value: data.firstStreet || "",
                                                        name: "firstStreet",
                                                        onChange: (e)=>{
                                                            handleChange(e);
                                                            updateData({
                                                                firstStreet: e.target.value
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 418,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.firstStreet && errors.firstStreet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.firstStreet
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 430,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 411,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "City: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 text-sm",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                            lineNumber: 439,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 438,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 437,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "",
                                                                name: "city",
                                                                value: data.city || "",
                                                                onChange: (e)=>{
                                                                    handleChange(e);
                                                                    updateData({
                                                                        city: e.target.value
                                                                    });
                                                                    setErrorObj({
                                                                        ...erroObj,
                                                                        city: ""
                                                                    });
                                                                },
                                                                className: "w-full",
                                                                onBlur: handleBlur
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 442,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            touched.city && errors.city && !erroObj.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: errors.city
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 455,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            erroObj.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: erroObj.city
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 460,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 436,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "State: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 text-sm",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                            lineNumber: 468,
                                                                            columnNumber: 34
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 467,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 466,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                                                                value: data.state || "",
                                                                name: "state",
                                                                onChange: (e)=>{
                                                                    handleChange(e);
                                                                    updateData({
                                                                        state: e.target.value
                                                                    });
                                                                    setErrorObj({
                                                                        ...erroObj,
                                                                        state: ""
                                                                    });
                                                                },
                                                                children: states === null || states === void 0 ? void 0 : states.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: item.id,
                                                                        children: item.label
                                                                    }, item.label, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                        lineNumber: 483,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 471,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            touched.state && errors.state && !erroObj.state && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: errors.state
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 501,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            erroObj.state && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: erroObj.state
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 507,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 465,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "Zip: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 text-sm",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                            lineNumber: 515,
                                                                            columnNumber: 32
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 514,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 513,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "Enter Zipcode",
                                                                name: "zip",
                                                                value: data.zip || "",
                                                                onChange: (e)=>{
                                                                    // Remove all non-numeric characters
                                                                    let value = e.target.value.replace(/\D/g, "");
                                                                    // Limit to 5 digits
                                                                    if (value.length > 5) {
                                                                        value = value.slice(0, 5);
                                                                    }
                                                                    handleChange({
                                                                        target: {
                                                                            name: "zip",
                                                                            value
                                                                        }
                                                                    });
                                                                    updateData({
                                                                        zip: value
                                                                    });
                                                                    setErrorObj({
                                                                        ...erroObj,
                                                                        zip: ""
                                                                    });
                                                                },
                                                                onBlur: handleBlur,
                                                                maxLength: 5,
                                                                className: "w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 529,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            touched.zip && errors.zip && !erroObj.zip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: errors.zip
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 554,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            erroObj.zip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: erroObj.zip
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 557,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 512,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Years at this Address:",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 567,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 565,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 564,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        name: "buyerYearsAtAddress",
                                                        value: data.buyerYearsAtAddress || "",
                                                        onChange: (e)=>{
                                                            handleChange(e);
                                                            updateData({
                                                                buyerYearsAtAddress: e.target.value
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                buyerYearsAtAddress: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 570,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.buyerYearsAtAddress && errors.buyerYearsAtAddress && !erroObj.buyerYearsAtAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.buyerYearsAtAddress
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 585,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.buyerYearsAtAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.buyerYearsAtAddress
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 590,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 563,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "coBuyerCol space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: "Co-Buyer:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 601,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 600,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        value: data.coFirstName || "",
                                                        onChange: (e)=>updateData({
                                                                coFirstName: e.target.value
                                                            }),
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 603,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 599,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: "SS#:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 614,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 613,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "000-00-0000",
                                                        name: "coSsn",
                                                        value: data.coSsn || "",
                                                        onChange: (e)=>{
                                                            let value = e.target.value;
                                                            // Remove all non-numeric characters
                                                            value = value.replace(/\D/g, "");
                                                            // Apply formatting: 000-00-0000
                                                            if (value.length > 3 && value.length <= 5) {
                                                                value = value.slice(0, 3) + "-" + value.slice(3);
                                                            } else if (value.length > 5) {
                                                                value = value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5, 9);
                                                            }
                                                            handleChange({
                                                                target: {
                                                                    name: "coSsn",
                                                                    value
                                                                }
                                                            });
                                                            updateData({
                                                                coSsn: value
                                                            });
                                                        },
                                                        maxLength: 11,
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 623,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 612,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid lg:grid-cols-3 grid-cols-1 md:gap-4 gap-y-2 items-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: "Phone:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 658,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 657,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "",
                                                                value: data.coBuyerPhoneType || "",
                                                                onChange: (e)=>updateData({
                                                                        coBuyerPhoneType: e.target.value
                                                                    }),
                                                                className: "w-full",
                                                                options: phoneType
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 660,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 656,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            placeholder: "(000) 000-0000",
                                                            value: data.coBuyerPhone || "",
                                                            onChange: (e)=>{
                                                                let input = e.target.value.replace(/\D/g, ""); // remove all non-numeric characters
                                                                if (input.length > 10) input = input.slice(0, 10); // limit to 10 digits
                                                                // format as (000) 000-0000
                                                                let formatted = input;
                                                                if (input.length > 6) {
                                                                    formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3, 6), "-").concat(input.slice(6));
                                                                } else if (input.length > 3) {
                                                                    formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3));
                                                                } else if (input.length > 0) {
                                                                    formatted = "(".concat(input);
                                                                }
                                                                updateData({
                                                                    coBuyerPhone: formatted
                                                                });
                                                            },
                                                            className: "w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 671,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 670,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 655,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: "Mailing Address:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 700,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 699,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        value: data.cofirstStreet || "",
                                                        onChange: (e)=>updateData({
                                                                cofirstStreet: e.target.value
                                                            }),
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 702,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 698,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: "City:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 714,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 713,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "",
                                                                value: data.coCity || "",
                                                                onChange: (e)=>updateData({
                                                                        coCity: e.target.value
                                                                    }),
                                                                className: "w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 716,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 712,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: "State:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 725,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 724,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                                                                value: data.coState || "",
                                                                name: "coState",
                                                                onChange: (e)=>{
                                                                    handleChange(e);
                                                                    updateData({
                                                                        coState: e.target.value
                                                                    });
                                                                    setErrorObj({
                                                                        ...erroObj,
                                                                        coState: ""
                                                                    });
                                                                },
                                                                children: states === null || states === void 0 ? void 0 : states.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: item.id,
                                                                        children: item.label
                                                                    }, item.label, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                        lineNumber: 739,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 727,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 723,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: "Zip:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 756,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 755,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "Enter Zipcode",
                                                                name: "coZip",
                                                                value: data.coZip || "",
                                                                onChange: (e)=>{
                                                                    // Remove all non-numeric characters
                                                                    let value = e.target.value.replace(/\D/g, "");
                                                                    // Limit to 5 digits
                                                                    if (value.length > 5) {
                                                                        value = value.slice(0, 5);
                                                                    }
                                                                    handleChange({
                                                                        target: {
                                                                            name: "coZip",
                                                                            value
                                                                        }
                                                                    });
                                                                    updateData({
                                                                        coZip: value
                                                                    });
                                                                },
                                                                onBlur: handleBlur,
                                                                maxLength: 5,
                                                                className: "w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 767,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 754,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 711,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 598,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                lineNumber: 219,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InnerWrapper, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 grid-cols-1 gap-2 ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium",
                                                    children: [
                                                        "Mortage Company:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 text-sm",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 800,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                    lineNumber: 798,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 797,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                placeholder: "",
                                                value: data.mortageCompany || "",
                                                onChange: (e)=>{
                                                    handleChange(e);
                                                    updateData({
                                                        mortageCompany: e.target.value
                                                    });
                                                    setErrorObj({
                                                        ...erroObj,
                                                        mortageCompany: ""
                                                    });
                                                },
                                                name: "mortageCompany",
                                                className: "w-full",
                                                onBlur: handleBlur
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 803,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            touched.mortageCompany && errors.mortageCompany && !erroObj.mortageCompany && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-red-500 text-sm",
                                                children: errors.mortageCompany
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 818,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            erroObj.mortageCompany && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-red-500 text-sm",
                                                children: erroObj.mortageCompany
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 823,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 796,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                    lineNumber: 795,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                lineNumber: 794,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InnerWrapper, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 mb-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold",
                                            children: "References-(not living in same household, 2 required)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                            lineNumber: 833,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 832,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Name: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 841,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 840,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 839,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        name: "name1",
                                                        value: data.name1 || "",
                                                        onChange: (e)=>{
                                                            handleChange(e);
                                                            updateData({
                                                                name1: e.target.value
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                name1: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 844,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.name1 && errors.name1 && !erroObj.name1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.name1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 857,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.name1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.name1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 860,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 838,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Relationship:",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 869,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 867,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 866,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        name: "relationship1",
                                                        value: data.relationship1 || "",
                                                        onChange: (e)=>{
                                                            handleChange(e);
                                                            updateData({
                                                                relationship1: e.target.value
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                relationship1: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 872,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.relationship1 && errors.relationship1 && !erroObj.relationship1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.relationship1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 887,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.relationship1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.relationship1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 892,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 865,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Phone: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 900,
                                                                    columnNumber: 32
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 899,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 898,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "(000) 000-0000",
                                                        name: "phone1",
                                                        value: data.phone1 || "",
                                                        onChange: (e)=>{
                                                            let input = e.target.value.replace(/\D/g, ""); // remove all non-numeric characters
                                                            if (input.length > 10) input = input.slice(0, 10); // limit to 10 digits
                                                            // format as (000) 000-0000
                                                            let formatted = input;
                                                            if (input.length > 6) {
                                                                formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3, 6), "-").concat(input.slice(6));
                                                            } else if (input.length > 3) {
                                                                formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3));
                                                            } else if (input.length > 0) {
                                                                formatted = "(".concat(input);
                                                            }
                                                            handleChange(e);
                                                            updateData({
                                                                phone1: formatted
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                phone1: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 903,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.phone1 && errors.phone1 && !erroObj.phone1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.phone1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 934,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.phone1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.phone1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 939,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 897,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 837,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Name: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 949,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 948,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 947,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        value: data.name2 || "",
                                                        name: "name2",
                                                        onChange: (e)=>{
                                                            handleChange(e), updateData({
                                                                name2: e.target.value
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                name2: ""
                                                            });
                                                        },
                                                        onBlur: handleBlur,
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 952,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.name2 && errors.name2 && !erroObj.name2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.name2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 964,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.name2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.name2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 967,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 946,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Relationship:",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 976,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 974,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 973,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        name: "relationship2",
                                                        value: data.relationship2 || "",
                                                        onChange: (e)=>{
                                                            handleChange(e);
                                                            updateData({
                                                                relationship2: e.target.value
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                relationship2: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 979,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.relationship2 && errors.relationship2 && !erroObj.relationship2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.relationship2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 994,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.relationship2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.relationship2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 999,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 972,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Phone: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 1007,
                                                                    columnNumber: 32
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 1006,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1005,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "(000) 000-0000",
                                                        name: "phone2",
                                                        value: data.phone2 || "",
                                                        onChange: (e)=>{
                                                            let input = e.target.value.replace(/\D/g, ""); // remove all non-numeric characters
                                                            if (input.length > 10) input = input.slice(0, 10); // limit to 10 digits
                                                            // format as (000) 000-0000
                                                            let formatted = input;
                                                            if (input.length > 6) {
                                                                formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3, 6), "-").concat(input.slice(6));
                                                            } else if (input.length > 3) {
                                                                formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3));
                                                            } else if (input.length > 0) {
                                                                formatted = "(".concat(input);
                                                            }
                                                            handleChange(e);
                                                            updateData({
                                                                phone2: formatted
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                phone2: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1010,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.phone2 && errors.phone2 && !erroObj.phone1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.phone2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1041,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.phone2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.phone2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1046,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1004,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 945,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                lineNumber: 831,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InnerWrapper, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 grid-cols-1 gap-4 mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium",
                                                        children: [
                                                            "E-Mail Address:",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 text-sm",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1060,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1058,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                    lineNumber: 1057,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    placeholder: "",
                                                    value: data.email || "",
                                                    name: "email",
                                                    onChange: (e)=>{
                                                        handleChange(e);
                                                        updateData({
                                                            email: e.target.value
                                                        });
                                                        setErrorObj({
                                                            ...erroObj,
                                                            email: ""
                                                        });
                                                    },
                                                    className: "w-full",
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                    lineNumber: 1063,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                touched.email && errors.email && !erroObj.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 text-sm",
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                    lineNumber: 1076,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                erroObj.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 text-sm",
                                                    children: erroObj.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                    lineNumber: 1079,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                            lineNumber: 1056,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 1055,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 grid-cols-1 gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Employer:",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 1091,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 1089,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1088,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        name: "employer",
                                                        value: data.employer || "",
                                                        onChange: (e)=>{
                                                            handleChange(e);
                                                            updateData({
                                                                employer: e.target.value
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                employer: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1094,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.employer && errors.employer && !erroObj.employer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.employer
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1109,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.employer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.employer
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1114,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1087,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Length: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 1123,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 1122,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1121,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        name: "employerLength",
                                                        value: data.employerLength || "",
                                                        onChange: (e)=>{
                                                            handleChange(e);
                                                            updateData({
                                                                employerLength: e.target.value
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                employerLength: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1126,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.employerLength && errors.employerLength && !erroObj.employerLength && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.employerLength
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1141,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.employerLength && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.employerLength
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1146,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1120,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Work Phone:",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 1156,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 1154,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1153,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        name: "employerPhone",
                                                        placeholder: "(000) 000-0000",
                                                        value: data.employerPhone || "",
                                                        onChange: (e)=>{
                                                            let input = e.target.value.replace(/\D/g, ""); // remove all non-numeric characters
                                                            if (input.length > 10) input = input.slice(0, 10); // limit to 10 digits
                                                            // format as (000) 000-0000
                                                            let formatted = input;
                                                            if (input.length > 6) {
                                                                formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3, 6), "-").concat(input.slice(6));
                                                            } else if (input.length > 3) {
                                                                formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3));
                                                            } else if (input.length > 0) {
                                                                formatted = "(".concat(input);
                                                            }
                                                            handleChange(e);
                                                            updateData({
                                                                employerPhone: formatted
                                                            });
                                                            setErrorObj({
                                                                ...erroObj,
                                                                employerPhone: ""
                                                            });
                                                        },
                                                        className: "w-full",
                                                        onBlur: handleBlur
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1159,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    touched.employerPhone && errors.employerPhone && !erroObj.employerPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: errors.employerPhone
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1192,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    erroObj.employerPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm",
                                                        children: erroObj.employerPhone
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1197,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1152,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 1086,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 grid-cols-1 gap-4 mb-4 border-t border-gray-200 pt-5 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: "Co-Name Employer:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 1206,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1205,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        value: data.coEmployer || "",
                                                        onChange: (e)=>updateData({
                                                                coEmployer: e.target.value
                                                            }),
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1208,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1204,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: "Length:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 1220,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1219,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "",
                                                        value: data.coEmployerLength || "",
                                                        onChange: (e)=>updateData({
                                                                coEmployerLength: e.target.value
                                                            }),
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1222,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1218,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium",
                                                            children: "Work Phone:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                            lineNumber: 1234,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1233,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        placeholder: "(000) 000-0000",
                                                        value: data.coEmployerPhone || "",
                                                        onChange: (e)=>{
                                                            let input = e.target.value.replace(/\D/g, ""); // remove all non-numeric characters
                                                            if (input.length > 10) input = input.slice(0, 10); // limit to 10 digits
                                                            // format as (000) 000-0000
                                                            let formatted = input;
                                                            if (input.length > 6) {
                                                                formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3, 6), "-").concat(input.slice(6));
                                                            } else if (input.length > 3) {
                                                                formatted = "(".concat(input.slice(0, 3), ") ").concat(input.slice(3));
                                                            } else if (input.length > 0) {
                                                                formatted = "(".concat(input);
                                                            }
                                                            updateData({
                                                                coEmployerPhone: formatted
                                                            });
                                                        },
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1236,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1232,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 1203,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm font-semibold mb-6",
                                                children: "BY AFFIXING MY (OUR) SIGNATURES BELOW, I (WE) CERTIFY ALL OF THE INFORMATION SUPPLIED BY ME ON THIS FORM IS TRUE AND CORRECT, AND HEREBY AUTHORIZE THE RELEASE OF ANY INFORMATION, DEEMED NECESSARY BY LESSOR, RELATING TO EMPLOYMENT, INCOME, AND EXISTING OR PRIOR LEASES INCLUDING PROPERTY. ANY FALSE STATEMENT CAN BE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1265,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "Buyer Signed:",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 text-sm",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                            lineNumber: 1279,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 1277,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1276,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "",
                                                                name: "buyerSigned",
                                                                value: data.buyerSigned || "",
                                                                onChange: (e)=>{
                                                                    handleChange(e);
                                                                    updateData({
                                                                        buyerSigned: e.target.value
                                                                    });
                                                                    setErrorObj({
                                                                        ...erroObj,
                                                                        buyerSigned: ""
                                                                    });
                                                                },
                                                                onBlur: handleBlur,
                                                                className: "w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1282,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            touched.buyerSigned && errors.buyerSigned && !erroObj.buyerSigned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: errors.buyerSigned
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1297,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            erroObj.buyerSigned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: erroObj.buyerSigned
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1302,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1275,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "Date: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 text-sm",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                            lineNumber: 1311,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 1310,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1309,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                type: "text",
                                                                name: "buyerDate",
                                                                placeholder: "MM/DD/YYYY",
                                                                value: data.buyerDate || formatDateToMMDDYYYY(new Date()) // modified by Sid
                                                                ,
                                                                onChange: (e)=>{
                                                                    const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                                                                    handleChange({
                                                                        target: {
                                                                            name: "buyerDate",
                                                                            value: masked
                                                                        }
                                                                    });
                                                                    updateData({
                                                                        buyerDate: masked
                                                                    }); // modified by Sid
                                                                    setErrorObj({
                                                                        ...erroObj,
                                                                        buyerDate: ""
                                                                    });
                                                                },
                                                                onBlur: handleBlur,
                                                                className: "w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1315,
                                                                columnNumber: 24
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            touched.buyerDate && errors.buyerDate && !erroObj.buyerDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: errors.buyerDate
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1335,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            erroObj.buyerDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: erroObj.buyerDate
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1340,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1308,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1274,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: "Co-Buyer Signed:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 1350,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1349,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "",
                                                                value: data.coBuyerSigned || "",
                                                                onChange: (e)=>updateData({
                                                                        coBuyerSigned: e.target.value
                                                                    }),
                                                                className: "w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1352,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1348,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: "Date:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                    lineNumber: 1364,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1363,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                type: "text",
                                                                name: "coBuyerDate",
                                                                placeholder: "MM/DD/YYYY",
                                                                value: data.coBuyerDate || formatDateToMMDDYYYY(new Date()) // modified by Sid
                                                                ,
                                                                onChange: (e)=>{
                                                                    const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                                                                    handleChange({
                                                                        target: {
                                                                            name: "coBuyerDate",
                                                                            value: masked
                                                                        }
                                                                    });
                                                                    updateData({
                                                                        coBuyerDate: masked
                                                                    }); // modified by Sid
                                                                },
                                                                className: "w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                                lineNumber: 1367,
                                                                columnNumber: 22
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                                        lineNumber: 1362,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                                lineNumber: 1347,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step2.js",
                                        lineNumber: 1264,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/forms/steps/Step2.js",
                                lineNumber: 1054,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/forms/steps/Step2.js",
                        lineNumber: 209,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/steps/Step2.js",
                    lineNumber: 208,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
        }, void 0, false, {
            fileName: "[project]/app/components/forms/steps/Step2.js",
            lineNumber: 200,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(Step_2, "rPOrG0eDg8EeH6iunCEbpSfjvdo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
    ];
});
_c2 = Step_2;
const __TURBOPACK__default__export__ = Step_2;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "InnerWrapper");
__turbopack_context__.k.register(_c2, "Step_2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_forms_steps_Step2_3f86e48a.js.map