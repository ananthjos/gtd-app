import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask, editTask, getTask } from "../actions/tasksActions";

function Task({ task, deleteTask, editTask, getTask }) {
  const { title, day } = task;

  const onDelete = (e) => {
    deleteTask(task.id);
  };
  const onEdit = (e) => {
    // getTask(task.id);
  };
  return (
    <div className='list-group-item '>
      <div className='row'>
        <div className='col'>
          <p className='mb-1'>
            <b>{title}</b>
          </p>
          <p className="mb-1">
            {" "}
            by: <span className='text-warning'>{day}</span>
          </p>
        </div>
        <div className='col icons'>
          <div>
            {" "}
            <Link
              to={`/task/${task.id}`}
              className='fa fa-edit'
              onClick={(e) => onEdit(e)}
            ></Link>
          </div>
          <div>
            <i className='fa fa-trash' onClick={(e) => onDelete(e)}></i>
          </div>

          <div>
            <button
              
              className='btn  btn-outline-success btn-sm'
            >
              {task.status}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { deleteTask, editTask, getTask })(Task);
