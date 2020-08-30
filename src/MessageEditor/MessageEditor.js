import React, {useState} from 'react'

export default props => {

    //debugger;
	const [value, setValue] = useState("");
    const [valueDoOnce, setValueDoOnce] = useState(false);
	const [disabled, setDisabled] = useState(true);

    const changeNewMessage = event => {
        event.target.value == "" ? setDisabled(true) : setDisabled(false);
        setValue(event.target.value);
    }
    const changeEditMessage = event => {
        setValue(event.target.value);
    }

    if (valueDoOnce == false && props.editMessage != ""){
        setValueDoOnce(true);
        setValue(props.editMessage.message);
    }

	return(

        <div className="card-footer row m-0">
            <div className="col">
                {props.editMode == false ? <textarea className="form-control" value={value} onChange={changeNewMessage}></textarea> : <textarea className="form-control" value={value} onChange={changeEditMessage}></textarea>}
            </div>
            <div className="col-3">
                {props.editMode == false ? <button type="button" className="btn btn-primary" onClick={() => {setDisabled(true); props.newMessage(value); setValue("");}} disabled={disabled}>Отправить</button> : <button type="button" className="btn btn-primary" onClick={() => {setValueDoOnce(false); props.editMessageDone(value); setValue("");}}>Редактировать</button>}
            </div>
        </div>
	)
}