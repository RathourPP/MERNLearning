import React from 'react';

export default(props)=>{
    return(
        <div>
            The Name Of User Is <span className="text-success">{props.name}</span>
            <button onClick={props.onClickHander}>Click Me</button>
        </div>
    )
}