import React,{useState,useEffect} from 'react'
import {Button} from 'reactstrap'

function Count(){
 const[likes,setLikes]=useState(0);
 const[dislikes,setDislikes]=useState(0);

 const incrementHandler=()=>{
     setLikes(likes+1);
 }

 const decrementHandler=()=>{
    setDislikes(dislikes+1);
}

useEffect(()=>{
    console.log('Use Effect called');
},[likes])

    return(
                        <div className="container">
                        <div className="row">
                            <div className="panel panel-default">
                            <div className="panel-heading">
                    <h4>
                    Demo For Counter Likes Using Functional Component
                    </h4>
                </div>
                    <table className="table table-fixed">
                        <thead>
                        <tr>
                           <th className="col-xs-2">#</th>
                           <th className="col-xs-2">Tech Stack</th>
                           <th className="col-xs-2">Likes</th>
                           <th className="col-xs-2">DisLikes</th>
                           <th className="col-xs-2">Inc Likes</th>
                           <th className="col-xs-2">Inc DisLikes</th>
                       </tr>
                        </thead>
                        <tbody>
                           <tr>
                           <td className="col-xs-2">1</td>
                           <td className="col-xs-2">MERN</td>
                           <td className="col-xs-2">{likes}</td>
                           <td className="col-xs-2">{dislikes}</td>
                           <td className="col-xs-2"><Button value="Increment" className="btn btn-danger" onClick={incrementHandler} >Likes</Button></td>
                           <td className="col-xs-2"><Button value="Decrement" className="btn btn-primary" onClick={decrementHandler} >DisLikes</Button></td>
                           </tr>
                        </tbody>
                    </table>
           </div>
        </div>
   </div>
    )
}

export default Count;