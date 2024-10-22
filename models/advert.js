import mongoose, { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";



const advertSchema = new Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: String, required: true},
    category: {type: String, required: true}
}, {
    timestamps: true
});


advertSchema.index({ name: 'text', title: 'text'});


advertSchema.plugin(toJSON)


export const AdvertModel = model('Advert', advertSchema);