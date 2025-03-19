const mongoose = require("mongoose");

// Fonction pour connecter à MongoDB
const connectDB = async () => {
  try {
    // Connexion à la base de données
    await mongoose.connect(
      "mongodb+srv://atlas-sample-dataset-load-67dac2347e93545ac1542888:KAM8z9t5bf5NqGf@cluster0.y838u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
