const helmet = require('helmet');
const express = require('express');
const app = express();
require('./data/db')
const port = 3000;
const routes = require('./route/route');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use('/api' , routes);
app.all("*", (req, res, next) => {
    next(new Error(`No route found`));
  });

app.listen(port, ()=>{
    console.log(`Listening on: ${port}`);
})