const express = require('express');
const router = express.Router();
const Server=require('./Server');
const MongoClient = require('mongodb').MongoClient;

router.post('/', async function(req, res){
  const name=req.body.name;
  const pwd=req.body.password;
  let connectedDB = await MongoClient.connect("mongodb://fun:ndi2018@ds127624.mlab.com:27624/ndi", {
        useNewUrlParser: true
  });
  const usr = await connectedDB.db("ndi").collection("users").findOne({"name":name, "password":pwd});
  connectedDB.close();
  global.ssn = req.session;
  global.ssn.name = usr.name;
  global.ssn.password=usr.password;
  res.status(200);
  res.end();
  console.log(res);
});

module.exports = router;
