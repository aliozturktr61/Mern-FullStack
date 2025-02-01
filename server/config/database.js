const mongoose = require("mongoose");

const database = () => {


    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Veri tabanı ile bağlantı kuruldu"))
    .catch((err) => console.log("Veri tabanına bağlanamadık", err));
};

module.exports = database;
