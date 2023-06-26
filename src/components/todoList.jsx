import { styled } from "styled-components";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { GrEdit, GrTrash } from "react-icons/gr";

import TodoForm from "./todoForm";
import TodoTextarea from "./todoUpdate";

const TodoList = ({
    toDoList,
    setTodoList,
    writeMode,
    setWriteMode,
    writeModeColor,
}) => {
    const removeTodo = (id) => {
        setTodoList((prev) => prev.filter((x) => x.id !== id));
    };
    const onCheck = (id) => {
        setTodoList((prev) =>
            prev.map((x) => (x.id === id ? { ...x, done: !x.done } : x))
        );
    };
    const onUpdate = (id) => {
        setTodoList((prev) =>
            prev.map((x) =>
                x.id === id ? { ...x, mode: !x.mode } : { ...x, mode: false }
            )
        );
    };

    return (
        <TodoListArea>
            {writeMode ? (
                <TodoForm
                    writeModeColor={writeModeColor}
                    setWriteMode={setWriteMode}
                    toDoList={toDoList}
                    setTodoList={setTodoList}
                />
            ) : null}

            {toDoList.map((x) => (
                <ReadNote
                    className={x.done ? "done" : null}
                    key={x.id}
                    bgcolor={x.done ? "#E8EAEF" : x.noteColor}
                >
                    {x.mode ? (
                        <TodoTextarea
                            id={x.id}
                            todo={x.todo}
                            setTodoList={setTodoList}
                        />
                    ) : (
                        <>
                            <pre>{x.todo}</pre>
                            <button
                                onClick={() => onCheck(x.id)}
                                className="btn_check"
                            >
                                {x.done ? (
                                    <MdCheckCircleOutline className="icon" />
                                ) : (
                                    <MdRadioButtonUnchecked className="icon" />
                                )}
                            </button>
                            <BtnBox>
                                <WrotedDate>{x.wroteDate}</WrotedDate>
                                <div>
                                    <button
                                        className="btn_update"
                                        onClick={() => onUpdate(x.id)}
                                    >
                                        <GrEdit />
                                    </button>
                                    <button
                                        className="btn_close"
                                        onClick={() => removeTodo(x.id)}
                                    >
                                        <GrTrash className="icon" />
                                    </button>
                                </div>
                            </BtnBox>
                        </>
                    )}
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
    .btn_check {
        position: absolute;
        right: 16px;
        top: 16px;
        .icon {
            font-size: 22px;
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
    &.done {
        color: #c9cad0;
        * {
            color: #c9cad0;
            stroke: #c9cad0;
        }
        .btn_update {
            display: none;
        }
    }
    textarea {
        padding-left: 1px;
        border: 3px dotted #2c2c2c;
        border-radius: 10px;
    }
    pre,
    textarea {
        overflow-y: auto;
        height: 148px;
        font-weight: 500;
        background-color: transparent;
        white-space: break-spaces;

        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: transparent;
            border-radius: 100px;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
            border-radius: 100px;
            background-clip: padding-box;
            border: 3px solid transparent;
        }
        &::-webkit-scrollbar-corner {
            background-color: transparent;
        }
    }
`;
const WrotedDate = styled.p`
    padding-top: 8px;
    font-size: 11px;
`;
const BtnBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        font-size: 17px;
    }
    button ~ button {
        margin-left: 8px;
    }
`;
