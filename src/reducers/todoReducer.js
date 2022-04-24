import { GET_TODOS,ADD_TODO,DELETE_TODO } from "../actions/types";

const initialState = {
  todos:[]
}

export default (state = initialState,action)=>{
      const {payload,type} = action;
      switch(type){
        case GET_TODOS:
          return {
            ...state,
            todos:payload
          }
          case ADD_TODO :
            return {
              ...state,
            }
            case DELETE_TODO :
              return {
                ...state
              }
          default:
            return state;
      }
}