const express = require("express");
const app = express();
const path = require("path");
const utils = require("./lib/utils");

const PORT = process.env.PORT || 3000;

app.get("/ping", (_, res) => res.send("ping"));

app.get("/generatePair", (_, res) => {
  const filePath = path.resolve("./creds") + utils.computeRandomString(40);
  res.json({ filePath: filePath });
});

app.listen(PORT, () => {
  console.log(`connection established on port ${PORT}`);
});
