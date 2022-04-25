import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import UpdateTask from "./components/UpdateTask";
import { getTasks } from "./actions/tasksActions";
import "./App.css";

function App() {
  useEffect(() => {
    store.dispatch(getTasks());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/task/:id' element={<UpdateTask />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
