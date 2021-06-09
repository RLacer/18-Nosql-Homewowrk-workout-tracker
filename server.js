const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => {console.log("app running on port on 3000")});

