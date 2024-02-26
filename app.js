var express=require("express");
var bodyParser=require("body-parser");
const path=require("path");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Order');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
var app=express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
   extended: true
}));

app.post('/sign_up', function(req,res){
   var name = req.body.name;
   var quantity=req.body.quantity;
   var email =req.body.email;
   var address = req.body.address;
   var phone =req.body.phone;

   var data = {
      "Product name": name,
      "Quantity":quantity,
      "email":email,
      "address":address,
      "phone":phone
   }
   db.collection('details').insertOne(data,function(err, collection){
   if (err) throw err;
      console.log("Record inserted Successfully");
   });
   return res.redirect('success.html');
})
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req,res){
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect('index.html');
}).listen(3000)

console.log("server listening at port 3000");