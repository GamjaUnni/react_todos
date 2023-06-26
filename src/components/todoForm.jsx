import { useState } from "react";
import { styled } from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

function saveNowDate() {
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const date = new Date();
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}, ${year}`;
}

/*
    id: 고유한 번호값,
    todo: input value,
    done: checkbox 체크용(boolean),
    mode: 수정모드인지 아닌지(boolean)
*/
const TodoForm = ({ setTodoList, writeModeColor, setWriteMode }) => {
    const [todo, setTodo] = useState("");
    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!todo) {
            alert("할 일을 입력하세요.");
            return;
        }

        // setTodoList([...toDoList, todo]);
        // 성능 최적화 : 퍼포먼스(f12-perfomence) 속도가 빨라지는 것을 확인할 수 있다.
        setTodoList((prev) => [
            {
                id: Date.now(), // Ref의 현재 값을 가져온다.
                todo: todo,
                done: false,
                mode: false,
                noteColor: writeModeColor,
                wroteDate: saveNowDate(),
            },
            ...prev,
        ]);
        setTodo("");
        setWriteMode(false);
    };

    return (
        <TextBox
            onSubmit={onSubmit}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
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

const TextBox = styled(motion.form)`
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
