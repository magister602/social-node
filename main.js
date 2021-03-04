const express = require("express");
const app = express();

const PORT = 80;

app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

app.get("/", (req, res) => {
    res.render("index", { title: "Hello world!" });
});