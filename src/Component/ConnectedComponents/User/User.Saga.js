import {takeLatest,call,put} from "redux-saga/effects"
import * as types from './User.Constant'
import Api from '../../../services/APIClass'

export function* getAllActiveUsers(){
    try{
        const response=yield call(Api.fetch,"api/Registration/GetAllActiveUsers",{
            method:"GET",
            responseType:"json"
        });
        if(response.data){
            yield put({type:types.GET_USER_SUCCESS,response:response.data})
        }
        else{
            yield put({type:types.GET_USER_FAILURE})
        }
    }
    catch(err){
        yield put({type:types.GET_USER_FAILURE})
    }
}

export default function* watchUserInfo(){
    yield takeLatest(types.GET_USER_REQUESTING,getAllActiveUsers)
}