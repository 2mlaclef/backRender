const mongoose = require("mongoose");

// Fonction pour connecter à MongoDB
const connectDB = async () => {
  try {
    // Connexion à la base de données
    await mongoose.connect(
      "mongodb+srv://oumar:0987654321Aa@cluster0.y838u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connecté");
  } catch (error) {
    // Gestion des erreurs
    console.error("Erreur de connexion à MongoDB :", error);
    process.exit(1); // Quitte le processus en cas d'échec
  }
};

// Exportation de la fonction
module.exports = connectDB;
