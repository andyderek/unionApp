var mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/iatse', function(err, db){
//   if(err){
//     console.log(err)
//   } else {
//     console.log("Cobra vs mongoose")
//   }
// }); 

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

var jobsDB = mongoose.model("Job", jobSchema);

module.exports = jobsDB;
