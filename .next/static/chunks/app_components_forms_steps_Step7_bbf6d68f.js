(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/forms/steps/Step7.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useDebounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
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
/* ----------------------------------------------------
 * Date helpers (MM/DD/YYYY)  // modified by Sid
 * ---------------------------------------------------*/ const pad2 = (n)=>String(n).padStart(2, "0"); // modified by Sid
const toMMDDYYYY = (d)=>{
    if (!d) return "";
    const dt = d instanceof Date ? d : new Date(d);
    return "".concat(pad2(dt.getMonth() + 1), "/").concat(pad2(dt.getDate()), "/").concat(dt.getFullYear());
}; // modified by Sid
const isoToMMDDYYYY = (iso)=>{
    if (!iso) return "";
    if (iso.includes("/")) return iso; // already formatted // modified by Sid
    const [y, m, d] = iso.split("T")[0].split("-");
    if (!y || !m || !d) return "";
    return "".concat(pad2(m), "/").concat(pad2(d), "/").concat(y);
}; // modified by Sid
const maskToMMDDYYYY = (raw)=>{
    const v = String(raw || "").replace(/\D/g, "").slice(0, 8); // keep 8 digits  // modified by Sid
    const mm = v.slice(0, 2);
    const dd = v.slice(2, 4);
    const yyyy = v.slice(4, 8);
    if (v.length <= 2) return mm;
    if (v.length <= 4) return "".concat(mm, "/").concat(dd);
    return "".concat(mm, "/").concat(dd, "/").concat(yyyy);
}; // modified by Sid
const showMMDD = (val)=>{
    if (!val) return "";
    return val.includes("-") ? isoToMMDDYYYY(val) : val;
}; // modified by Sid
/* ---------------------------------------------------*/ const Section = (param)=>{
    let { children, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-lg p-4 ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/forms/steps/Step7.js",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Section;
const Step_7 = (param)=>{
    let { data, updateData } = param;
    _s();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("rto-token");
    const debouncedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(data, 5000);
    const formId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("formId");
    const { setSaveStatus, erroObj, setErrorObj } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GlobalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step_7.useEffect": ()=>{
            scrollTo(0, 0);
            const today = toMMDDYYYY(new Date()); // modified by Sid
            const patch = {};
            // dates - set if empty
            if (!data.purchaseOrderDate) patch.purchaseOrderDate = today;
            if (!data.outdoorCreditDate) patch.outdoorCreditDate = today;
            if (!data.dealerDate) patch.dealerDate = today;
            // ---------- SELLER / DEALER NAME ----------
            if (!data.sellerName) {
                if (data.sellerName) {
                    patch.sellerName = data.sellerName;
                } else if (data.dealerName) {
                    patch.sellerName = data.dealerName;
                } else if (data.dealer) {
                    patch.sellerName = data.dealer;
                } else if (data.dealer_name) {
                    patch.sellerName = data.dealer_name;
                } else if (data.businessName) {
                    patch.sellerName = data.businessName;
                } else if (data.lessee) {
                    patch.sellerName = data.lessee;
                }
            }
            // ---------- MANUFACTURER / SIZE / COLOR / SERIAL ----------
            if (!data.manufacturer) {
                if (data.manufacturer) patch.manufacturer = data.manufacturer;
                else if (data.buildingManufacturer) patch.manufacturer = data.buildingManufacturer;
            }
            if (!data.buildingSize) {
                if (data.buildingSize) patch.buildingSize = data.buildingSize;
                else if (data.size) patch.buildingSize = data.size;
                else if (data.shedSize) patch.buildingSize = data.shedSize;
            }
            if (!data.buildingColor) {
                if (data.buildingColor) patch.buildingColor = data.buildingColor;
                else if (data.color) patch.buildingColor = data.color;
                else if (data.shedColor) patch.buildingColor = data.shedColor;
            }
            if (!data.serialNumber) {
                if (data.serialNumber) patch.serialNumber = data.serialNumber;
                else if (data.serial) patch.serialNumber = data.serial;
                else if (data.shedSerial) patch.serialNumber = data.shedSerial;
                else if (data.property_serial_number) patch.serialNumber = data.property_serial_number;
            }
            // ---------- SALES PRICE ----------
            if (!data.salesPrice) {
                if (data.salesPrice) {
                    patch.salesPrice = data.salesPrice;
                } else if (data.sales_price) {
                    patch.salesPrice = data.sales_price;
                } else if (data.totalInitialPayment) {
                    patch.salesPrice = data.totalInitialPayment;
                } else if (data.monthly_rental_payment) {
                    patch.salesPrice = data.monthly_rental_payment;
                } else if (data.totalMonthlyPayment) {
                    patch.salesPrice = data.totalMonthlyPayment;
                } else if (data.buildingPrice) {
                    patch.salesPrice = data.buildingPrice;
                } else if (data.cashPrice) {
                    patch.salesPrice = data.cashPrice;
                } else if (data.total_price) {
                    patch.salesPrice = data.total_price;
                }
            }
            // ---------- SALES TAX ----------
            if (!data.salesTax) {
                if (data.salesTax) {
                    patch.salesTax = data.salesTax;
                } else if (data.sales_tax) {
                    patch.salesTax = data.sales_tax;
                } else if (data.salesTaxCCR) {
                    patch.salesTax = data.salesTaxCCR;
                } else if (data.monthlySalesTax) {
                    patch.salesTax = data.monthlySalesTax;
                } else if (data.taxAmount) {
                    patch.salesTax = data.taxAmount;
                }
            }
            // ---------- NET SALES PRICE ----------
            if (!data.netSalesPrice) {
                if (data.netSalesPrice) {
                    patch.netSalesPrice = data.netSalesPrice;
                } else if (data.net_sales_price) {
                    patch.netSalesPrice = data.net_sales_price;
                } else if (data.totalInitialPayment) {
                    patch.netSalesPrice = data.totalInitialPayment;
                } else if (data.totalMonthlyPayment) {
                    patch.netSalesPrice = data.totalMonthlyPayment;
                }
            }
            if (Object.keys(patch).length > 0) {
                updateData(patch);
            }
        }
    }["Step_7.useEffect"], []); // modified by sid
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step_7.useEffect": ()=>{
            const cost = Number(data.buildingCost) || 0;
            const tax = cost * 0.07;
            updateData({
                taxRate: tax.toFixed(2)
            });
        }
    }["Step_7.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step_7.useEffect": ()=>{
            if (Object.keys(debouncedData).length > 0) {
                saveFormData(debouncedData);
            }
        }
    }["Step_7.useEffect"], [
        debouncedData
    ]);
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        }
    };
    const saveFormData = async (formData)=>{
        try {
            const payload = {
                formType: "step-7",
                form_id: formId || null,
                seller_name: formData.sellerName,
                order_date: showMMDD(formData.purchaseOrderDate) || toMMDDYYYY(new Date()),
                // Manufacturer Section
                manufacturer: formData.manufacturer,
                size: formData.buildingSize,
                color: formData.buildingColor,
                serial_number: formData.serialNumber,
                // Pricing Section
                sales_price: formData.buildingCost,
                sales_tax: formData.paymentSalesTax,
                net_sales_price: formData.netSalesPrice,
                // Acceptance Section
                outdoor_credit_signature: formData.outdoorCreditSignature,
                outdoor_credit_signature_date: showMMDD(formData.outdoorCreditDate) || toMMDDYYYY(new Date()),
                dealer_signature: formData.dealerSignature,
                dealer_signature_date: showMMDD(formData.dealerDate) || toMMDDYYYY(new Date())
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
    const initialValues = {
        // Seller Section
        sellerName: "",
        purchaseOrderDate: "",
        // Manufacturer Section
        manufacturer: data.manufacturer,
        buildingSize: data.buildingSize,
        buildingColor: data.buildingColor,
        serialNumber: data.serialNumber,
        // Pricing Section
        buildingCost: data.buildingCost,
        taxRate: data.buildingCost ? Number(data.buildingCost) * Number(data.salesTax) : 0,
        netSalesPrice: "",
        // Acceptance Section
        outdoorCreditSignature: "",
        outdoorCreditDate: "",
        dealerSignature: "",
        dealerDate: ""
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formik"], {
            initialValues: initialValues,
            validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["step_7_validationSchema"],
            onSubmit: (values)=>console.log(values),
            validateOnBlur: true,
            validateOnChange: false,
            children: (param)=>{
                let { values, handleChange, handleBlur, errors, touched } = param;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    className: "space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto sm:px-6 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6 py-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-[#4b599b] underline",
                                    children: "Purchase Order"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                    lineNumber: 274,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                lineNumber: 273,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between sm:flex-row flex-col gap-3 items-start mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:w-fit w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-lg mb-1 block",
                                                    children: [
                                                        "Seller: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 text-sm",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                            lineNumber: 284,
                                                            columnNumber: 31
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    value: data.sellerName || "",
                                                    name: "sellerName",
                                                    onChange: (e)=>{
                                                        handleChange(e);
                                                        updateData({
                                                            sellerName: e.target.value
                                                        });
                                                        setErrorObj({
                                                            ...erroObj,
                                                            sellerName: ""
                                                        });
                                                    },
                                                    placeholder: "Seller Name",
                                                    className: "md:w-64",
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                touched.sellerName && errors.sellerName && !erroObj.sellerName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 flex text-right text-sm",
                                                    children: errors.sellerName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 301,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                erroObj.sellerName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 text-sm",
                                                    children: erroObj.sellerName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 306,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                            lineNumber: 282,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:w-fit w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-lg mb-1 block",
                                                    children: [
                                                        "Date: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 text-sm",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                            lineNumber: 314,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 313,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "text",
                                                    placeholder: "MM/DD/YYYY",
                                                    value: showMMDD(data.purchaseOrderDate) || toMMDDYYYY(new Date()),
                                                    onChange: (e)=>{
                                                        const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                                                        handleChange({
                                                            target: {
                                                                name: "purchaseOrderDate",
                                                                value: masked
                                                            }
                                                        }); // modified by Sid
                                                        updateData({
                                                            purchaseOrderDate: masked
                                                        }); // modified by Sid
                                                        setErrorObj({
                                                            ...erroObj,
                                                            purchaseOrderDate: ""
                                                        }); // modified by Sid
                                                    },
                                                    className: "sm:max-w-40",
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 316,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                touched.purchaseOrderDate && errors.purchaseOrderDate && !erroObj.purchaseOrderDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 flex text-right text-sm",
                                                    children: errors.purchaseOrderDate
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 336,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                erroObj.purchaseOrderDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 text-sm",
                                                    children: erroObj.purchaseOrderDate
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 341,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                lineNumber: 280,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium text-lg mb-2",
                                        children: [
                                            "Purchaser:",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: "OUTDOOR CREDIT INC."
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 353,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 md:pl-22",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "1135 NW 23rd Ave., Steffi"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Gainesville Florida 32609"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "877-228-0125"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 358,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                        lineNumber: 355,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                lineNumber: 350,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-gray-300 px-5 py-6 mb-6 rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-lg mb-2 block",
                                                    children: [
                                                        "Manufacturer:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 text-sm",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                            lineNumber: 368,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 366,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    value: data.manufacturer || "",
                                                    name: "manufacturer",
                                                    onChange: (e)=>{
                                                        handleChange(e), updateData({
                                                            manufacturer: e.target.value
                                                        });
                                                        setErrorObj({
                                                            ...erroObj,
                                                            manufacturer: ""
                                                        });
                                                    },
                                                    onBlur: handleBlur,
                                                    placeholder: "Manufacturer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 370,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                touched.manufacturer && errors.manufacturer && !erroObj.manufacturer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 flex text-right text-sm",
                                                    children: errors.manufacturer
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 384,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                erroObj.manufacturer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 text-sm",
                                                    children: erroObj.manufacturer
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 389,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                            lineNumber: 365,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-lg mb-2 block",
                                                    children: [
                                                        "Size:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 text-sm",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                            lineNumber: 396,
                                                            columnNumber: 28
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    name: "buildingSize",
                                                    value: data.buildingSize || "",
                                                    onChange: (e)=>{
                                                        handleChange(e);
                                                        updateData({
                                                            buildingSize: e.target.value
                                                        });
                                                        setErrorObj({
                                                            ...erroObj,
                                                            buildingSize: ""
                                                        });
                                                    },
                                                    placeholder: "buildingSize",
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 398,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                touched.buildingSize && errors.buildingSize && !erroObj.buildingSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 flex text-right text-sm",
                                                    children: errors.buildingSize
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 412,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                erroObj.buildingSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 text-sm",
                                                    children: erroObj.buildingSize
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 417,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                            lineNumber: 394,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-lg mb-2 block",
                                                    children: [
                                                        "Color: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 text-sm",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                            lineNumber: 424,
                                                            columnNumber: 30
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 423,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    name: "buildingColor",
                                                    value: data.buildingColor || "",
                                                    onChange: (e)=>{
                                                        handleChange(e);
                                                        updateData({
                                                            buildingColor: e.target.value
                                                        });
                                                        setErrorObj({
                                                            ...erroObj,
                                                            buildingColor: ""
                                                        });
                                                    },
                                                    placeholder: "buildingColor",
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 426,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                touched.buildingColor && errors.buildingColor && !erroObj.buildingColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 flex text-right text-sm",
                                                    children: errors.buildingColor
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 440,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                erroObj.buildingColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 text-sm",
                                                    children: erroObj.buildingColor
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 445,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                            lineNumber: 422,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-lg mb-2 block",
                                                    children: [
                                                        "Serial #:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 text-sm",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                            lineNumber: 452,
                                                            columnNumber: 32
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 451,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    name: "serialNumber",
                                                    value: data.serialNumber || "",
                                                    onChange: (e)=>{
                                                        handleChange(e);
                                                        updateData({
                                                            serialNumber: e.target.value
                                                        });
                                                        setErrorObj({
                                                            ...erroObj,
                                                            serialNumber: ""
                                                        });
                                                    },
                                                    placeholder: "Serial Number",
                                                    className: "",
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 454,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                touched.serialNumber && errors.serialNumber && !erroObj.serialNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 flex text-right text-sm",
                                                    children: errors.serialNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 469,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                erroObj.serialNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 text-sm",
                                                    children: erroObj.serialNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 474,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                            lineNumber: 450,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                lineNumber: 363,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 max-w-xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-lg ",
                                                        children: [
                                                            "Sales Price:",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 text-sm",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 488,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 486,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mr-2",
                                                                        children: "$"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 492,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        value: data.buildingCost || "",
                                                                        name: "buildingCost",
                                                                        onChange: (e)=>{
                                                                            handleChange(e);
                                                                            updateData({
                                                                                buildingCost: e.target.value
                                                                            });
                                                                            setErrorObj({
                                                                                ...erroObj,
                                                                                buildingCost: ""
                                                                            });
                                                                        },
                                                                        onBlur: handleBlur,
                                                                        placeholder: "0.00",
                                                                        className: "w-32"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 493,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 491,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            touched.buildingCost && errors.buildingCost && !erroObj.buildingCost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 flex text-right text-sm",
                                                                children: errors.buildingCost
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 510,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            erroObj.buildingCost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: erroObj.buildingCost
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 515,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 490,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 485,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-lg ",
                                                        children: [
                                                            "Sales Tax: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 text-sm",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 523,
                                                                columnNumber: 34
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 522,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mr-2",
                                                                        children: "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 527,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        value: data.taxRate || "",
                                                                        readOnly: true,
                                                                        name: "taxRate",
                                                                        onChange: (e)=>{
                                                                            handleChange(e);
                                                                            updateData({
                                                                                taxRate: e.target.value
                                                                            });
                                                                            setErrorObj({
                                                                                ...erroObj,
                                                                                taxRate: ""
                                                                            });
                                                                        },
                                                                        placeholder: "N.A.*",
                                                                        className: "w-32",
                                                                        onBlur: handleBlur
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 528,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 526,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            touched.taxRate && errors.taxRate && !erroObj.taxRate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 flex text-right text-sm",
                                                                children: errors.taxRate
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 545,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            erroObj.taxRate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-red-500 text-sm",
                                                                children: erroObj.taxRate
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 550,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 525,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 521,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-lg ",
                                                        children: [
                                                            "Net Sales Price:",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 text-sm",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 559,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 557,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mr-2",
                                                                    children: "$"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                    lineNumber: 563,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    readOnly: true,
                                                                    value: data.buildingCost || data.taxRate ? (parseFloat(data.buildingCost) || 0) + (parseFloat(data.taxRate) || 0) : "",
                                                                    name: "netSalesPrice",
                                                                    onChange: (e)=>{
                                                                        handleChange(e);
                                                                        updateData({
                                                                            netSalesPrice: e.target.value
                                                                        });
                                                                        setErrorObj({
                                                                            ...erroObj,
                                                                            netSalesPrice: ""
                                                                        });
                                                                    },
                                                                    onBlur: handleBlur,
                                                                    placeholder: "0.00",
                                                                    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-32"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                    lineNumber: 564,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                            lineNumber: 562,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 561,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 556,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm space-y-1 text-center mt-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "* Outdoor Credit Inc - Florida State Sales Tax Certificate Number: 11-8017950453-6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 601,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "* Outdoor Credit Inc - Georgia State Sales Tax Certificate Number: 175975123"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 605,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                lineNumber: 483,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-gray-300 px-5 py-6 rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "ACCEPTANCE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                            lineNumber: 616,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        ": BUYER AGREES TO PURCHASE THE MERCHANDISE DESCRIBED ABOVE AT THE PRICE STATED."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 615,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "WARRANTIES"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                            lineNumber: 621,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        ": ALL WARRANTIES, IF ANY, BY A MANUFACTURER OR SUPPLIER ARE THEIRS, NOT THE SELLERS."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                    lineNumber: 620,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                            lineNumber: 614,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                        lineNumber: 613,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-lg mb-2 block",
                                                        children: "ACCEPTED BY OUTDOOR CREDIT INC.:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 630,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid sm:grid-cols-2 sm:gap-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        value: data.outdoorCreditSignature || "",
                                                                        onChange: (e)=>{
                                                                            handleChange(e);
                                                                            updateData({
                                                                                outdoorCreditSignature: e.target.value
                                                                            });
                                                                            setErrorObj({
                                                                                ...erroObj,
                                                                                outdoorCreditSignature: ""
                                                                            });
                                                                        },
                                                                        name: "outdoorCreditSignature",
                                                                        onBlur: handleBlur,
                                                                        placeholder: "Signature"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 635,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 mt-1 text-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "font-medium",
                                                                            children: "Signature"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 652,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 651,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    touched.outdoorCreditSignature && errors.outdoorCreditSignature && !erroObj.outdoorCreditSignature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-red-500 text-sm",
                                                                        children: "Signature is required."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 658,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    erroObj.outdoorCreditSignature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-red-500 flex text-sm",
                                                                        children: erroObj.outdoorCreditSignature
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 663,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 634,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            type: "text",
                                                                            placeholder: "MM/DD/YYYY",
                                                                            value: showMMDD(data.outdoorCreditDate) || toMMDDYYYY(new Date()),
                                                                            onChange: (e)=>{
                                                                                const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                                                                                handleChange({
                                                                                    target: {
                                                                                        name: "outdoorCreditDate",
                                                                                        value: masked
                                                                                    }
                                                                                }); // modified by Sid
                                                                                updateData({
                                                                                    outdoorCreditDate: masked
                                                                                }); // modified by Sid
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 671,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 mt-1 text-sm",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "font-medium",
                                                                                children: "Date"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                                lineNumber: 690,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 689,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        touched.outdoorCreditDate && errors.outdoorCreditDate && !erroObj.outdoorCreditDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-red-500 text-sm",
                                                                            children: "Signature is required."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 696,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        erroObj.outdoorCreditDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-red-500 flex text-sm",
                                                                            children: erroObj.outdoorCreditDate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 701,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                    lineNumber: 670,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 669,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 633,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 629,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-lg mb-2 block",
                                                        children: "ACCEPTED BY DEALER:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 711,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid sm:grid-cols-2 sm:gap-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        value: data.dealerSignature || "",
                                                                        name: "dealerSignature",
                                                                        onChange: (e)=>{
                                                                            handleChange(e);
                                                                            updateData({
                                                                                dealerSignature: e.target.value
                                                                            });
                                                                            setErrorObj({
                                                                                ...erroObj,
                                                                                dealerSignature: ""
                                                                            });
                                                                        },
                                                                        onBlur: handleBlur,
                                                                        placeholder: "Dealer Signature"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 716,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 mt-1 text-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "font-medium",
                                                                            children: "Dealer Signature"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 728,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 727,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    touched.dealerSignature && errors.dealerSignature && !erroObj.dealerSignature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-red-500 text-sm",
                                                                        children: "Signature is required."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 735,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    erroObj.dealerSignature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-red-500 flex text-sm",
                                                                        children: erroObj.dealerSignature
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                        lineNumber: 740,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 715,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            type: "text",
                                                                            placeholder: "MM/DD/YYYY",
                                                                            value: showMMDD(data.dealerDate) || toMMDDYYYY(new Date()),
                                                                            onChange: (e)=>{
                                                                                const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                                                                                handleChange({
                                                                                    target: {
                                                                                        name: "dealerDate",
                                                                                        value: masked
                                                                                    }
                                                                                }); // modified by Sid
                                                                                updateData({
                                                                                    dealerDate: masked
                                                                                }); // modified by Sid
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 748,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 mt-1 text-sm",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "font-medium",
                                                                                children: "Date"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                                lineNumber: 763,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 762,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        touched.dealerDate && errors.dealerDate && !erroObj.dealerDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-red-500 text-sm",
                                                                            children: "Signature is required."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 768,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        erroObj.dealerDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-red-500 flex text-sm",
                                                                            children: erroObj.dealerDate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                            lineNumber: 773,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                    lineNumber: 747,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                                lineNumber: 746,
                                                                columnNumber: 24
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                                        lineNumber: 714,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                                lineNumber: 710,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/forms/steps/Step7.js",
                                        lineNumber: 628,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/forms/steps/Step7.js",
                                lineNumber: 612,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/forms/steps/Step7.js",
                        lineNumber: 272,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/steps/Step7.js",
                    lineNumber: 271,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
        }, void 0, false, {
            fileName: "[project]/app/components/forms/steps/Step7.js",
            lineNumber: 263,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/forms/steps/Step7.js",
        lineNumber: 262,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Step_7, "7upcy1joDhgvDCzX8Y5Swb6SFBY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
    ];
});
_c1 = Step_7;
const __TURBOPACK__default__export__ = Step_7;
var _c, _c1;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "Step_7");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_forms_steps_Step7_bbf6d68f.js.map