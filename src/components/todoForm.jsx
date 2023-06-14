import { useState, useRef } from "react";
/*
    id: 고유한 번호값,
    todo: input value,
    done: checkbox 체크용(boolean),
    mode: 수정모드인지 아닌지(boolean)
*/
const TodoForm = ({ setTodoList }) => {
    let id = useRef(1); // 렌더링이 되어도 영향받지 않는 hook
    const [todo, setTodo] = useState("");
    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // setTodoList([...toDoList, todo]);
        // 성능 최적화 : 퍼포먼스(f12-perfomence) 속도가 빨라지는 것을 확인할 수 있다.
        setTodoList((prev) => [
            ...prev,
            {
                id: id.current, // Ref의 현재 값을 가져온다.
                todo: todo,
                done: false,
                mode: false,
            },
        ]);
        setTodo("");
        id.current += 1; // id값을 하나씩 증가 시킨다. (각각의 todo를 구별하기 위함)
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={todo}
                onChange={onChange}
                placeholder="입력해주세요 😃"
            />
            <input type="submit" value="add" />
        </form>
    );
};

export default TodoForm;
