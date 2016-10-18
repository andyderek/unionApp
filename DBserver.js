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
}); 

var Schema = mongoose.Schema;

var jobSchema = new Schema({
    year: {type: Number, required: true},
    jobNumber: Number,
    employer: String,
    payroll: String,
    show: String,
    rtPerson: String,
    site: String,
    rtLocation: String,
    day: String,
    date: String,
    callBacks: String,
    position: String,
    dress: String,
    contract: String,
    rate: Number,
    steward: String,
    paymentStatus: {
      paidInFull: Boolean,
      partiallyPaid: Boolean,
      notPaid: Boolean
    },
});

var Job = mongoose.model("Job", jobSchema);

app.post('/iatse', function(req, res){
  res.send();
  var newJob = new Job();
  for(var key in newJob) {
    for(var key2 in req.body){
      if(key === key2){
        newJob[key] = req.body[key2]
      }
    };
  };

  newJob.save(function(err){
    if(err){
      console.log("%%%%%%%%%%%%%%",err.name,"%%%%%%%%%%%%%%%%%%%%")
    } else {
      console.log("Something good might have happened")
    }
  })
});

var port = 3000;
app.listen(port, function(){
  console.log("server running on port ", port);
});

module.exports = app;