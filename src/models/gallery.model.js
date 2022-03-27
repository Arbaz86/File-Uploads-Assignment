const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    user_pictures: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("gallery", gallerySchema);
