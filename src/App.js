import { Provider } from 'react-redux';
import store from './store';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
      <AddTodo/>
      <Todos/>
      </div>
    </Provider>
  );
}

export default App;
