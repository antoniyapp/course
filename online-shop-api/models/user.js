const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: [true, "Username is mandatory"],
        trim: true
      },
      email: {
        type: String,
        required: [true, "Email is mandatory"],
        trim: true
      },
      type: {
        type: String,
        trim: true,
        enum: {
          values: ["user", "admin"]
        },
        default: "user"
      },
      firstname: {
        type: String,
        required: false,
        trim: true
      },
      lastname: {
        type: String,
        required: false,
        trim: true
      },
      adress: {
        type: String,
        required: false,
        trim: true
      },
      phoneNumber: {
          type: String,
          required: false,
          trim: true
      }
    }
  );
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;