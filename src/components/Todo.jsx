import React, { useState, useContext } from "react";
import { todoContext } from "../state/TodoContext";
import { ADD_TODO } from "../state/actionTypes";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const { dispatch } = useContext(todoContext);

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_TODO, payload: todo });
        setTodo("");

    };

    return (
        <form>
            <input
                type="text"
                name="todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={addTodoHandler}>Add todo </button>
        </form>
    );
}