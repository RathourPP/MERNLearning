import React from 'react';
import history from '../../history';

class Login extends React.Component{

    constructor(props){
        super(props);
    }

     OnClickRedirect=()=>{
      this.props.history.push('/Registration');
    }

    render(){
    return(
        <button onClick={()=>{this.OnClickRedirect()}}>Click Me</button>
    )
    }
}

export default Login;