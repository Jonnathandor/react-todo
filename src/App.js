import './App.css';
import { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';


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
        <FormControl>
          <InputLabel>Write Item:</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>

      <ul>
        {todos.map(todo => {
          return <Todo
            todo={todo}
          />
        })}
      </ul>
    </div>
  );
}

export default App;
