import {combineReducers} from "redux";
import users from '../Component/ConnectedComponents/User/User.Reducer'

const rootReducer=combineReducers({
   users:users
})

export default rootReducer;