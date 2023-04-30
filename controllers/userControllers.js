const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");

const signUp = async (req, res) => {
  // res.send('User Created!');
  try {
    const { username, emailId, password } = req.body;
    const existingUser = await User.findOne({ emailId });
    if (existingUser != null) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: "User Already Exists",
      });
    }
    const user = await User.create({ username, password, emailId });
    res.status(StatusCodes.CREATED).json({ msg: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "Something went wrong" });
  }
  
};
const deleteUser = async (req, res) => {
    res.send("User Deleted!");
  };

  const login = async (req, res) => {
    res.send("User Logged In!");
  };
module.exports = { deleteUser, login, signUp };
