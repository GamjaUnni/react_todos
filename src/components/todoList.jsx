const TodoList = ({ setTodoList, toDoList }) => {
    const removeTodo = (id) => {
        // setTodoList([...arr.slice(0,idx), ...arr.slice(idx+1)])
        setTodoList((prev) => prev.filter((x) => x.id !== id));
    };

    const toggleDone = (id) => {
        setTodoList((prev) =>
            prev.map((x) => (x.id === id ? { ...x, done: !x.done } : x))
        );
    };
    return (
        <ul>
            {toDoList.map((x) => (
                <li key={x.id}>
                    <input
                        type="checkbox"
                        onChange={() => toggleDone(x.id)}
                        checked={x.done}
                    />
                    {x.todo}
                    <button>수정</button>
                    <button onClick={() => removeTodo(x.id)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
