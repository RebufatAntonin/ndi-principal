const express = require('express');
const router = express.Router();
const Server=require('./Server');

router.post('/', async function(req, res){
  req.session.destroy(function(err) {
    if(err) {
      res.status(500);
    } else {
      res.status(200);
    }
  });
  res.end();
});

module.exports = router;
