import { useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import { styled } from "styled-components";

function TodoTextarea({ id, todo, setTodoList }) {
    const [text, setText] = useState(todo);
    const onNew = (id) => {
        setTodoList((prev) =>
            prev.map((x) =>
                x.id === id ? { ...x, todo: text, mode: false } : x
            )
        );
    };
    return (
        <TodoUadateArea>
            <textarea
                onChange={(e) => setText(e.target.value)}
                value={text}
            ></textarea>
            <button onClick={() => onNew(id)}>
                <GrStatusGood className="icon" />
            </button>
        </TodoUadateArea>
    );
}

export default TodoTextarea;

const TodoUadateArea = styled.div`
    text-align: right;
    .icon {
        margin-top: 8px;
        font-size: 16px;
    }
`;
