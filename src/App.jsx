import { useState } from "react";

function App() {
    const [todo, setTodo] = useState("");
    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const [toDoList, setTodoList] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault();
        setTodoList([...toDoList, todo]);
        // setTodoList((prev) => [todo, ...prev]);
        setTodo("");
    };

    const removeTodo = (idx) => {
        // setTodoList([...arr.slice(0,idx), ...arr.slice(idx+1)])
        setTodoList(toDoList.filter((x, i) => i !== idx));
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={todo}
                    onChange={onChange}
                    placeholder="입력해주세요 😃"
                />
                <input type="submit" value="add" />
            </form>
            <ul>
                {toDoList.map((x, i) => (
                    <li key={i}>
                        {x}
                        <button onClick={() => removeTodo(i)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
