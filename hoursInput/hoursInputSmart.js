function hoursInputSubmit(e){
  e.preventDefault();
  console.log(this.date1.value, this.date2.value, this.reg1.value)

  var obj = {};
  obj[this.date1.value] = {
    reg : this.reg1.value
  };
  
  fetch('http://localhost:3000/iatse', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      year: 1900,
      hours: obj,
    })
  })
};

export default hoursInputSubmit