//imports
const express = require('express');
const helmet = require('helmet');
require('./data/db')
const port = 4000;
const routes = require('./route/route');

//instantiation
const app = express();

//configurations
app.set('strict routing', true);
app.set('case sensitive routing',true);
app.set('x-powered-by',false);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use('/api' , routes);
app.all("*", (req, res, next) => {
    next(new Error(`No route found`));
});

//error handler
app.use(function(err,req,res,next){
  res.json({
    msg:err.message
  })
})

app.listen(port, ()=>{
    console.log(`Listening on: ${port}`);
})