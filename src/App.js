import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Refactor this app', 'dinner time']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>My Proto TODO app</h1>
      <form>
        <input value={input}
        onChange={event => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => {
          return <li>{todo}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
