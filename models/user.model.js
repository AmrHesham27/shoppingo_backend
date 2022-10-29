const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      minlength: 6,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) throw new Error("invalid email format");
      },
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    name: {
      type: String,
      trim: true,
      minlength: 6,
    },
    phone: {
      type: String,
      trim: true,
      minlength: 8,
    },
    gender: {
      enum: ["male", "female", "other"],
    },
    birthDate: {
      type: Date,
    },
    location: {
      type: String,
      trim: true,
      minlength: 10,
    },
    ordersIds: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

// do not send secret data to user
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  delete user.tokens;
  return user;
};

userSchema.pre("save", async function () {
  const user = this;
  if (user.isModified("password"))
    user.password = await bcryptjs.hash(user.password, 12);
});

userSchema.statics.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("invalid user email");
  const isValid = await bcryptjs.compare(password, user.password);
  if (!isValid) throw new Error("invalid password");
  return user;
};

userSchema.methods.generateToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "2h",
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
