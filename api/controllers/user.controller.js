import User from "../model/user.schema.js";

export const SignUp = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });
  await newUser.save();
  res.json("SignUp successfully");
};
