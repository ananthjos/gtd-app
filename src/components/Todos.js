import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { getTodos } from '../actions/todosActions';
import Todo from './Todo';

function Todos({todos,getTodos}) {

  useEffect(()=>{
     getTodos();
  },[])

  
  
  return (
    <div>{todos.map((todo)=>{
      return <Todo todo={todo} key={todo.id}/>
    })}</div>
  )
}

const mapStateToProps = (state)=> ({todos:state.todo.todos})


export default connect(mapStateToProps,{getTodos})(Todos);