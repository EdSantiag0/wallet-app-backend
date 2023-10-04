const express = require("express");
const db = require("./db");
const routesCategories = require("./routes/categories");
const routesUser = require("./routes/users");
const routesFinances = require("./routes/finances");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá, esta é a aplicação Wallet App!");
});

app.use("/categories", routesCategories);
app.use("/users", routesUser);
app.use("/finances", routesFinances);

app.listen(port, () => {
  db.connect()
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      throw new Error(error);
    });
  console.log(`Example app listening on port ${port}`);
});
