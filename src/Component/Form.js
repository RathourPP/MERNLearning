import React,{Component} from 'react'
import {Input,Label,Button} from 'reactstrap'

class Registration extends Component{

    constructor(props){
        super(props);
        this.state={
            firstName:'',
            middleName:'',
            lastName:'',
            contact:'',
            email:'',
            displayMessage:''
        }
    }

    onFormChange=(e)=>{
        const{name,value}=e.target;
        this.setState({[name]:value,key:name})
    }

    onButtonClick=()=>{
        const{firstName,lastName}=this.state;
        const message=`Registration Has Been Successfull..!!. Your details are ${firstName} ${lastName}. Your Registration Number Is ${Math.random()}`;
        this.setState({displayMessage:message,firstName:'',
        middleName:'',
        lastName:'',
        contact:'',
        email:''})
    }

    render(){
        const{firstName,middleName,lastName,contact,email,displayMessage}=this.state;
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-tile text-center" style={{textTransform:"uppercase"}}>Registration</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-responsive table-hover">
                        <tbody>
                        <tr>
                            <td>FirstName</td>
                            <td><Input placeholder="Enter FirstName" name="firstName" value={firstName} onChange={this.onFormChange} /></td>
                        </tr>
                        <tr >
                            <td>MiddleName</td>
                            <td><Input placeholder="Enter MiddleName" name="middleName" value={middleName} onChange={this.onFormChange}  /></td>
                        </tr>
                        <tr>
                            <td>LastName</td>
                            <td><Input placeholder="Enter LastName" name="lastName" value={lastName} onChange={this.onFormChange}  /></td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td><Input placeholder="Enter Contact" name="contact" value={contact} onChange={this.onFormChange}  /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><Input placeholder="Enter Email" name="email" value={email} onChange={this.onFormChange}  /></td>
                        </tr>
                        <tr>
                            <td>
                             <Button className="btn btn-primary" onClick={this.onButtonClick}>Submit Form</Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="panel-footer"><Label style={{color:"green"}}>{displayMessage}</Label></div>
            </div>
        )
    }
}

export default Registration;