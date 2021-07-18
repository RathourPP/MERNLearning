import axios from "axios";
import env from "../utils/env"

class Fetch {
    fetch=async(url,options,callBack)=>{
        const apiUrl=env.REACT_APP_API_END_POINT;
        const fetchUrl=`${apiUrl}/${url}`;
        let response={};
        let responseData;

        const reqOptions={
            url:fetchUrl,
            ...options,
            validateStatus:(status)=>{
                return true;
            }
        };

        try{
            response=await axios(reqOptions);
            responseData=response;
            if(callBack){
                callBack(responseData)
            }
            return responseData;
        }catch(err){
            return{
                status:500,
                error:err
            }
        }
    }
}

export default new Fetch();