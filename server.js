var express = require('express');
var app = express();
var PORT = 3001;
var middleware = require('./middleware.js');

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function(req, res){
  res.send('This is the about page!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
  console.log('Express Server has now started on port ' + PORT);
});
