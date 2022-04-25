import React from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';

function Home() {
  return (
    <>
      <h1 className='text-center display-6'>Tasks</h1>
      <AddTask />
      <Tasks />
    </>
  );
}

export default Home