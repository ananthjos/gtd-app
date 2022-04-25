import React, { useState ,useEffect} from "react";
import { connect } from "react-redux";
import Task from "./Task";
import {filterTasks} from '../actions/tasksActions';
import {STATUS_COMPLETED,STATUS_PENDING} from '../actions/types';

function Tasks({ tasks ,filterTasks}) {
  const [statusFilter, setStatusFilter] = useState(false);
  

  

  return (
    <div>
       <h6 className="text-center display-6 mb-3">List Of Tasks</h6>
      <select  onChange={(e)=>{
         setStatusFilter(e.target.value);
         filterTasks(e.target.value);
      }} className="form-select mb-4">
        <option value="all">All</option>
        <option value={STATUS_PENDING}>Pending</option>
        <option value={STATUS_COMPLETED}>Completed</option>
      </select>
      <ul className="list-group">

      {tasks &&
        tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ tasks: state.task.tasks });

export default connect(mapStateToProps,{filterTasks})(Tasks);
