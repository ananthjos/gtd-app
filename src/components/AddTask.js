import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions/tasksActions';
import {STATUS_PENDING} from '../actions/types'


function AddTask({addTask}) {

  const[title,setTitle] = useState("");
  const[day,setDay] = useState("");
  const [status, setStatus] = useState(STATUS_PENDING);

  const onSubmit = (e)=>{
      e.preventDefault();

      if(!title || !day){
        alert('Plese fill the required fields')
        return
      }

      addTask({title,day,status})

      setDay("");
      setTitle("");
  }

  return (
    <form className='add-form' onSubmit={(e) => onSubmit(e)}>
      <div>
        <label htmlFor='title' className='form-label mb-2'>
          Title
        </label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='form-control mb-2'
        />
      </div>
      <div>
       
        <label htmlFor='day' className='form-label mb-2'>
          Day
        </label>
        <input
          type='date'
          name='day'
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className='form-control mb-2'
        />
      </div>
      <div className='d-grid gap-2 mb-4 mt-4'>
        <button type='submit' className='btn btn-outline-success'>
          Save
        </button>
      </div>
    </form>
  );
}



export default connect(null,{addTask})(AddTask)