const mongoose = require("mongoose");
const { DB_URI } = require("./envConfig");

const dbConnect = () => {
  mongoose.connect(
    DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, res) => {
      if (!err) {
        console.log("*** CONEXIÓN A LA DB CORRECTA ***");
      } else {
        console.log("*** CONEXIÓN A LA DB INCORRECTA ***");
      }
    }
  );
};

module.exports = { dbConnect };
