const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: [true, "Username required!"],
        trim: true
      },
      email: {
        type: String,
        required: [true, "Email required!"],
        trim: true
      },
      type: {
        type: String,
        trim: true,
        enum: {
          values: ["Active", "Inactive"]
        },
        default: "Active"
      },
      firstname: {
        type: String,
        required: [false, "Author is required!"],
        trim: true
      },
      lastname: {
        type: String,
        required: [false, "Author is required!"],
        trim: true
      },
      adress: {
        type: String,
        required: [false, "Author is required!"],
        trim: true
      }
    }
  );
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;