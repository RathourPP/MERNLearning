import React from 'react';

class DisplayClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:'Child Value'
        }
    }
    
    render(){
        const{name,onClickHander}=this.props;
        return(
            <div>
            The Name Of User Is <span className="text-success">{name}</span>
            <button onClick={onClickHander}>Click Me</button>
        </div>
        )
    }
}

export default DisplayClass;