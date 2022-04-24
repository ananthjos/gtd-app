import React from 'react'

function Todo({todo}) {
  const {title,day} = todo;
  return (
    <div className='todo'>
      <h3>{title}</h3>
      <p>{day}</p>
    </div>
  )
}

export default Todo