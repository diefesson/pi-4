const express = require("express");
const app = express();
var cors = require('cors');
require("dotenv/config");
const port = 3000;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const index = require("./routes/index.js");
const players = require("./routes/player-route.js");
const questions = require("./routes/questions-route.js");
const statistics = require("./routes/statistics-route.js");
const analysis = require("./routes/analysis-route.js");

app.use("/", index);
app.use("/players", players);
app.use("/questions", questions);
app.use("/statistics", statistics);
app.use("/analysis", analysis);

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

// Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
