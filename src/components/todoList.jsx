import { styled } from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import TodoForm from "./todoForm";

const TodoList = ({
    toDoId,
    setTodoId,
    toDoList,
    setTodoList,
    writeMode,
    setWriteMode,
    writeModeColor,
}) => {
    const removeTodo = (id) => {
        // setTodoList([...arr.slice(0,idx), ...arr.slice(idx+1)])
        setTodoList((prev) => prev.filter((x) => x.id !== id));
    };

    return (
        <TodoListArea>
            {writeMode ? (
                <TodoForm
                    toDoId={toDoId}
                    setTodoId={setTodoId}
                    writeModeColor={writeModeColor}
                    setWriteMode={setWriteMode}
                    setTodoList={setTodoList}
                />
            ) : null}

            {toDoList.map((x) => (
                <ReadNote key={x.id} bgcolor={x.noteColor}>
                    <pre>{x.todo}</pre>
                    <button
                        className="btn_close"
                        onClick={() => removeTodo(x.id)}
                    >
                        <AiFillCloseCircle className="icon" />
                    </button>
                </ReadNote>
            ))}
        </TodoListArea>
    );
};

export default TodoList;

const TodoListArea = styled.ul`
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
    .btn_close {
        position: absolute;
        right: 16px;
        top: 16px;
        .icon {
            font-size: 24px;
        }
    }
`;

const ReadNote = styled.li`
    position: relative;
    padding: 16px;
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgcolor};
    border-radius: 16px;
`;
