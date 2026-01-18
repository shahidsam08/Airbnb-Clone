import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  hostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  homeImage: {
    LivingRoomURL: [
      {
        type: String,
        required: true,
      },
    ],
    kitchenURL: [
      {
        type: String,
        required: true,
      },
    ],
    bedroomURL : [
      {
        type: String,
        required: true,
      },
    ],
    bathroomURL : [
      {
        type: String,
        required: true,
      },
    ],
    balconyURL : [
      {
        type: String,
        required: true,
      },
    ],
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  listingType: {
    type: String,
    enum: ["Apartment", "Flat"],
    default: "Flat",
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  Street: {
    type: String,
    required: true,
    trim: true,
  },
  placeOffer: {
    bathroom: {
      shampoo: Boolean,
      hotwater: Boolean,
      showerGel: Boolean,
    },
    bedroom: {
      hangers: Boolean,
      clothestorage: Boolean,
      bedLinen: Boolean,
    },
    entertainment: {
      tv: Boolean,
      booksreadingMaterials: Boolean,
    },
    heatingCooling: {
      airconditioning: Boolean,
      ceilingFan: Boolean,
      heating: Boolean,
    },
    InternetandOffice: {
      wifi: Boolean,
    },
    KitchenandDining: {
      kitchen: Boolean,
      cookingBasics: Boolean,
      minifridge: Boolean,
      kettle: Boolean,
      wineGlass: Boolean,
    },
    parking: {
      Freeparking: Boolean,
      streetparking: Boolean,
    },
    services: {
      petsAllowed: Boolean,
      selfcheckIn: Boolean,
      cleaning: Boolean,
      washingMachine: Boolean,
      dryer: Boolean,
      smokeAlarm: Boolean,
    },
  },
  reviews: [
    {
      message: String,
      star: Float16Array,
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
  ],
});

const Listing = mongoose.model("Listing", ListingSchema);

export default Listing;

//  📸 Photos

// 🏠 Property details

// 📍 Location info

// 👤 Host identity data

// 💳 Payment details

// 💬 Messages & reviews

// 📱 Device/usage data
