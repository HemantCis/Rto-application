import React, { useEffect, useContext } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { step_7_validationSchema as validationSchema } from "../../../../utils/schema";
import { Formik, Form } from "formik";
import Cookies from "js-cookie";
import { useDebounce } from "@/app/hooks/useDebounce";
import axios from "axios";
import { loginContext } from "../../GlobalContext";

/* ----------------------------------------------------
 * Date helpers (MM/DD/YYYY)  // modified by Sid
 * ---------------------------------------------------*/
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
  const v = String(raw || "").replace(/\D/g, "").slice(0, 8); // keep 8 digits  // modified by Sid
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
/* ---------------------------------------------------*/



const Section = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const Step_7 = ({ data, updateData }) => {
  const token = Cookies.get("rto-token");
  const debouncedData = useDebounce(data, 5000);
  const formId = Cookies?.get("formId");
  const { setSaveStatus, erroObj, setErrorObj } = useContext(loginContext);

  useEffect(() => {
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
      else if (data.buildingManufacturer)
        patch.manufacturer = data.buildingManufacturer;
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
      else if (data.property_serial_number)
        patch.serialNumber = data.property_serial_number;
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
  }, []); // modified by sid

  useEffect(() => {
    const cost = Number(data.buildingCost) || 0;
    const tax = cost * 0.07;
  
    updateData({
      taxRate: tax.toFixed(2),
    });
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
        formType: "step-7",
        form_id: formId || null,
        seller_name: formData.sellerName,
        order_date: showMMDD(formData.purchaseOrderDate) || toMMDDYYYY(new Date()), // modified by Sid

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
        outdoor_credit_signature_date:
        showMMDD(formData.outdoorCreditDate) || toMMDDYYYY(new Date()), // modified by Sid
        dealer_signature: formData.dealerSignature,
        dealer_signature_date:
        showMMDD(formData.dealerDate) || toMMDDYYYY(new Date()), // modified by Sid
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
    dealerDate: "",
  };

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
              <div className="text-center mb-6 py-4">
                <h2 className="text-2xl font-bold text-[#4b599b] underline">
                  Purchase Order
                </h2>
              </div>

              {/* Seller Section */}
              <div className="mb-6">
                <div className="flex justify-between sm:flex-row flex-col gap-3 items-start mb-4">
                  <div className="sm:w-fit w-full">
                    <label className="font-medium text-lg mb-1 block">
                      Seller: <span className="text-red-500 text-sm">*</span>
                    </label>
                    <Input
                      value={data.sellerName || ""}
                      name={"sellerName"}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ sellerName: e.target.value });
                        setErrorObj({ ...erroObj, sellerName: "" });
                      }}
                      placeholder="Seller Name"
                      className="md:w-64"
                      onBlur={handleBlur}
                    />
                    {touched.sellerName &&
                      errors.sellerName &&
                      !erroObj.sellerName && (
                        <div className="text-red-500 flex text-right text-sm">
                          {errors.sellerName}
                        </div>
                      )}
                    {erroObj.sellerName && (
                      <div className="text-red-500 text-sm">
                        {erroObj.sellerName}
                      </div>
                    )}
                  </div>
                {/* Date (MM/DD/YYYY text + mask)  // modified by Sid */}
                <div className="sm:w-fit w-full">
                    <label className="font-medium text-lg mb-1 block">
                      Date: <span className="text-red-500 text-sm">*</span>
                    </label>
                    <Input
                      type="text" // modified by Sid
                      placeholder="MM/DD/YYYY" // modified by Sid
                      value={
                        showMMDD(data.purchaseOrderDate) || toMMDDYYYY(new Date())
                      } // modified by Sid
                      onChange={(e) => {
                        const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                        handleChange({
                          target: { name: "purchaseOrderDate", value: masked },
                        }); // modified by Sid
                        updateData({ purchaseOrderDate: masked }); // modified by Sid
                        setErrorObj({ ...erroObj, purchaseOrderDate: "" }); // modified by Sid
                      }}
                      className="sm:max-w-40"
                      onBlur={handleBlur}
                    />
                    {touched.purchaseOrderDate &&
                      errors.purchaseOrderDate &&
                      !erroObj.purchaseOrderDate && (
                        <div className="text-red-500 flex text-right text-sm">
                          {errors.purchaseOrderDate}
                        </div>
                      )}
                    {erroObj.purchaseOrderDate && (
                      <div className="text-red-500 text-sm">
                        {erroObj.purchaseOrderDate}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Purchaser Section */}
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">
                  Purchaser:{" "}
                  <span className="font-bold">OUTDOOR CREDIT INC.</span>
                </h3>
                <div className="space-y-1 md:pl-22">
                  <p>1135 NW 23rd Ave., Steffi</p>
                  <p>Gainesville Florida 32609</p>
                  <p>877-228-0125</p>
                </div>
              </div>

              {/* Manufacturer Section */}
              <div className="border-2 border-gray-300 px-5 py-6 mb-6 rounded">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-medium text-lg mb-2 block">
                      Manufacturer:{" "}
                      <span className="text-red-500 text-sm">*</span>
                    </label>
                    <Input
                      value={data.manufacturer || ""}
                      name={"manufacturer"}
                      onChange={(e) => {
                        handleChange(e),
                          updateData({ manufacturer: e.target.value });
                        setErrorObj({ ...erroObj, manufacturer: "" });
                      }}
                      onBlur={handleBlur}
                      placeholder="Manufacturer"
                    />
                    {touched.manufacturer &&
                      errors.manufacturer &&
                      !erroObj.manufacturer && (
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
                  <div>
                    <label className="font-medium text-lg mb-2 block">
                      Size:<span className="text-red-500 text-sm">*</span>
                    </label>
                    <Input
                      name={"buildingSize"}
                      value={data.buildingSize || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ buildingSize: e.target.value });
                        setErrorObj({ ...erroObj, buildingSize: "" });
                      }}
                      placeholder="buildingSize"
                      onBlur={handleBlur}
                    />
                    {touched.buildingSize &&
                      errors.buildingSize &&
                      !erroObj.buildingSize && (
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
                  <div>
                    <label className="font-medium text-lg mb-2 block">
                      Color: <span className="text-red-500 text-sm">*</span>
                    </label>
                    <Input
                      name={"buildingColor"}
                      value={data.buildingColor || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ buildingColor: e.target.value });
                        setErrorObj({ ...erroObj, buildingColor: "" });
                      }}
                      placeholder="buildingColor"
                      onBlur={handleBlur}
                    />
                    {touched.buildingColor &&
                      errors.buildingColor &&
                      !erroObj.buildingColor && (
                        <div className="text-red-500 flex text-right text-sm">
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
                    <label className="font-medium text-lg mb-2 block">
                      Serial #:<span className="text-red-500 text-sm">*</span>
                    </label>
                    <Input
                      name={"serialNumber"}
                      value={data.serialNumber || ""}
                      onChange={(e) => {
                        handleChange(e);
                        updateData({ serialNumber: e.target.value });
                        setErrorObj({ ...erroObj, serialNumber: "" });
                      }}
                      placeholder="Serial Number"
                      className=""
                      onBlur={handleBlur}
                    />
                    {touched.serialNumber &&
                      errors.serialNumber &&
                      !erroObj.serialNumber && (
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

              {/* Pricing Section */}
              <div className="mb-6">
                <div className="space-y-4 max-w-xl mx-auto">
                  <div className="grid grid-cols-2 items-center">
                    <label className="font-medium text-lg ">
                      Sales Price:{" "}
                      <span className="text-red-500 text-sm">*</span>
                    </label>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center">
                        <span className="mr-2">$</span>
                        <Input
                          value={data.buildingCost || ""}
                          name={"buildingCost"}
                          onChange={(e) => {
                            handleChange(e);
                            updateData({ buildingCost: e.target.value });
                            setErrorObj({ ...erroObj, buildingCost: "" });
                          }}
                          onBlur={handleBlur}
                          placeholder="0.00"
                          className="w-32"
                        />
                      </div>

                      {touched.buildingCost &&
                        errors.buildingCost &&
                        !erroObj.buildingCost && (
                          <div className="text-red-500 flex text-right text-sm">
                            {errors.buildingCost}
                          </div>
                        )}
                      {erroObj.buildingCost && (
                        <div className="text-red-500 text-sm">
                          {erroObj.buildingCost}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label className="font-medium text-lg ">
                      Sales Tax: <span className="text-red-500 text-sm">*</span>
                    </label>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center">
                        <span className="mr-2">-</span>
                        <Input
                          value={data.taxRate || ""}
                          readOnly
                          name={"taxRate"}
                          onChange={(e) => {
                            handleChange(e);
                            updateData({ taxRate: e.target.value });
                            setErrorObj({ ...erroObj, taxRate: "" });
                          }}
                          placeholder="N.A.*"
                          className="w-32"
                          onBlur={handleBlur}
                        />
                      </div>
                      {touched.taxRate &&
                        errors.taxRate &&
                        !erroObj.taxRate && (
                          <div className="text-red-500 flex text-right text-sm">
                            {errors.taxRate}
                          </div>
                        )}
                      {erroObj.taxRate && (
                        <div className="text-red-500 text-sm">
                          {erroObj.taxRate}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label className="font-medium text-lg ">
                      Net Sales Price:{" "}
                      <span className="text-red-500 text-sm">*</span>
                    </label>
                    <div className="">
                      <div className="flex items-center">
                        <span className="mr-2">$</span>
                        <input
                          readOnly
                          value={
                            data.buildingCost || data.taxRate
                              ? (parseFloat(data.buildingCost) || 0) +
                                (parseFloat(data.taxRate) || 0)
                              : ""
                          }
                          name="netSalesPrice"
                          onChange={(e) => {
                            handleChange(e);
                            updateData({ netSalesPrice: e.target.value });
                            setErrorObj({ ...erroObj, netSalesPrice: "" });
                          }}
                          onBlur={handleBlur}
                          placeholder="0.00"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-32"
                        />
                      </div>
                      {/* {touched.netSalesPrice &&
                        errors.netSalesPrice &&
                        !erroObj.netSalesPrice && (
                          <div className="text-red-500 flex text-sm">
                            {errors.netSalesPrice}
                          </div>
                        )}
                      {erroObj.netSalesPrice && (
                        <div className="text-red-500 flex text-center text-sm">
                          {erroObj.netSalesPrice}
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>

                <div className="text-sm space-y-1 text-center mt-10">
                  <p>
                    * Outdoor Credit Inc - Florida State Sales Tax Certificate
                    Number: 11-8017950453-6
                  </p>
                  <p>
                    * Outdoor Credit Inc - Georgia State Sales Tax Certificate
                    Number: 175975123
                  </p>
                </div>
              </div>

              <div className="border-2 border-gray-300 px-5 py-6 rounded">
                <div className="mb-6">
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">ACCEPTANCE</span>: BUYER
                      AGREES TO PURCHASE THE MERCHANDISE DESCRIBED ABOVE AT THE
                      PRICE STATED.
                    </p>
                    <p>
                      <span className="font-medium">WARRANTIES</span>: ALL
                      WARRANTIES, IF ANY, BY A MANUFACTURER OR SUPPLIER ARE
                      THEIRS, NOT THE SELLERS.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-medium text-lg mb-2 block">
                      ACCEPTED BY OUTDOOR CREDIT INC.:
                    </label>
                    <div className="grid sm:grid-cols-2 sm:gap-2 gap-4">
                      <div>
                        <Input
                          value={data.outdoorCreditSignature || ""}
                          onChange={(e) => {
                            handleChange(e);
                            updateData({
                              outdoorCreditSignature: e.target.value,
                            });
                            setErrorObj({
                              ...erroObj,
                              outdoorCreditSignature: "",
                            });
                          }}
                          name={"outdoorCreditSignature"}
                          onBlur={handleBlur}
                          placeholder="Signature"
                        />
                        <div className="flex items-center gap-2 mt-1 text-sm">
                          <label className="font-medium">Signature</label>
                        </div>

                        {touched.outdoorCreditSignature &&
                          errors.outdoorCreditSignature &&
                          !erroObj.outdoorCreditSignature && (
                            <div className="text-red-500 text-sm">
                              {"Signature is required."}
                            </div>
                          )}
                        {erroObj.outdoorCreditSignature && (
                          <div className="text-red-500 flex text-sm">
                            {erroObj.outdoorCreditSignature}
                          </div>
                        )}
                      </div>
                      {/* Outdoor Credit Date (MM/DD/YYYY) // modified by Sid */}
                      <div>
                        <div>
                          <Input
                            type="text" // modified by Sid
                            placeholder="MM/DD/YYYY" // modified by Sid
                            value={
                              showMMDD(data.outdoorCreditDate) ||
                              toMMDDYYYY(new Date())
                            } // modified by Sid
                            onChange={(e) => {
                              const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                              handleChange({
                                target: {
                                  name: "outdoorCreditDate",
                                  value: masked,
                                },
                              }); // modified by Sid
                              updateData({ outdoorCreditDate: masked }); // modified by Sid
                            }}
                          />
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <label className="font-medium">Date</label>
                          </div>

                          {touched.outdoorCreditDate &&
                            errors.outdoorCreditDate &&
                            !erroObj.outdoorCreditDate && (
                              <div className="text-red-500 text-sm">
                                {"Signature is required."}
                              </div>
                            )}
                          {erroObj.outdoorCreditDate && (
                            <div className="text-red-500 flex text-sm">
                              {erroObj.outdoorCreditDate}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-medium text-lg mb-2 block">
                      ACCEPTED BY DEALER:
                    </label>
                    <div className="grid sm:grid-cols-2 sm:gap-2 gap-4">
                      <div>
                        <Input
                          value={data.dealerSignature || ""}
                          name={"dealerSignature"}
                          onChange={(e) => {
                            handleChange(e);
                            updateData({ dealerSignature: e.target.value });
                            setErrorObj({ ...erroObj, dealerSignature: "" });
                          }}
                          onBlur={handleBlur}
                          placeholder="Dealer Signature"
                        />
                        <div className="flex items-center gap-2 mt-1 text-sm">
                          <label className="font-medium">
                            Dealer Signature
                          </label>
                        </div>
                        {touched.dealerSignature &&
                          errors.dealerSignature &&
                          !erroObj.dealerSignature && (
                            <div className="text-red-500 text-sm">
                              {"Signature is required."}
                            </div>
                          )}
                        {erroObj.dealerSignature && (
                          <div className="text-red-500 flex text-sm">
                            {erroObj.dealerSignature}
                          </div>
                        )}
                      </div>
                       {/* Dealer Date (MM/DD/YYYY) // modified by Sid */}
                       <div>
                        <div>
                          <Input
                            type="text" // modified by Sid
                            placeholder="MM/DD/YYYY" // modified by Sid
                            value={
                              showMMDD(data.dealerDate) || toMMDDYYYY(new Date())
                            } // modified by Sid
                            onChange={(e) => {
                              const masked = maskToMMDDYYYY(e.target.value); // modified by Sid
                              handleChange({
                                target: { name: "dealerDate", value: masked },
                              }); // modified by Sid
                              updateData({ dealerDate: masked }); // modified by Sid
                            }}
                          />
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <label className="font-medium">Date</label>
                          </div>
                          {touched.dealerDate &&
                            errors.dealerDate &&
                            !erroObj.dealerDate && (
                              <div className="text-red-500 text-sm">
                                {"Signature is required."}
                              </div>
                            )}
                          {erroObj.dealerDate && (
                            <div className="text-red-500 flex text-sm">
                              {erroObj.dealerDate}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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

export default Step_7;
