const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

// fix pour use mongdb driver instead moongoose - Sinon cela affiche warning mongoose
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// gestion cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

// Connexion à la BDD
const dbPass = process.env.DB_PASSWORD;
const dbUrl = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const mongoCredentials = "mongodb+srv://" + dbUser + ":" + dbPass + dbUrl + dbName;
mongoose
  .connect(mongoCredentials, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !!!"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true, limit: "2b" }));
app.use("/images", express.static(path.join(__dirname, "images"))); // définition du répertoire statique d'upload d'images

// import des routes
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");

// ajout des routes dans l'app
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;
