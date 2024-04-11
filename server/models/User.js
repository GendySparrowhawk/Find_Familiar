const { Schema, model } = require("mongoose");
const { hash, compare } = require("bcrypt");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      validate: {
        validator(val) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);
        },
        message() {
          return "That is not a valid email adress";
        },
      },
    },
    username: {
      type: String,
      unique: true,
      minLength: [3, "Username must be at least 3 characters"],
      maxLength: [12, "Username must be under 12 characters"],
    },
    password: {
      type: String,
      unique: true,
      minLength: [6, "Password must be 6 characters long"],
      validate: {
        validator(val) {
          return /^(?=.*[!@#$%^&*(),.?":{}|<>])/.test(val);
        },
        message:
          'Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)',
      },
    },
    profilePicture: {
      type: String,
    },
    encounters: [
      {
        type: Schema.Types.ObjectId,
        ref: "encounters",
      },
    ],
    bestiary: [
      {
        type: Schema.Types.ObjectId,
        ref: "bestiary",
      },
    ],
    campaigns: [
      {
        type: Schema.Types.ObjectId,
        ref: "campaigns",
      },
    ],
  },
  {
    timestamps: true,
    methods: {
      async validatePass(formPassword) {
        const is_valid = await compare(formPassword, this.password);

        return is_valid;
      },
    },
    toJSON: {
      transform(_, user) {
        delete user._v;
        delete user.password;
        return user;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    this.password = await hash(this.password, 10);
  }

  next();
});

const User = model("User", userSchema);

module.exports = User;
