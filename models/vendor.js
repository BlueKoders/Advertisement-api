import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";




const vendorSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    location: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true },
}, {
    timestamps: true
});

vendorSchema.plugin(toJSON);

export const VendorModel = model('Vendor', vendorSchema);