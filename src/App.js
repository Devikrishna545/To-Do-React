import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentdate, setCurrentDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const dayOfWeek = currentdate.toLocaleString("en-US", { weekday: "long" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayOfWeek} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() => {
            setTodos([
              ...todos,
              { id: Date.now(), text: inputValue, status: false },
            ]);
          }}
        ></i>
      </div>
      <div className="todos">
        {todos.map((todo) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  value={todo.status}
                  onChange={(e) =>
                    setTodos(
                      todos.filter((obj) => {
                        if (obj.id === todo.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    )
                  }
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{todo.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-trash"
                  onClick={() => {
                    setTodos(todos.filter((obj1) => todo.id !== obj1.id));
                  }}
                ></i>
                {/* <i className="fas fa-delete-left" onClick={()=>{todo.status="removed"}}></i> */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="sideHeadingRight">
        <h2>Completed Tasks</h2>
        {todos
          .filter((todo) => todo.status === true)
          .map((todo) => {
            return (
              <input className="input" value={todo.text} type="text" readOnly />
            );
          })}
      </div>
      <div className="sideHeadingLeft">
        <h2>Pending Tasks</h2>
        {todos
          .filter((todo) => todo.status === false)
          .map((todo) => {
            return (
              <input className="input" value={todo.text} type="text" readOnly />
            );
          })}
      </div>
    </div>
  );
}

export default App;
