const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/form", (req, res) => {
  const data = {
    input1: "job_email",
    input2: "password",
  };

  res.sendFile(path.join(__dirname, "build", "index.html"));
  // res.json(data);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
