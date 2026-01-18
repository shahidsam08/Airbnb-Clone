import * as yup from "yup";

export const CreateListing = yup.object({
  title: yup
    .string()
    .min(5, "Must greater than 5 character")
    .max(25, "Title should be 25 character long")
    .required("Title is required field!"),
  description: yup
    .string()
    .min(50, "Description should be 50 character long")
    .max(200, "Maximum 200 character long")
    .required("Description is required!"),
  homeImage: yup.object({
    LivingRoomURL: yup
      .array()
      .min(1, "Minimum One image is required!")
      .required("Minimum One living Room Image is required"),
    KitchenURL: yup
      .array()
      .min(1, "Minimum one kitchen image is required!")
      .required("Minimum One living Room Image is required"),
    bedroomURL: yup
      .array()
      .min(1, "Minimum one bedroom image is required!")
      .required("Minimum One living Room Image is required"),
    bathroomURL: yup
      .array()
      .min(1, "Minimum one bathroom image is required!")
      .required("Minimum One living Room Image is required"),
    balconyURL: yup
      .array()
      .min(1, "Minimum one bathroom image is required!")
      .required("Minimum One living Room Image is required"),
  }),
  price: yup.number().required("Price must be required!"),
  city: yup.string().required("City name is required!"),
  street: yup.string().required("Street name is required!"),
  placeoffer: yup.object({
    bathroom: yup.object({
      shampoo: yup.boolean().required("select yes or no !"),
      hotwater: yup.boolean().required("select yes or no !"),
      showerGel: yup.boolean().required("select yes or no !"),
    }),
    bedroom: yup.object({
      hangers: yup.boolean().required("select yes or no !"),
      clothestorage: yup.boolean().required("select yes or no !"),
      bedline: yup.boolean().required("select yes or no !"),
    }),
    entertainment: yup.object({
      tv: yup.boolean().required("select yes or no !"),
      booksreadingMaterials: yup.boolean().required("select yes or no !"),
    }),
    heatingCooling: yup.object({
      airconditioning: yup.boolean().required("select yes or no !"),
      ceilingFan: yup.boolean().required("select yes or no !"),
      heating: yup.boolean().required("select yes or no !"),
    }),
    InternetandOffice: yup.object({
      wifi: yup.boolean().required("select yes or no !"),
    }),
    KitchenandDining: yup.object({
      kitchen: yup.boolean().required("select yes or no !"),
      cookingBasics: yup.boolean().required("select yes or no !"),
      minifridge: yup.boolean().required("select yes or no !"),
      kettle: yup.boolean().required("select yes or no !"),
      wineGlass: yup.boolean().required("select yes or no !"),
    }),
    parking: yup.object({
      Freeparking: yup.boolean().required("select yes or no !"),
      streetparking: yup.boolean().required("select yes or no !"),
    }),
    services: yup.object({
      petsAllowed: yup.boolean().required("select yes or no !"),
      selfcheckIn: yup.boolean().required("select yes or no !"),
      cleaning: yup.boolean().required("select yes or no !"),
      washingMachine: yup.boolean().required("select yes or no !"),
      dryer: yup.boolean().required("select yes or no !"),
      smokeAlarm: yup.boolean().required("select yes or no !"),
    }),
  }),
});
