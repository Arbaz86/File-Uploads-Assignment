const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("path", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).send({ users: users });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});9

router.post("/", async (req, res) => {
  try {
    const user = User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: req.file.path,
    });

    return res.status(200).send({ user: user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
