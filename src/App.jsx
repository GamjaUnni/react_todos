import { useState, useEffect } from "react";
import TodoList from "./components/todoList";
import { styled } from "styled-components";
import GlobalStyle from "./globalStyle";
import { AiFillPlusCircle } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import cloudImg from "./assets/images/Shower.png";
import Clock from "./components/clock";
import { getTodos, saveTodos } from "./todosStorage";
import Weather from "./components/weather";

const ColorArr = ["#FEC971", "#FD9C74", "#B593FD", "#00D4FF", "#E3EE90"];

function App() {
    const [toDoList, setTodoList] = useState(getTodos() ?? []);
    const [writeMode, setWriteMode] = useState(false);
    const [writeModeColor, setWriteModeColor] = useState("");

    const changeWriteMode = (color) => {
        setWriteMode(true);
        setWriteModeColor(color);
    };

    useEffect(() => {
        saveTodos(toDoList);
    }, [toDoList]);

    return (
        <Wrapper bgcolor="blue">
            <GlobalStyle />
            <Container>
                <ColorList>
                    <Logo>Todo's</Logo>
                    <AiFillPlusCircle className="icon_plus" />
                    <ColorBox>
                        {ColorArr.map((color, i) => (
                            <ColorNote
                                key={color + i}
                                bgcolor={color}
                                onClick={() => changeWriteMode(color)}
                            ></ColorNote>
                        ))}
                    </ColorBox>
                </ColorList>
                <NoteList>
                    <NoteHeader>
                        {/* <NowTime>⏱ 2:40:15 PM</NowTime> */}
                        <NowTime>
                            ⏱ <Clock />
                        </NowTime>
                        <Location className="location">
                            <img src={cloudImg} alt="" />
                            <LocationInfo>
                                <span>34°</span>
                                <TiLocation className="icon_location" />
                                벚꽃로 100길
                            </LocationInfo>
                            <Weather />
                        </Location>
                    </NoteHeader>
                    <NoteTitle>Notes</NoteTitle>
                    <TodoBox>
                        <TodoList
                            setTodoList={setTodoList}
                            toDoList={toDoList}
                            writeMode={writeMode}
                            setWriteMode={setWriteMode}
                            writeModeColor={writeModeColor}
                        />
                    </TodoBox>
                </NoteList>
            </Container>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    /* background-color: ${(props) => props.bgcolor}; */
    padding: 60px;
    height: 100vh;
    background-color: #e5ebf4;
    min-width: 360px;
    @media (max-width: 600px) {
        padding: 0;
    }
`;

const Container = styled.div`
    display: flex;
    height: 100%;
    background-color: #fff;
    border-radius: 32px;
    @media (max-width: 600px) {
        border-radius: 0;
    }
`;

const Logo = styled.h1`
    padding-bottom: 60px;
    font-size: 12px;
`;

const ColorList = styled.div`
    padding: 30px 0;
    width: 80px;
    border-right: 1px solid #e5ebf4;
    text-align: center;
    .icon_plus {
        font-size: 38px;
        cursor: pointer;
    }
`;

const ColorBox = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ColorNote = styled.li`
    margin-top: 20px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${(props) => props.bgcolor};
    cursor: pointer;
`;

const NoteList = styled.div`
    padding: 30px 50px;
    width: calc(100% - 80px);
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #e5ebf478;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-track {
        background-color: #e5ebf478;
        border-radius: 100px;
        background-clip: padding-box;
        border: 3px solid transparent;
    }

    h1 {
        font-size: 28px;
    }
    @media (max-width: 600px) {
        padding: 30px 40px;
    }
`;
const TodoBox = styled.div`
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
`;

const Location = styled.div`
    display: flex;
    align-items: end;
    img {
        width: 46px;
    }
`;

const LocationInfo = styled.div`
    padding-left: 8px;
    span {
        padding-bottom: 4px;
        padding-left: 4px;
        display: inline-block;
        font-size: 20px;
        font-weight: 500;
        color: #242e47;
    }
    .icon_location {
        margin-left: 6px;
        font-size: 18px;
        margin-bottom: -2px;
        color: #258fff;
    }
`;
const NoteHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        .location {
            padding-bottom: 20px;
        }
    }
`;

const NoteTitle = styled.h2`
    font-size: 38px;
    padding-bottom: 50px;
`;

const NowTime = styled.h3`
    color: #bebdbf;
    font-size: 12px;
    font-weight: 400;
`;
