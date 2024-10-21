import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    username: {type: String, required: true},
    location: { type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true
}
)

userSchema.plugin(toJSON);
export const UserModel = model('User', userSchema);