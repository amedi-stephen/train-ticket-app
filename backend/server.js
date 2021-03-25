const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/traindb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", () => console.log("Connection to the db successful"));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));