import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
      <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value = {inputValue} onChange={(e)=>setInputValue(e.target.value)}  type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>{setTodos([...todos,inputValue])}}></i>
      </div>
      <div className="todos">
        {
          todos.map((inputValue)=>{
            return(
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{inputValue}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>{setTodos(todos.filter(todo=>todo!==inputValue))}}></i>
          </div>
        </div>
        )
              })}
      </div>
    </div>
   
  );
}

export default App;
