import React from 'react';

export default props =>{
    return (
        <div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
            <button onClick={()=>props.onSelect("working")} className="btn btn-success">Рабочие вопросы</button>
            <button onClick={()=>props.onSelect("communication")} className="btn btn-danger">Общение</button>
        </div>
    )
}