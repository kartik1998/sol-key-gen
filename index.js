const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ping", (_, res) => res.send("ping"));

app.listen(PORT, () => {
  console.log(`connection established on port ${PORT}`);
});
