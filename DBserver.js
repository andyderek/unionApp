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
    year: {type: Number, required: true},
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

// app.use(express.static(path.join(__dirname, 'wageCalculator')));

app.post('/iatse', function(req, res){
  res.send();
  var newJob = new Job();
  
  newJob.year = req.body.year;
  newJob.JobNumber = req.body.jobNum;
  newJob.Employer = req.body.employer;
  newJob.PayrollCompany = req.body.payroll;
  newJob.show = req.body.payroll;
  newJob.RTPerson = req.body.rtPerson;
  newJob.Site = req.body.site;
  newJob.RTLocation = req.body.rtLocation;
  newJob.Day = req.body.day;
  newJob.callBacks = req.body.callBacks;
  newJob.position = req.body.position;
  newJob.dress = req.body.dress;
  newJob.contract = req.body.contract;
  newJob.rate = req.body.rate;
  newJob.steward = req.body.steward;
  newJob.paidInFull = req.body.paidInFull;
  newJob.PartiallyPaid = req.body.partialPaid;

  newJob.save(function(err){
    if(err){
      console.log("%%%%%%%%%%%%%%",err.name,"%%%%%%%%%%%%%%%%%%%%")
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