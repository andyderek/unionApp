import React from 'react';
import JobInputSmart from './jobInputSmart';

class JobsInput extends React.Component {

	inputSubmit(e) {
		e.preventDefault();
		console.log(this.paid.checked)
		fetch('http://localhost:3000/iatse', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				year: this.year.value,
				jobNum: this.jobNum.value,
				employer: this.employer.value,
				payroll: this.payroll.value,
				show: this.show.value,
				rtPerson: this.rtPerson.value,
				site: this.site.value,
				rtLocation: this.rtLocation.value,
				day: this.day.value,
				callBacks: this.callBacks.value,
				position: this.position.value,
				dress: this.dress.value,
				contract: this.contract.value,
				rate: this.rate.checked,
				steward: this.steward.value,
				paidInFull: this.paid.checked,
				partialPaid: this.partialPaid.checked,
			})
		}).then(res => console.log(res));
	}

	checkedOrNot() {
		if(this.paid.checked){
			this.partialPaid.checked === false;
		}
	}

	render(){
		return <div>
				<form>
				Year: <input type='text' ref={(year) => this.year = year}/><br/>
				Job Number: <input type='text' ref={(jobNum) => this.jobNum = jobNum}/><br/>
				Employer: <input type='text' ref={(employer) => this.employer = employer}/><br/>
				Payroll Company: <input type='text' ref={(payroll) => this.payroll = payroll}/><br/>
				Show: <input type="text" ref={(show) => this.show = show}/><br/>
				RT Person: <input type="text" ref={(rtPerson) => this.rtPerson = rtPerson}/><br/>
				Site: <input type="text" ref={(site) => this.site = site}/><br/>
				RT Location: <input type="text" ref={(rtLocation) => this.rtLocation = rtLocation}/><br/>
				Day: <input type="text" ref={(day) => this.day = day}/><br/>
				Call Backs: <input type="text" ref={(callBacks) => this.callBacks = callBacks}/><br/>
				Position: <input type="text" ref={(position) => this.position = position}/><br/>
				Dress: <input type="text" ref={(dress) => this.dress = dress}/><br/>
				Contract: <input type="text" ref={(contract) => this.contract = contract}/><br/>
				Rate: <input type="text" ref={(rate) => this.rate = rate}/><br/>
				Steward: <input type="text" ref={(steward) => this.steward = steward}/><br/>
				Paid in Full: <input type="checkbox" ref={(paid) => this.paid = paid}/><br/>
				Partially Paid: <input type="checkbox" ref={(partialPaid) => this.partialPaid = partialPaid}/><br/>
				<input type="submit" onClick={this.inputSubmit.bind(this)} value="Submit"/>
				</form>
			</div>			
	};
};

export default JobsInput;