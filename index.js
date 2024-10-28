require("dotenv").config();
const http = require("http");
const app = require("./src/app/app");
const databaseConnection = require("./src/db/database");

databaseConnection();

const port = process.env.PORT || 3000;
const createServer = http.createServer(app);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Healthy" });
});

createServer.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
