// Imports

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const { auth } = require("express-openid-connect");

const app = express();

app.use(
	auth({
		issuerBaseURL: "https://booking-sys.eu.auth0.com",
		baseURL: "http://localhost:3000",
		clientID: "e5i7jdsX9dVVyXhloH5aiZj5kdgdN1e2",
		secret: "rejfugenrfguijenuige4rhgh48ue4hu344bu",
	})
);

// Configuration

dotenv.config({ path: ".env" });
const PORT = process.env.PORT;

// Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// Routes

app.use("/", require("./routes/index"));
app.use("/bookings", require("./routes/bookings"));
app.use("/rooms", require("./routes/rooms"));

// Listening for requests

app.listen(PORT, () => {
	console.log(chalk.green(`Server starting on http://localhost:${PORT}`));
});
