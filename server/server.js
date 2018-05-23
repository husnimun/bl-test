const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("api"));

app.listen(3001, () => console.log("Example app listening on port 3001!"));
