const mongoose = require("mongoose");
const { DB_URI } = require("./envConfig");

const dbConnect = () => {
  mongoose.connect(
    DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
      if (err) {
        console.error("Error de conexión:", err);
      } else {
        console.log("Conexión establecida correctamente.");
      }
    }
  );
};

module.exports = { dbConnect };
