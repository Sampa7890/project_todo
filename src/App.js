import './App.css';
import TodoForm from './component/TodoForm';
import TodoWrapper from './component/TodoWrapper';



function App() {
  return (
    <div className="App">
    <TodoWrapper/>
      <TodoForm/>
    </div>
  );
}

export default App;
