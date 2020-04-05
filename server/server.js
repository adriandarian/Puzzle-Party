const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const chalk = require("chalk");

const app = express();
const connected = chalk.bold.cyan;
const warning = chalk.bold.yellow;
const termination = chalk.bold.red;

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

app.get("*", (req, res) => {
  res.status(404).send("404 Error: Page Not Found!");
});

app.listen(process.env.PORT || 3001, process.env.HOST || "0.0.0.0", () => {
  console.log(
    connected(
      `App listening on port ${process.env.PORT || 3000} in ${
        app.settings.env
      } mode!`
    )
  );
});

process.on("warning", error => {
  console.warn(`Express connection has occurred ${error} error!`);
});

process.on("exit", code => {
  console.error(termination(`About to exit with code: ${code}`));
  process.exit(0);
});
