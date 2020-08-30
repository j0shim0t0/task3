import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ModeSelector from './ModeSelector/ModeSelector';
import Chat from './Chat/Chat.js';
import MessageEditor from './MessageEditor/MessageEditor.js';
import Authorization from './Authorization/Authorization.js';
import avatar from './img/defaultUser.png';

class App extends Component {

	state = {
		isModeSelected: false,
		data: [],
		users: [],
		primaryKey: 0,
		editMode: false,
		editMessage: "",
		authorization: false,
		currentUser: []
	}

	componentDidUpdate() {
		if (this.state.isModeSelected == true && this.state.authorization == true) this.scrollToBottom();
	}

	scrollToBottom() {
	  const scrollHeight = this.messageList.scrollHeight;
	  const height = this.messageList.clientHeight;
	  const maxScrollTop = scrollHeight - height;
	  this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
	}

	fetchData(mode) {
		let allData;
		if (mode == "working"){
			allData = require("./json/jsonMessages1.json");
		} else if (mode == "communication"){
			allData = require("./json/jsonMessages2.json");
		}
	    const data = allData.messages;
	    this.setState({
	      	data,
	      	primaryKey: allData.primaryKey
	    })
	}

	modeSelectHandler = mode => {
	    this.setState({
	      	isModeSelected: true
	    })
	    this.fetchData(mode)
	}

	noneSelecthandler = () => {
		this.setState({
	      	isModeSelected: false
	    })
	}

	newMessage = message => {
	    debugger;
	    const newData = this.state.data;
	    let primaryKey = this.state.primaryKey
	    const date = new Date();
	    const formatDate = date.getHours() + ":" + date.getMinutes();
	    newData["message-" + primaryKey] = {"id": primaryKey, "userId": this.state.currentUser.id, "message": message, "date": formatDate};
	    primaryKey++;
	    this.setState({
	    	data: newData,
	    	primaryKey: primaryKey
	    });
  	}

  	deleteMessage = item => {
  		const keyMessage = "message-" + item.id;
  		const newData = this.state.data;
  		delete newData[keyMessage];
  		this.setState({
  			data: newData
  		});
  		//console.log(newData);
  	}

  	editMessage = item => {
  		this.setState({
  			editMode: true,
  			editMessage: item
  		})
  	}

  	editMessageDone = message => {
  		const keyMessage = "message-" + this.state.editMessage.id;
  		const newData = this.state.data;
  		newData[keyMessage].message = message;
  		//console.log(keyMessage);
  		this.setState({
  			editMode: false,
  			editMessage: "",
  			data: newData
  		})
  	}

  	logIn = value => {
  		//debugger;
	    const users = require('./json/jsonUsers.json');
	    const usersArr = Object.values(users);
	    usersArr.map(item => {
	    	if (item.logIn == value.login){
	    		if (item.password == value.password){
	    			this.setState({
	    				users,
	    				authorization: true,
	    				currentUser: item
	    			});
	    		}
	    	}
	    })
  		//console.log(value);
  	}

	render(){



		if(!this.state.authorization){
	    	return (
	    		<div className="container d-flex justify-content-center">
	        		<Authorization logIn={this.logIn}/>
	        	</div>
	      	)
	    }

		if(!this.state.isModeSelected){
	    	return (
	    		<div className="container">
	        		<ModeSelector onSelect={this.modeSelectHandler} />
	        	</div>
	      	)
	    }

		return (
			<div className="container">
				<div className="container mt-5">
					<div className="row d-flex flex-row-reverse">
						<div className="col-md-6 d-flex flex-row-reverse">
							<div className="card col-12 p-0">
								<div className="card-header">
									<div className="row d-flex align-items-center">
										<div className="col" style={{'max-width': '80px'}}>
											<img src={avatar} class="rounded-circle" style={{width: '50px', height: '50px'}}/>
										</div>
										<div className="col">{this.state.currentUser.logIn}</div>
										<button className="col-2 btn btn-primary" onClick={this.noneSelecthandler}>Выход</button>
									</div>
								</div>
								<div className="card-body messageList" style={{'max-height': '500px', 'overflow-y': 'scroll'}} id="chat-body" ref={(div) => {this.messageList = div;}}>
									<Chat 
										data={this.state.data}
										users={this.state.users}
										del={this.deleteMessage}
										edit={this.editMessage}
										currentUserId={this.state.currentUser.id}
									/>
								</div>
								<MessageEditor 
									newMessage={this.newMessage}
									editMode={this.state.editMode}
									editMessage={this.state.editMessage}
									editMessageDone={this.editMessageDone}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
