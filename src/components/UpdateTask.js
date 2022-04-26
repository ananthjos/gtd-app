import React, { useState, useEffect, memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getTask, editTask } from "../actions/tasksActions";

function UpdateTask({ task, getTask ,editTask}) {
  const params = useParams();
  let id = params.id;
  useEffect(() => {
    getTask(params.id);
  }, []);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [status, setStatus] = useState(task.status);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !day) {
      alert("Plese fill the required fields");
      return;
    }

    editTask({id,title,day,status});
    navigate("/");
  };

  return (
    <form className='add-form' onSubmit={(e) => onSubmit(e)}>
      <h1 className='text-center display-6'>Update Task</h1>
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
        <button type='submit' className='btn btn-outline-info'>
          Update
        </button>
      </div>
    </form>
  );
}
const mapStateToProps = (state) => ({ task: state.task.task });

export default connect(mapStateToProps, { getTask,editTask })(UpdateTask);
