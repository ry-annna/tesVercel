const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use(express.json());

// app.use("/", (req, res) => {
//   res.status(200).send("hello");
// });

app.listen(3000, () => {
  console.log(`server berjalan diport`);
});

module.exports = app;
