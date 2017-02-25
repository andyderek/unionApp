import React from 'react';
import inputSubmit from './jobInputSmart';

class JobsInput extends React.Component {

	getTotals(){
		console.log("The button has been pressed");
		 fetch('http://localhost:3000/iatse')
    	.then(response => response.json())
    	.then(data => console.log('This is data ',data));
	}


	render(){
		return <div>
				<form>
				Year: <input type='text' ref={(year) => this.year = year}/><br/>
				Job Number: <input type='text' ref={(jobNumber) => this.jobNumber = jobNumber}/><br/>
				Employer: <input type='text' ref={(employer) => this.employer = employer}/><br/>
				Payroll Company: <input type='text' ref={(payroll) => this.payroll = payroll}/><br/>
				Show: <input type="text" ref={(show) => this.show = show}/><br/>
				RT Person: <input type="text" ref={(rtPerson) => this.rtPerson = rtPerson}/><br/>
				Site: <input type="text" ref={(site) => this.site = site}/><br/>
				RT Location: <input type="text" ref={(rtLocation) => this.rtLocation = rtLocation}/><br/>
				Day: <input type="text" ref={(day) => this.day = day}/><br/>
				Date: <input type="date" ref={(date) => this.date = date}/><br/>
				Call Backs: <input type="text" ref={(callBacks) => this.callBacks = callBacks}/><br/>
				Position: <input type="text" ref={(position) => this.position = position}/><br/>
				Dress: <input type="text" ref={(dress) => this.dress = dress}/><br/>
				Contract: <input type="text" ref={(contract) => this.contract = contract}/><br/>
				Rate: <input type="text" ref={(rate) => this.rate = rate}/><br/>
				Steward: <input type="text" ref={(steward) => this.steward = steward}/><br/>
				Paid in Full: <input type="radio" name="PayStatus" ref={(paid) => this.paidInFull = paid}/><br/>
				Partially Paid: <input type="radio" name="PayStatus" ref={(partiallyPaid) => this.partiallyPaid = partiallyPaid}/><br/>
				Not Paid: <input type='radio' name="PayStatus" defaultChecked ref={(notPaid) => this.notPaid = notPaid}/><br/>
				<input type="submit" onClick={inputSubmit.bind(this)} value="Submit"/>
				</form>
				<button onClick={this.getTotals.bind(this)}>Press Here</button>
			</div>			
	};
};

export default JobsInput;