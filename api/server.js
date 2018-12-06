const express=require('express'),
  app = express();

app.listen(3000);

console.log('todo list RESTful API server started on: ' + 3000);
app.get('/', function (req, res){
  res.write("hello");
  res.end();
})
