/// NoaiGim0YD51Nkbq

const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://pavlo:NoaiGim0YD51Nkbq@cluster0.wqlhazs.mongodb.net/books_db?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
    .then(() => console.log("Database connect"))
    .catch((err) => console.log(err.message))