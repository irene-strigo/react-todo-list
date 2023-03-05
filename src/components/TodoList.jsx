
import React, { useContext } from "react";
import { CHANGE_COLOR, DELETE_TODO } from "../state/actionTypes";
import { todoContext } from "../state/TodoContext";
import '../components/todoList.css'


export default function TodoList() {
    const { state, dispatch } = useContext(todoContext);
    const deleteHandler = (todo) => {
        let idx = state.todos.indexOf(todo)
        dispatch({ type: DELETE_TODO, payload: idx })
    }
    const changeColorHandler = (todo) => {
        dispatch({ type: CHANGE_COLOR, payload: todo })
    }
    return (
        <div>
            <h1> Todo List </h1>
            {state.todos.length > 0 &&
                state.todos.map((todo, id) => {
                    return <h4 key={id}>
                        <span className={state.isChangeColor === true ? 'colored' : 'ordinary'}>{todo}</span>
                        <button onClick={() => deleteHandler(todo)}>[X]</button>
                        <button onClick={() => changeColorHandler()}>[V]</button>
                    </h4>;
                })}
        </div >
    );
}