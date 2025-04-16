const express = require('express');
const BasicRouter = require('./routes/Basic.router');
const bodyParser = require('body-parser');
const path = require('path');

const expressLayouts = require('express-ejs-layouts');
const startDBServer = require('./config/db');
const startApp = require('./config/app');

require('dotenv').config();

const app = express();

// view engine - to render html
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layouts/main')

// static
app.use(express.static(path.join(__dirname, 'public')));

// parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routing
app.use(BasicRouter);

// 404
app.use((req, res)=>{
    res.render("404");
})


console.log("Express APP.")
const start = async () => {
    await startDBServer();
    await startApp(app);
}
start();