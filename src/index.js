const express = require("express");
const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");
const galleryController = require("./models/gallery.model");

app.use("/users", userController);
app.use("/gallery", galleryController);

module.exports = app;
