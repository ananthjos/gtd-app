import {
  GET_TASKS,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  GET_TASK,
  FILTER_TASKS,
  STATUS_COMPLETED,
  STATUS_PENDING
} from "./types";

const url = "http://localhost:5000/tasks";

// API Call to get all Todos
export const getTasks = () => async (dispatch) => {
  let response = await fetch(`${url}`);
  let tasks = await response.json();
  dispatch({ type: GET_TASKS, payload: tasks });
  return tasks;
};

// API call to add a Task
export const addTask = (task) => async (dispatch) => {
  let response = await fetch(`${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  let singleTask = await response.json();
  dispatch({ type: ADD_TASK, payload: singleTask });
};

// API call to delete a Task
export const deleteTask = (taskId) => async (dispatch) => {
  let response = await fetch(`${url}/${taskId}`, {
    method: "DELETE",
  });
  let tasks = await response.json();
  dispatch({ type: DELETE_TASK, payload: taskId });
};

//API call to Edit a Task
export const editTask = (task) => async (dispatch) => {
  console.log(task);
  let response = await fetch(`${url}/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  let updatedTask = await response.json();

  dispatch({ type: EDIT_TASK, payload: updatedTask });
};

// API call to get a single Task
export const getTask = (taskId) => async (dispatch) => {
  let response = await fetch(`${url}/${taskId}`);
  let task = await response.json();
  dispatch({ type: GET_TASK, payload: task });
};

export const filterTasks = (status)=>async(dispatch)=>{
 let response = await fetch(`${url}`);
 let tasks = await response.json();
 if(status === STATUS_PENDING || status === STATUS_COMPLETED){
   tasks = tasks.filter((task) => task.status === status);
 }
 dispatch({type:FILTER_TASKS,payload:tasks})
};
