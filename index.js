const express = require("express");
const app = express();
const path = require("path");
const utils = require("./lib/utils");
const shell = require("shelljs");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

app.get("/ping", (_, res) => res.send("ping"));

app.get("/generatePair", (_, res) => {
  const filePath =
    path.resolve("./creds") + "/" + utils.computeRandomString(40);
  const { stdout } = shell.exec(
    `solana-keygen new --no-bip39-passphrase -o ${filePath}`
  );
  const publicKey = stdout.split("\n")[3].split(" ")[1];
  fs.readFile(filePath, "utf8", (err, privateKey) => {
    process.nextTick(() => {
      fs.unlink(filePath, (err) => {
        if (err) console.log(err);
      });
    });
    if (err) {
      return res
        .status(500)
        .json({ statusCode: 500, error: err.message, status: "failure" });
    }
    return res.status(200).json({
      statusCode: 200,
      status: "success",
      result: { publicKey, privateKey },
    });
  });
});

app.listen(PORT, () => {
  console.log(`connection established on port ${PORT}`);
});
