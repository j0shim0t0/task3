import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ModeSelector from './ModeSelector/ModeSelector';
import Chat from './Chat/Chat.js';

class App extends Component {

	state = {
		isModeSelected: false,
		data: [],
		users: []
    	//isLoading: false
	}

	fetchData(url) {
	    const data = "";//require('./json/jsonMessages1.json');
	    const users = "";//require('./json/jsonUsers.json');
	    console.log(data);
	    this.setState({
	      	//isLoading: false
	      	data,
	      	users
	    })
	}

	modeSelectHandler = url => {
	    // console.log(url)
	    this.setState({
	      	isModeSelected: true
	      	//isLoading: true
	    })
	    this.fetchData(url)
	}

	render(){

		if(!this.state.isModeSelected){
	    	return (
	    		<div className="container">
	        		<ModeSelector onSelect={this.modeSelectHandler} />
	        	</div>
	      	)
	    }

		return (
			<div className="container">
				<Chat 
					data={this.state.data}
					users={this.state.users}
				/>
			</div>
		);
	}
}

export default App;
