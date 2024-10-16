import { Schema, model } from "mongoose";



const vendorSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true }

}, {
    timestamps: true
});



export const VendorModel = model('Vendor', vendorSchema);