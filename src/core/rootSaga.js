import {all} from 'redux-saga/effects';
import userSaga from '../Component/ConnectedComponents/User/User.Saga'

export default function* rootSaga(){
    yield all([
        userSaga()
    ])
}