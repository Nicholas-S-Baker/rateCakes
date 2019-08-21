const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.connect("mongodb://localhost/cakes", { //...host:25017/cakes this is mongo port 
  useNewUrlParser: true,
});

require("./server/routes/route")(app);
app.listen(8000, () => console.log("PORT 8000 - RATE CAKES"));