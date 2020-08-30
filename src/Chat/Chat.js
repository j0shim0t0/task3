import React from 'react';
import avatar from './../img/defaultUser.png';

export default props => {
	const dataArr = Object.values(props.data);
	return(
		dataArr.map(item => {
			const userKey = "user-" + item.userId;
			const userName = props.users[userKey].logIn;
			return(

				
					<div className="row my-2" key={item.id}>
						<div className="col p-0 d-flex justify-content-center" style={{'max-width': '80px'}}>
							<img src={avatar} class="rounded-circle mt-2" style={{width: '50px', height: '50px'}}/>
						</div>
						<div className={item.userId == props.currentUserId ? "bg-primary col text-white mr-3 rounded" : "bg-secondary col text-white mr-3 rounded"} >
							<div className="d-flex flex-column">
								<div className="row m-0">
									<div className="col p-0">
										{ userName }
									</div>
									<div className="col" style={{'max-width': '175px'}}>
										<small onClick={() => props.del(item)} style={{cursor: 'pointer'}}>удалить</small>
										<span> | </span>
										<small onClick={() => props.edit(item)} style={{cursor: 'pointer'}}>редактировать</small>
									</div>
								</div>
								<div>
									{ item.message }
								</div>
								<div>
									<small className="float-right">{ item.date }</small>
								</div>
							</div>
						</div>
					</div>
			)
		})
	)

	/*<div className="col {item.userId == currentUserId ? bg-primary : bg-secondary} text-white mr-3 rounded">

	props.data.forEach((value, key, map) => {
		//debugger;
		const userKey = "user-" + value.userId;
		const userName = props.users[userKey].logIn;
		return(

			
				<div className="row my-2" key={value.id}>
					<div className="col-2 p-0 ml-3">
						img
					</div>
					<div className="col bg-secondary text-white mr-3 rounded">
						<div className="d-flex flex-column">
							<div className="row m-0">
								<div className="col p-0">
									{ userName }
								</div>
								<div className="col-3">
														
								</div>
							</div>
							<div>
								{ value.message }
							</div>
							<div>
								<span className="float-right">{ value.date }</span>
							</div>
						</div>
					</div>
				</div>
		)
	})*/


	/*const items = props.data;
	for (let key in items ){
		const userKey = "user-" + items[key].userId;
		const userName = props.users[userKey].logIn;
		return(

			
				<div className="row my-2" key={items[key].id}>
					<div className="col-2 p-0 ml-3">
						img
					</div>
					<div className="col bg-secondary text-white mr-3 rounded">
						<div className="d-flex flex-column">
							<div className="row m-0">
								<div className="col p-0">
									{ userName }
								</div>
								<div className="col-3">
														
								</div>
							</div>
							<div>
								{ items[key].message }
							</div>
							<div>
								<span className="float-right">{ items[key].date }</span>
							</div>
						</div>
					</div>
				</div>
		)
	}*/
}

