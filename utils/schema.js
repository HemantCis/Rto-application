import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  // Buyer Info
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  ssn: Yup.string()
    .required("SSN is required"),
  firstStreet: Yup.string().required("Address is required"),
  secondStreet: Yup.string().nullable(),
  city: Yup.string().required("City is required"),
  zip: Yup.string().required("ZIP is required").matches(/^\d{5}$/, "ZIP must be exactly 5 digits"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),

  // Co-Buyer Info
  coFirstName: Yup.string().nullable(),
  coLastName: Yup.string().nullable(),
  coSsn: Yup.string().nullable(),
  cofirstStreet: Yup.string().nullable(),
  coSecondStreet: Yup.string().nullable(),
  coCity: Yup.string().nullable(),
  coState: Yup.string().nullable(),
  coZip: Yup.string().nullable(),
  coCountry: Yup.string().nullable(),

  // Building Info
  serialNumber: Yup.string().required("Serial number is required"),
  buildingType: Yup.string().required("Building type is required"),
  manufacturer: Yup.string().required("Manufacturer is required"),
  buildingColor: Yup.string().required("Building color is required"),
  buildingSize: Yup.string().required("Building size is required"),
  newOrUsed: Yup.string().oneOf(["new", "used"]).required("Required"),

  // Payment Info
  // buildingCost: Yup.number()
  //   .typeError("Building cost must be a number")
  //   .min(0, "Value cannot be negative")
  //   .required("Building cost is required"),
  // term: Yup.number()
  //   .typeError("Term must be a number")
  //   .min(1, "Term cannot be 0")
  //   .required("Term is required"),
  // basePayment: Yup.number()
  //   .typeError("Base payment must be a number")
  //   .min(0, "Value cannot be negative")
  //   .required("Base payment is required"),
  // totalPayment: Yup.number()
  //   .typeError("Total payment must be a number")
  //   .min(0, "Value cannot be negative")
  //   .required("Total payment is required"),
  // paymentAmount90: Yup.string().required("Payment amount is required"),
  // capCostReduction: Yup.number()
  //   .typeError("Cap. Cost Reduction must be a number")
  //   .min(0, "Value cannot be negative")
  //   .required("Cap. Cost Reduction is required"),
  // salesTaxCCR: Yup.number()
  //   .typeError("Sales Tax on CCR must be a number")
  //   .min(0, "Value cannot be negative")
  //   .required("Sales Tax on CCR is required"),
  // totalDueUpfront: Yup.number()
  //   .typeError("Total Due Upfront must be a number")
  //   .min(0, "Value cannot be negative")
  //   .required("Total Due Upfront is required"),
  // additionalCashDown: Yup.number()
  //   .typeError("Additional Cash Down must be a number")
  //   .min(0, "Value cannot be negative")
  //   .required("Additional Cash Down is required"),
});


export const step_2_validationSchema = Yup.object().shape({
  // Buyer
  firstName: Yup.string().required("Buyer name is required"),
  ssn: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN format (000-00-0000)")
    .required("SSN is required"),
  // phoneType: Yup.string().required("Phone type is required"),
  buyerPhone: Yup.string().required("Phone number is required"),
  firstStreet: Yup.string().required("Mailing address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  buyerZip: Yup.string()
    .required("ZIP is required").matches(/^\d{5}$/, "ZIP must be exactly 5 digits"),
  buyerYearsAtAddress: Yup.string().required("Years at address is required"),

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
  mortageCompany: Yup.string().required("Mortgage company is required"),

  name1: Yup.string().required("Reference name is required"),
  relationship1: Yup.string().required("Relationship is required"),
  phone1: Yup.string().required("Phone is required"),

  name2: Yup.string().required("Reference name is required"),
  relationship2: Yup.string().required("Relationship is required"),
  phone2: Yup.string().required("Phone is required"),

  // Employment info
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  employer: Yup.string().required("Employer name is required"),
  employerLength: Yup.string().required("Length is required"),
  employerPhone: Yup.string().required("Phone is required"),

  // coEmployer: Yup.string().required("Co-Employer name is required"),
  // coEmployerLength: Yup.string().required("Length is required"),
  // coEmployerPhone: Yup.string()
  //   .matches(/^\(\d{3}\)\s\d{3}-\d{4}$/, "Invalid phone format")
  //   .required("Phone is required"),

  // Signatures
  // buyerSigned: Yup.string().required("Buyer signature is required"),
  // buyerDate: Yup.date().required("Date is required"),
  // coBuyerSigned: Yup.string().required("Co-Buyer signature is required"),
  // coBuyerDate: Yup.date().required("Date is required"),
});


export const step_3_validationSchema = Yup.object().shape({
  date: Yup.date()
    .required("Date is required")
    .typeError("Invalid date format"),
  
  // agreementNumber: Yup.string()
  //   .required("Agreement Number is required")
  //   .matches(/^[A-Za-z0-9-]+$/, "Only letters, numbers, and dashes allowed"),
  
 // Removed stray lastName validation to avoid blocking submit; you already validate `lessee` below // modified by Sid
  // lastName: Yup.string()
  //   .required("Lessee name is required")
  //   .min(2, "Name must be at least 2 characters"),
  
  address: Yup.string().required("Address is required"),
  
  city: Yup.string().required("City is required"),
  
  state: Yup.string().required("State is required"),
  
  zip: Yup.string()
    .required("ZIP code is required").matches(/^\d{5}$/, "ZIP must be exactly 5 digits"),
  
  // months: Yup.string().required("Month selection is required"),
  
  // dueDate: Yup.string()
  //   .required("Due date is required")
  //   .matches(/^\d+$/, "Must be a valid day (e.g., 15)"),
  
  serialNumber: Yup.string().required("Serial number is required"),
  
  manufacturer: Yup.string().required("Manufacturer is required"),
  
  sizeColor: Yup.string().required("Size/Color is required"),
  
  newOrUsed: Yup.string().required("Condition is required"),
  
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
  
  termAgreement: Yup.string().required("Term Agreement field is required"),
  
  authorizedAgent: Yup.string().required("Authorized Agent is required"),
  
  // lessee: Yup.string().required("Lessee name is required"),
  
  // coLessee: Yup.string().required("Co-Lessee name is required"),
  
  // agreementNumber2: Yup.string()
  //   .required("Agreement Number confirmation is required")
  //   .matches(/^[A-Za-z0-9-]+$/, "Only letters, numbers, and dashes allowed"),
});


export const step_4_validationSchema = Yup.object().shape({
  dayOfMonth: Yup.number()
    .typeError("Day must be a number")
    .required("Day is required")
    .min(1, "Day must be between 1 and 31")
    .max(31, "Day must be between 1 and 31"),

  month: Yup.string()
    .required("Month is required")
    .oneOf(
      [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ],
      "Invalid month selected"
    ),

  year: Yup.string()
    .required("Year is required")
    .matches(/^\d{2,4}$/, "Enter a valid year (e.g., 25 or 2025)"),

    mortageCompany: Yup.string()
    .required("Mortgagee name is required")
    .min(2, "Must be at least 2 characters"),

    mortgageeAddress: Yup.string().nullable().notRequired(), // modified by Sid

  buyerPhone: Yup.string()
    .required("Phone number is required"),

  firstName: Yup.string()
    .required("Lessee name is required")
    .min(2, "Must be at least 2 characters"),

    manufacturer: Yup.string()
    .required("Building manufacturer is required"),

  serialNumber: Yup.string()
    .required("Serial number is required"),

  buildingSize: Yup.string()
    .required("Size is required"),

  // signedBy: Yup.string()
  //   .required("Signed by is required"),

  // signature: Yup.string()
  //   .required("Signature is required"),

  its: Yup.string()
    .required("ITS field is required"),

  // signerTitle: Yup.string()
  //   .required("Signer title is required"),
});

export const step_5_validationSchema = Yup.object().shape({
  // buyerSignature: Yup.mixed()
  //   .required("Buyer signature is required."),
  // buyerDate: Yup.date()
  //   .required("Buyer date is required.")
  //   .typeError("Invalid date format."),
  // coBuyerSignature: Yup.mixed()
  //   .required("Co-buyer signature is required."),
  // coBuyerDate: Yup.date()
  //   .required("Co-buyer date is required.")
  //   .typeError("Invalid date format."),
});


export const step_6_validationSchema = Yup.object().shape({
  totalPayment: Yup.number()
    .typeError("Monthly payment must be a valid number.")
    .positive("Monthly payment must be greater than 0.")
    .required("Monthly payment is required."),

  // easyPayBuyerSignature: Yup.string()
  //   .required("Buyer signature is required."),

  easyPayCoBuyerDate: Yup.date()
    .required("Date is required.")
    .typeError("Invalid date format."),

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

  declinationBuyerDate: Yup.date()
    .required("Date is required.")
    .typeError("Invalid date format."),

  declinationCoBuyerSignature: Yup.mixed().nullable(),

  // declinationCoBuyerDate: Yup.date()
  //   .required("Date is required.")
  //   .typeError("Invalid date format."),
});


export const step_7_validationSchema = Yup.object().shape({
  // Seller Section
  sellerName: Yup.string()
    .required("Seller name is required.")
    .max(100, "Seller name cannot exceed 100 characters."),
  purchaseOrderDate: Yup.date()
    .required("Purchase order date is required.")
    .max(new Date(), "Date cannot be in the future."),

  // Manufacturer Section
  manufacturer: Yup.string()
    .required("Manufacturer is required.")
    .max(100, "Manufacturer name cannot exceed 100 characters."),
  buildingSize: Yup.string()
    .required("Size is required.")
    .max(50, "Size cannot exceed 50 characters."),
  buildingColor: Yup.string()
    .required("Color is required.")
    .max(50, "Color cannot exceed 50 characters."),
  serialNumber: Yup.string()
    .required("Serial number is required.")
    .max(100, "Serial number cannot exceed 100 characters."),

  // Pricing Section
  buildingCost: Yup.number()
    .typeError("Enter a valid amount.")
    .required("Sales price is required.")
    .min(0, "Sales price cannot be negative."),
  // taxRate: Yup.string().required("Sale tax is required.")
  //   .nullable()
  //   .max(20, "Sales tax field cannot exceed 20 characters."),
  // netSalesPrice: Yup.number()
  //   .typeError("Enter a valid amount.")
  //   .required("Net sales price is required.")
  //   .min(0, "Net sales price cannot be negative."),

  // Acceptance Section
  // outdoorCreditSignature: Yup.string().required("Outdoor Credit signature is required."),
  outdoorCreditDate: Yup.date()
    .required("Outdoor Credit date is required.")
    .max(new Date(), "Date cannot be in the future."),
  // dealerSignature: Yup.string().required("Dealer signature is required."),
  dealerDate: Yup.date()
    .required("Dealer date is required.")
    .max(new Date(), "Date cannot be in the future."),
});


export const step_8_validationSchema = Yup.object().shape({
  buyerName: Yup.string()
    .required("Buyer name is required.")
    .max(100, "Name cannot exceed 100 characters."),
  buildingType: Yup.string()
    .required("Building type is required.")
    .max(100, "Building type cannot exceed 100 characters."),
    serialNumber: Yup.string()
    .required("Building serial number is required.")
    .max(50, "Serial number cannot exceed 50 characters."),
  deliveryDate: Yup.date()
    .required("Delivery date is required.")
    .typeError("Invalid date format."),
  // signature: Yup.string()
  //   .required("Signature is required.")
  //   .max(100, "Signature cannot exceed 100 characters."),
  directions: Yup.string()
    .required("Please provide directions to the property.")
    .max(1000, "Directions cannot exceed 1000 characters."),
});


