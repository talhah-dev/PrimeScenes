import { Contact } from "@/types/contact";
import { Schema, model, models } from "mongoose";

const ContactSchema: Schema<Contact> = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        company: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        projectType: {
            type: String,
            required: true,
            trim: true,
        },
        projectDetails: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export const ContactModel = models.Contact || model<Contact>("Contact", ContactSchema);