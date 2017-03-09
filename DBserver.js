var express     = require('express'),
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

app.post('/iatse', function(req, res){
  res.send();
  var newJob = new jobsDB();
  for(var key in newJob) {
    for(var key2 in req.body){
      if(key === key2){
        console.log(req.body[key2]);
        newJob[key] = req.body[key2]
      }
    };
  };

  newJob.save(function(err){
    if(err){
      console.log("%%%%%%%%%%%%%%",err,"%%%%%%%%%%%%%%%%%%%%")
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

//db.jobs.findAndModify({query: {_id : ObjectId("58b98b2a04151c0aea376623")}, update: {$set: {hours: {"Friday": 18,"Monday": 19}}}})
// db.jobs.findAndModify({query: {_id : ObjectId("58b9d0729e17c70b94a1e555")}, update: {$push: {hours: {"Sunday":"Praise the Lord!"}}}})

var port = 3000;
app.listen(port, function(){
  console.log("server running on port ", port);
});