import * as types from './User.Constant'

const initialState={
    users:[]
}

const reducer=(state=initialState,action={})=>{
    switch(action.type){
        case types.GET_USER_REQUESTING:{
            return{
                ...state,
            }
        }

        case types.GET_USER_SUCCESS:{
            const users=action.response;
            return{
                ...state,
                users:users
            }
        }

        default:{
            return{...state}
        }
    }
}

export default reducer;