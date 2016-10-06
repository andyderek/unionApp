import React from 'react';
import JobInputSmart from './jobInputSmart';

class JobsInput extends React.Component {

	inputSubmit(e) {
		e.preventDefault();
		var porkChop = this.year.value;
		console.log(porkChop);
		fetch('http://localhost:3000/iatse', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				year: porkChop,
				dog: "poop",
			})
		})
	}

	render(){
		return <div>
				<form>
				Year: <input type='text' ref={(year) => this.year = year}/><br/>
				Job Number: <input type='text'/><br/>
				Employer: <input type='text'/><br/>
				Payroll Company: <input type='text'/><br/>
				Show: <input type="text"/><br/>
				RT Person: <input type="text"/><br/>
				Site: <input type="text"/><br/>
				RT Location: <input type="text"/><br/>
				Day: <input type="text"/><br/>
				Call Backs: <input type="text"/><br/>
				Position: <input type="text"/><br/>
				Dress: <input type="text"/><br/>
				Contract: <input type="text"/><br/>
				Rate: <input type="text"/><br/>
				Steward: <input type="text"/><br/>
				Paid in Full: <input type="checkbox"/><br/>
				Partially Paid: <input type="checkbox"/><br/>
				<input type="submit" onClick={this.inputSubmit.bind(this)} value="Submit"/>
				</form>
			</div>			
	};
};

export default JobsInput;