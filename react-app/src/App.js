
import './App.css';
import TodoList from './pages/todoList';
import ReducerSample from './pages/ReducerSample';
import DoubleSelector from './components/double-selector/DoubleSelector';
import Timer from './components/timer/Timer';
import Counter from './components/counter-redux-example/Counter';

function App() {
  return (
    <div className="App">
      {/* <TodoList/> */}
      {/* <ReducerSample/> */}
      <DoubleSelector></DoubleSelector>
      <Timer></Timer>
      <Counter/>

    </div>
  );
}

export default App;
