const axios = require("axios");
function herokuKeepAlive(url) {
  setInterval(async () => {
    try {
      await axios.get(url);
      console.log(
        `[${new Date().toISOString()}] successfull ping to heroku service`
      );
    } catch (err) {
      console.log(
        `[${new Date().toISOString()}] Error in pinging the heroku solana service`
      );
      console.log(err);
    }
  }, 5 * 60 * 1000);
}

module.exports = herokuKeepAlive;
