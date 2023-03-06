
import React, { useContext } from "react";
import { CHANGE_COLOR, DELETE_TODO } from "../state/actionTypes";
import { todoContext } from "../state/TodoContext";
import '../components/todoList.css'


export default function TodoList() {
    const { state, dispatch } = useContext(todoContext);
    const deleteHandler = (index) => {
        dispatch({ type: DELETE_TODO, payload: index })
    }
    const changeColorHandler = (index) => {
        dispatch({ type: CHANGE_COLOR, payload: index })
    }
    return (
        <div>
            <h1> Todo List </h1>
            {state.todos.length > 0 &&
                state.todos.map((todo, index) => {
                    return <h4 key={index}>
                        <span className={todo.isChangeColor === true ? 'colored' : 'ordinary'}>{todo.text}</span>
                        <button onClick={() => deleteHandler(index)}>[X]</button>
                        <button onClick={() => changeColorHandler(index)}>[V]</button>
                    </h4>;
                })}
        </div >
    );
}