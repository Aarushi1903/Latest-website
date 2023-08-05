require('dotenv').config()
var express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts') 
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const session = require('express-session')
const flash  = require('express-flash')
//Database connection: 

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://0.0.0.0/smart-assissted-trolley", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.error("Error connecting to database:", err.message);
  }
}
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    // store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))

app.use((req, res, next) => {
    res.locals.session = req.session
    next()
})
connectToDatabase();



//set Template engine
app.use(expressLayout)
app.use(express.json());
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

//ASSETS
app.use(express.static('assets'))
module.exports = app;
require('./routes/web')(app)