var express     = require('express'),
    mongoose    = require('mongoose'),
    path        = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
// // Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

// var jobInput = new Schema({
//   year: Number,
//   JobNumber: Number,
//   Employer: String,
//   PayrollCompany: String,
//   Show: String,
//   RTPerson: String,
//   Site: String,
//   RTLocation: String,
//   Day: String,
//   callBacks: String,
//   position: String,
//   dress: String,
//   contract: String,
//   rate: Number,
//   steward: String,
//   paidInFull: Boolean,
//   PartiallyPaid: Boolean,
// });

// var Wage = mongoose.model('Wage', wageSchema);
// var jobFile = mongoose.model('jobFile', jobInput);

mongoose.connect('mongodb://localhost/iatse'); // connect to mongo database named iatse

  
  var Schema = mongoose.Schema({
    year: Number,
    JobNumber: Number,
    Employer: String,
    PayrollCompany: String,
    Show: String,
    RTPerson: String,
    Site: String,
    RTLocation: String,
    Day: String,
    callBacks: String,
    position: String,
    dress: String,
    contract: String,
    rate: Number,
    steward: String,
    paidInFull: Boolean,
    PartiallyPaid: Boolean,
  });

var Job = mongoose.model("Job", Schema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("SUCCESS RICE")
  // var Schema = mongoose.Schema({
  //   year: Number,
  //   JobNumber: Number,
  //   Employer: String,
  //   PayrollCompany: String,
  //   Show: String,
  //   RTPerson: String,
  //   Site: String,
  //   RTLocation: String,
  //   Day: String,
  //   callBacks: String,
  //   position: String,
  //   dress: String,
  //   contract: String,
  //   rate: Number,
  //   steward: String,
  //   paidInFull: Boolean,
  //   PartiallyPaid: Boolean,
  // });

  // var Job = mongoose.model("Job", Schema);
});


// configure our server with all the middleware and and routing
// require('./config/middleware.js')(app, express);

app.use(express.static(path.join(__dirname, 'wageCalculator')));

app.get('/iatse',function(req,res){
  // res.sendFile('/Users/andrewnixon/Desktop/MVP/wageCalculator/index.html');

  res.render('index')
});

app.post('/iatse', function(req, res){
  console.log("hello is it me you're looking for?", req.body);
  db.collection('iatse').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

// export our app for testing and flexibility, required by index.js
var port = 3000;
app.listen(port, function(){
  console.log("server running on port ", port);
});

module.exports = app;