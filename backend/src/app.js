const epxress = require("express");
const cors = require("cors");
const app = epxress();
const { dbConnect } = require("../config/dbConfig");
const { PORT } = require("../config/envConfig");

app.use(cors());
app.use(epxress.json());

dbConnect();
app.listen(PORT, () => {
  console.log("API lista por el puerto ", PORT);
});
