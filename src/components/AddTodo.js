import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todosActions';


function AddTodo({addTodo}) {

  const[title,setTitle] = useState("");
  const[day,setDay] = useState("");
  const[status,setStatus] = useState("Pending");

  const onSubmit = (e)=>{
      e.preventDefault();

      if(!title || !day){
        alert('Plese fill the required fields')
        return
      }

      addTodo({title,day,status})

      setDay("");
      setTitle("");
  }

  return (
    <form className='add-form' onSubmit={(e)=>onSubmit(e)}>
      <div className='form-control'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='todo-input'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='day'>Day</label>
        <input
          type='date'
          name='day'
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className='todo-input'
        />
      </div>

      <button type='submit' className='btn btn-block' >Save</button>
    </form>
  );
}



export default connect(null,{addTodo})(AddTodo)