import mongoose, { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";



const advertSchema = new Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Category: {type: String, required: true},
    Price: {type: String, required: true},
    Location: {type: String, required: true},
    Image: {type: String, required: true},
    vendor: {type: Types.ObjectId, required: true, ref: 'Vendor'}
}, {
    timestamps: true
});


advertSchema.index({ name: 'text', title: 'text'});


advertSchema.plugin(toJSON)


export const AdvertModel = model('Advert', advertSchema);