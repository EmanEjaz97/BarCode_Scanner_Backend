const express = require("express");
const request = require("request");
const connectDB = require("./config/db");
const Barcode = require("./models/Barcode");
const app = express();

require("dotenv").config();

connectDB();

const PORT = process.env.PORT;
const api_key = process.env.API_KEY;

app.get("/api", async (req, res) => {
  const barcodeNumber = req.query.code;
  const url = `http://api.ean-search.org/api?token=${api_key}&op=barcode-lookup&format=json&ean=${barcodeNumber}`;

  request({ url, json: true }, async (error, response) => {
    if (error) return res.send("Unable to fetch data!");

    const { ean, name, categoryId, categoryName } = response.body[0];

    try {
      let barcode = await Barcode.findOne({ ean });
      if (barcode) {
        return res.status(400).json({ msg: "Entry already exists!" });
      }

      barcode = new Barcode({
        ean,
        name,
        categoryId,
        categoryName,
      });

      await barcode.save();
      //   res.send("Entry added!");
      res.status(200).send(response.body[0]);
    } catch (error) {
      res.status(500).send("Server error!");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}!`);
});
