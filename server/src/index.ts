import express from "express";
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Pay Me");
});

app.listen(port);

console.log(`[api]: http://localhost:${port}`);
