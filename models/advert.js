import mongoose, { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";



const advertSchema = new Schema({
    title: {type: string, required: true},
    location: {type: string, required: true},
    description: {type: string, required: true},
    image: {type: string, required: true},
    price: {type: string, required: true},
    category: {type: string, required: true}
}, {
    timestamps: true
});


advertSchema.index({ name: 'text', title: 'text'});


advertSchema.plugin(toJSON)


export const AdvertModel = model('Advert', advertSchema);