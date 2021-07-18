import React,{Component} from 'react';
import {connect} from 'react-redux';
import{Col,Row,Input,Label,FormGroup} from 'reactstrap';
import {getActiveUsers} from './User.Action'

class Users extends Component{

    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:'',
            password:'',
            confirmPassword:''
        }
    }

    componentDidMount(){
        this.props.getActiveUsers();
    }
    

    render(){
        const{name,email,mobile,password,confirmPassword}=this.state;
        console.log(this.props.users);
        return(
            <span>Hello</span>
        )
    }
}

const mapStateToProps=(state)=>{
    const{users}=state;
    return{
        users:users.users
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        getActiveUsers:()=>dispatch(getActiveUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);