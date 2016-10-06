var express     = require('express'),
    mongoose    = require('mongoose'),
    path        = require('path');
    bodyParser  = require('body-parser');
    app         = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost/iatse', function(err, db){
  if(err){
    console.log(err)
  } else {
    console.log("Cobra vs mongoose")
  }
}); // connect to mongo database named iatse 


var Schema = mongoose.Schema;

var jobSchema = new Schema({
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

var Job = mongoose.model("Job", jobSchema);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("SUCCESS RICE")
// });


// app.use(express.static(path.join(__dirname, 'wageCalculator')));

app.get('/iatse',function(req,res){
  res.render('index')
});

app.post('/iatse', function(req, res){
  var newJob = new Job();
  newJob.year = req.body.year;
  newJob.save(function(err, newJob){
    if(err){
      console.log("oops", err)
    } else {
      console.log("Something good might have happened")
    }
  })
});

// export our app for testing and flexibility, required by index.js
var port = 3000;
app.listen(port, function(){
  console.log("server running on port ", port);
});

module.exports = app;