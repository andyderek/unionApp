var express     = require('express'),
    mongoose    = require('mongoose'),
    path        = require('path');
    bodyParser  = require('body-parser');
    app         = express();
    jobsDB      = require('./DB/jobsDB');

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

app.post('/iatse', function(req, res){
  res.send();
  var newJob = new jobsDB();
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

app.get('/iatse', function(req, res){
  console.log("A GET request has been made.")
  jobsDB.find({}, function(err, jobs){
    if(err){
      console.log("this is where you fucked up", err)
      res.send(err)
    }
    res.json(jobs);
  })
});


var port = 3000;
app.listen(port, function(){
  console.log("server running on port ", port);
});

// module.exports = app;