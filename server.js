const express=require('express');
const fs=require('fs');
const path=require('path');
const port=5000;
const app=express();
const mysql=require('mysql');
const con=require('./connection.js');
var bodyParser=require('body-parser');
const { stringify } = require('querystring');
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/elderly', (req,res)=>{
    res.sendFile(path.join(__dirname, 'elderly.html'));
})
app.get('/volunteer', (req,res)=>{
    res.sendFile(path.join(__dirname, 'volunteer.html'));
})
app.post('/submit-elderly', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.post('/submit-volunteer', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
    con.connect(function(err){
      console.log("Connected Successfully!!!");
    })
});
app.post('/submit', (req, res)=>{
    var Name=req.body.Name;
    var Phone=req.body.Phone;
    var Address=req.body.Address;
    var Type=req.body.Type;
    let sql = 'INSERT INTO details(Name, Phone, Address, Type) VALUES(?,?,?,?)';
    con.query(sql, [Name, Phone, Address, Type], function(err, result){
      res.send("Thank You for trusting us.... We will be providing you with the suitable volunteer shortly!!!");
    })
});

