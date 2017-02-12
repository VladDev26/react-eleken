import React from 'react';
import {connect} from 'react-redux';


const Subscribe = props => {
	let {setEmail, validateEmail, sendEmail, isValid, success} = props;

	let submit = (
		<span className="submit" onClick={handleSubmit}>></span>
	);
	let form = (
		<form onSubmit={e => handleSubmit(e)}>
			<input type="email" placeholder="your email address"
				onChange={e => handleChange(e.target.value)}
			/>
			{isValid ? submit : null}
		</form>
	);

	function handleSubmit(e){
		if(e){e.preventDefault();}
		validateEmail();
		if(isValid){sendEmail();}
	}
	function handleChange(val){
		setEmail(val);
		validateEmail();
	}

	return(
		<section className="subscribe">
			<h2>subscribe</h2>
			<p>Stay updated on news</p>
			{success ? <p>Success!</p> : form}
		</section>
	);
};




const mapStateToProps = state => {
	return{
		isValid: state.subscribe.valid,
		success: state.subscribe.success
	};
};
const mapDispatchToProps = dispatch => {
	return{
		setEmail: str => dispatch({type: 'SET_EMAIL', payload: str}),
		validateEmail: () => dispatch({type: 'VALIDATE_EMAIL'}),
		sendEmail: () => dispatch({type: 'MOCK_SENDING_EMAIL'})
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
