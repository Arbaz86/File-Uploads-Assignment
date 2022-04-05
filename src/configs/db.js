const mongoose = require("mongoose");

module.exports = () => {
  module.exports = () => {
    return mongoose.connect("mongodb://localhost:27017/File-uploads", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  };
};
