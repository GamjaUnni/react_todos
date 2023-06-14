import { useState } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
    const [toDoList, setTodoList] = useState([]);

    return (
        <div>
            <TodoForm setTodoList={setTodoList} />
            <TodoList setTodoList={setTodoList} toDoList={toDoList} />
        </div>
    );
}

export default App;
