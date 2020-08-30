import React, {useState} from 'react';

export default props => {

	const [value, setValue] = useState({login: "", password: ""});

	const changeHandler = (param) => (event) => {
    	value[param] = event.target.value;
        setValue(value);
    }



	return(
		<div className="col-3">
			<div className="form-group">
			  	<label for="logIn">LogIn</label>
			  	<input type="text" className="form-control" id="logIn" placeholder="Enter login" onChange={changeHandler("login")}/>
			</div>
			<div className="form-group">
			  	<label for="password">Password</label>
		   		<input type="password" className="form-control" id="password" placeholder="Password" onChange={changeHandler("password")}/>
			</div>
			<button type="submit" className="btn btn-primary" onClick={() => props.logIn(value)}>Войти</button>
		</div>
	)
}