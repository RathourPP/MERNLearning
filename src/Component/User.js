import React from "react";
class User extends React.Component{

    constructor(props){
        super(props);
        this.state={
            employeeList:[
                {id:1,name:"A"},
                {id:2,name:"B"},
                {id:3,name:"C"},
                {id:4,name:"D"},
                {id:5,name:"E"},
                {id:6,name:"F"},
                {id:7,name:"G"},
                {id:8,name:"H"},
            ]
        }
    }

    render(){
        const{employeeList}=this.state;
        return(
            <ul>
               {
                   employeeList && employeeList.map((item,index)=>{
                      return(<li key={index}>{item.name}-{item.id}</li>)
                   })
              
                }
            </ul>
        )
    }
}
export default User;