import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import UpdateTask from "./components/UpdateTask";
import { connect } from "react-redux";
import { getTasks, getTask } from "./actions/tasksActions";
import "./App.css";
// DOG
function App({ task }) {
  useEffect(() => {
    store.dispatch(getTasks());
  }, []);

  const fetchTask = (id) => {
    store.dispatch(getTask(id));
  };

  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/task/:id'
              element={<UpdateTask  fetchTask={fetchTask} />}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}


export default App;
