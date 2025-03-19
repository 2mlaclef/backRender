const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://oumar:KAM8z9t5bf5NqGf@cluster0.mongodb.net/etudiants?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
