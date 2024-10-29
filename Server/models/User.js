import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: [String], // Changed to an array of strings
        required: true,
    },
});

const User = mongoose.model('User', userSchema);
export default User;