import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import asyncHandler from "express-async-handler"

const ImportData = express.Router();

ImportData.post("/user", asyncHandler(async (req,res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

export default ImportData;

