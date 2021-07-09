import React from 'react';
import Display from './Display';
import DisplayClass from './DisplayClass';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'MERN TUTORIALS'
        }
     // this.displayChildData=React.createRef();
    }

    onChangeHandler=(e)=>{
        this.setState({name:e.target.value})
    }

    onClickHander=()=>{
        console.log('The Printed Value Is Done By Passing Function As Component');
    }

    accessChildClassSate=()=>{
        const{value}=this.refs.displayChildData.state;
        console.log(`The Child Class Component Value Is ${value}`) 
    }

    render(){
        const{name}=this.state;
        return(
            <div>
                <input type="text" placeholder="Enter Some Value" onChange={this.onChangeHandler}/>
                <Display name={name} onClickHander={this.onClickHander} />
                <DisplayClass ref="displayChildData" name={name} onClickHander={this.onClickHander} />
                <button onClick={this.accessChildClassSate}>Click Me Parent</button>
            </div>
        )
    }
}

export default Header;