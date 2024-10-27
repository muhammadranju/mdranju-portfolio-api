const http = require("http");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const createServer = http.createServer(app);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Healthy" });
});
createServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
