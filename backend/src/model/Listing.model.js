import mongoose from "mongoose"



const ListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    url: String,
    public_id: String,
  },
  price: {
    type: Number,
    required: true,
    trim: true
  }, 
  city: {
    type: String, 
    required: true,
    trim: true
  },
  
})

const Listing = mongoose.model("Listing", ListingSchema)


export default Listing;