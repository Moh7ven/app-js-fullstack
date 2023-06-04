const express = require("express");
const { use } = require("./routes/post.routes");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//Connexion à la base de donnée

connectDB();

const app = express();

// app.get("/post", (req, res) => {
//   res.json({ message: "Voici les données" });
// });

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//Pour lancer le serveur
app.listen(port, () =>
  console.log("le server a démarré sur le port : " + port)
);
