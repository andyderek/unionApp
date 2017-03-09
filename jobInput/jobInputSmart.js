

function inputSubmit(e) {
		e.preventDefault();
		fetch('http://localhost:3000/iatse', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				year: this.year.value,
				jobNumber: this.jobNumber.value,
				employer: this.employer.value,
				payroll: this.payroll.value,
				show: this.show.value,
				rtPerson: this.rtPerson.value,
				site: this.site.value,
				rtLocation: this.rtLocation.value,
				day: this.day.value,
				date: this.date.value,
				callBacks: this.callBacks.value,
				position: this.position.value,
				dress: this.dress.value,
				contract: this.contract.value,
				rate: this.rate.value,
				steward: this.steward.value,
				paymentStatus: {
						paidInFull: this.paidInFull.checked,
						partiallyPaid: this.partiallyPaid.checked,
						notPaid: this.notPaid.checked
					},
			})
		})
	}


export default inputSubmit;


// import React from 'react';

// class inputSubmit extends React.Component {

// inputSubmit(e) {
// 	e.preventDefault();
// 		fetch('http://localhost:3000/iatse', {
// 			method: 'POST',
// 			headers: {'Content-Type': 'application/json'},
// 			body: JSON.stringify({
// 				year: this.year.value,
// 				jobNumber: this.jobNumber.value,
// 				employer: this.employer.value,
// 				payroll: this.payroll.value,
// 				show: this.show.value,
// 				rtPerson: this.rtPerson.value,
// 				site: this.site.value,
// 				rtLocation: this.rtLocation.value,
// 				day: this.day.value,
// 				date: this.date.value,
// 				callBacks: this.callBacks.value,
// 				position: this.position.value,
// 				dress: this.dress.value,
// 				contract: this.contract.value,
// 				rate: this.rate.value,
// 				steward: this.steward.value,
// 				paymentStatus: {
// 						paidInFull: this.paidInFull.checked,
// 						partiallyPaid: this.partiallyPaid.checked,
// 						notPaid: this.notPaid.checked
// 					},
// 			})
// 		})
// 	}

// 	 render() {
//     return <JobsInput/>;
//   }

// }