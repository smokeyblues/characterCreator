require('colors');
var config = require('./config.js'),
    express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan')('dev'),
    Routes = require('./routes'),
    port = process.env.PORT || 8080,
    app = express();

mongoose.connect('mongodb://localhost/charCreator', (err)=>{
  if (err) {
    return console.log("DB failed to connect".red, err);
  }
  console.log('You have data! mongoDB connected'.cyan);
});

app.use(
  express.static('public'),
  bodyParser.json(),
  bodyParser.urlencoded({extended : true}),
  morgan
);

Routes(app);

http.createServer(app).listen(port, ()=>{
  console.log(`Server running on ${port}`);
})
