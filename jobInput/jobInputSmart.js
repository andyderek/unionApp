import React from 'react';
import JobsInput from './jobInput';



class JobInputSmart extends React.Component{

	inputSubmit(e) {
		e.preventDefault();
		var porkChop = this.year;
		console.log(porkChop);
	}

	render(){
		return <div>
			<input type="button" onClick={this.inputSubmit} />
		</div>
	};
};

export default JobInputSmart;