const { connect } = require("http2");
const mongoose = require("mongoose");
var mongoURL ='mongodb+srv://hoalq:Kenkaneki123@cluster0.1zxv9yo.mongodb.net/room'
mongoose: connect(mongoURL,{useUnifiedTopology : true , useNewUrlParser:true})
var connection = mongoose.Connection
connection.on('error',()=>
{console.log('Mongo DB connection failed')})
connection.on('connected',()=>
{console.log('Mongo DB connection Successful')})
module.exports = mongoose