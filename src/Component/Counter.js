import React,{Component} from 'react'
import {Button} from 'reactstrap'
class Count extends Component{

    constructor(props){
        super(props);
        this.state={
            likes:0,
            disLikes:0
        }
    }

    incrementHandler=()=>{
        const{likes}=this.state;
        this.setState({likes:likes+1});
    }

    decrementHandler=()=>{
        const{disLikes}=this.state;
        this.setState({disLikes:disLikes+1});
    }

   
    render(){
        const{likes,disLikes}=this.state;
        return(
        <div className="container">
             <div className="row">
                 <div className="panel panel-default">
                    <div className="panel-heading">
          <h4>
            Demo For Counter Likes
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
                                <td className="col-xs-2">{disLikes}</td>
                                <td className="col-xs-2"><Button value="Increment" className="btn btn-danger" onClick={this.incrementHandler}>Likes</Button></td>
                                <td className="col-xs-2"><Button value="Decrement" className="btn btn-primary" onClick={this.decrementHandler}>DisLikes</Button></td>
                                </tr>
                             </tbody>
                         </table>
                </div>
             </div>
        </div>
        )
    }
}

export default Count;