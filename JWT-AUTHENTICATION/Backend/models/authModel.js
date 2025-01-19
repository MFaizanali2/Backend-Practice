import mongoose from "mongoose";

// Define the schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String, // Capital "S" for the type "String"
        required: true,
    },
    password: {
        type: String, // Capital "S" for the type "String"
        required: true,
    },
    email: {
        type: String, // Capital "S" for the type "String"
        required: true,
    },
    role: {
        type: String, // Capital "S" for the type "String"
        required: true,
    },
    isVerified: {
        type: Boolean, // This is correct
        default: false, // This is also correct
    },
});

// Export the model
export const User = mongoose.model("User", UserSchema);
