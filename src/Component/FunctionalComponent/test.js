import React,{useState }from 'react'
import{checkValidation} from '../Validations/ValidationCheck'

export default()=>{
    const[name,setName]=useState('');
    const[error,setError]=useState('');

    const clickHandler=()=>{
        if(checkValidation(name)!=="ok"){
            setError(checkValidation(name))
        }
       
    }

    const clearErrorMessage=(e)=>{
        const expression="/[^a-zA-Z]/";
        if (e.target.value === '' || expression.match(e.target.value)) {
            setName(e.target.value);
            setError('');
        }
        
    }

    return(
        <div>
            <input type="text" placeholder="Enter Name" value={name} onChange={clearErrorMessage} />
            <span className="text-danger">{error}</span>
            <button onClick={clickHandler} >Click Me</button>
        </div>
    )
}