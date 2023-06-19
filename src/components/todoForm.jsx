import { useState } from "react";
import { styled } from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

/*
    id: 고유한 번호값,
    todo: input value,
    done: checkbox 체크용(boolean),
    mode: 수정모드인지 아닌지(boolean)
*/
const TodoForm = ({
    toDoId,
    setTodoId,
    setTodoList,
    writeModeColor,
    setWriteMode,
}) => {
    const [todo, setTodo] = useState("");
    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // setTodoList([...toDoList, todo]);
        // 성능 최적화 : 퍼포먼스(f12-perfomence) 속도가 빨라지는 것을 확인할 수 있다.
        setTodoList((prev) => [
            {
                id: toDoId, // Ref의 현재 값을 가져온다.
                todo: todo,
                done: false,
                mode: false,
                noteColor: writeModeColor,
            },
            ...prev,
        ]);
        setTodo("");
        setWriteMode(false);
        setTodoId((prev) => prev + 1); // id값을 하나씩 증가 시킨다. (각각의 todo를 구별하기 위함)
    };

    return (
        <TextBox onSubmit={onSubmit}>
            <TextArea
                value={todo}
                onChange={onChange}
                placeholder="입력 해주세요 😃"
                bgcolor={writeModeColor}
            />
            <button type="submit" className="btn_edit">
                <BsCheckCircleFill className="icon" />
            </button>
        </TextBox>
    );
};

export default TodoForm;

const TextBox = styled.form`
    position: relative;
    .btn_edit {
        position: absolute;
        right: 16px;
        bottom: 16px;
        .icon {
            font-size: 24px;
        }
    }
`;
const TextArea = styled.textarea`
    padding: 16px;
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgcolor};
    border-radius: 16px;
`;
