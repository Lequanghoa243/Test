const experss = require("express");
const app = experss();
const dbconfig = require('./db');
const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Node Server Started`)) 