const axios = require("axios");
function herokuKeepAlive(url) {
  setInterval(async () => {
    try {
      await axios.get(url + "/ping");
      console.log(
        `[${new Date().toISOString()}] successfull ping to heroku service`
      );
    } catch (err) {
      console.log(
        `[${new Date().toISOString()}] Error in pinging the heroku solana service`
      );
      console.log(err);
    }
  }, 60 * 60 * 1000);
}

function computeRandomString(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = { herokuKeepAlive, computeRandomString };
