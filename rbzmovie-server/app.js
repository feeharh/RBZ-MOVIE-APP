const express = require('express');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var cors = require('cors')
//console.log(process.env);
//const config = require("./config/key");
const port = process.env.port || 4600;
const app = express();

var distDir = __dirname + "../rbzmovie-frontend/dist";
app.use(express.static(distDir));

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/evoting-app')));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/user'));
app.use('/api/favorites', require('./routes/favorite'));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.listen(port, () => {
    console.log(`app is running on port: ${port}`)
  })

}).catch((err) => {
  console.log(err)
})

