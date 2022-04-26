import { GET_TASKS,ADD_TASK,EDIT_TASK,DELETE_TASK, GET_TASK ,FILTER_TASKS} from "../actions/types";

const initialState = {
  tasks:[],
  task:{}
}

export default (state = initialState,action)=>{
      const {payload,type} = action;
      switch(type){
        case GET_TASKS:
          return {
            ...state,
            tasks:payload
          }
          case ADD_TASK :
            return {
              ...state,
              tasks:[...state.tasks,payload]
            }
            case DELETE_TASK :
              return {
                ...state,
                tasks:state.tasks.filter((task)=> task.id !== payload)
              }
              case GET_TASK :
                return {
                  ...state,
                  task: payload
                }
                case EDIT_TASK :
                  return {
                    ...state,
                    tasks:state.tasks.map((task)=>{
                        if(task.id === payload.id){
                          task = payload
                        }
                        return task;
                    })
                  }
                  case FILTER_TASKS :
                    return {
                      ...state,
                      tasks:payload
                    }
          default:
            return state;
      }
}