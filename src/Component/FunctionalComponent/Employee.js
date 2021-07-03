import React,{useState} from 'react';
import { Button } from 'reactstrap';

export default()=>{
    const[employee,setEmployee]=useState([
        {id:1,name:'xyz',pincode:2345},
        {id:2,name:'abc',pincode:234},
        {id:3,name:'def',pincode:23},
        {id:4,name:'pqr',pincode:2},
    ])

    const deleteEmployee=(id)=>{
        const arr=employee.filter((item)=>item.id!==id);
        setEmployee(arr);
    }

    return(
        <div className="container">
                        <div className="row">
                            <div className="panel panel-default">
                            <div className="panel-heading">
                    <h4>
                    Employees Information
                    </h4>
                </div>
                {
                    employee.map((item,index)=>{
                        return(
                            <table className="table table-fixed" key={index}>
                            <thead>
                            <tr>
                               <th className="col-xs-2">Id</th>
                               <th className="col-xs-2">Name</th>
                               <th className="col-xs-2">PinCode</th>
                           </tr>
                            </thead>
                            <tbody>
                                 <td className="col-xs-2">{item.id}</td>
                                <td className="col-xs-2">{item.name}</td>
                                <td className="col-xs-2">{item.pincode}</td>
                                <td><Button className="btn btn-danger" onClick={()=>{deleteEmployee(item.id)}}>Delete</Button></td>
    
                              
                            </tbody>
                        </table>
                        )
                    })
                   
}
           </div>
        </div>
   </div>
    )
}