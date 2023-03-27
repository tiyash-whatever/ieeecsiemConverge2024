import mongoose from "mongoose";
import moment from "moment-timezone";

// const dateIndia = moment.tz("Asia/Kolkata").format('YYYY-MM-DD HH:mm ZZ');
// console.log(dateIndia);
export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true,
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    fullname: {
        type: String, default: function () {
            const fullname = this.firstName + " " + this.lastName;
            return fullname;
        }
    },
    mobile: {
        type: Number
    },
    institute: {
        type: String
    },
    profile: { type: String },
    tid: { type: String },
    points: { type: Number },
    time: { type: String },
    size: { type: String },
    referredby: { type: String }

});

export default mongoose.model.Users || mongoose.model('User', UserSchema);