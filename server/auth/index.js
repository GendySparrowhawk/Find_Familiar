const { sign, verify } = require("jsonwebtoken");

const User = require("../models/User");

async function creatToken(user_id) {
  try {
    const token = await sign({ user_id }, process.env.JWT_SECRET);

    return token;
  } catch (err) {
    console.log("jwt failed to create token", err.message);
  }
}

async function authenticate({ req, res }) {
  const token = req.cookie.token;

  if (!token) return { res };

  try {
    const data = await verify(token, process.env.JWT_SECRET, {
      maxAge: "8hr",
    });
    const user = await User.findById(data.user_id).populate("wishlists");

    return { user, res };
  } catch (err) {
    return { res };
  }
}

module.exports = { creatToken, authenticate };
