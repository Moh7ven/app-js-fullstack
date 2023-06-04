const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likers: {
      type: [String], //le nom de chaque personne qui a liké le post
    },
  },
  {
    timestamps: true, //Pour ajouter la date et l'heure du post
  }
);

module.exports = mongoose.model("post", postSchema);
