import { GET_TODOS, ADD_TODO,DELETE_TODO,EDIT_TODO } from "./types";

const url = "http://localhost:5000/todos";

// API Call to get all Todos
export const getTodos = () => async (dispatch) => {
  let response = await fetch(`${url}`);
  let todos = await response.json();

  dispatch({ type: GET_TODOS, payload: todos });
};

// API call to add a Todo
export const addTodo = (todo) => async (dispatch) => {
  let response = await fetch(`${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  let todo = await response.json();
  dispatch({ type: ADD_TODO});
};


// API call to delete a Todo
export const deleteTodo = (todoId)=>async(dispatch)=>{
   let response = await fetch(`${url}/${todoId}`,{
     method:"DELETE"
   });
   let todos = await response.json();
   dispatch({type:DELETE_TODO})
}