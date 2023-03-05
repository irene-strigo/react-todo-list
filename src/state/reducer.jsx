import { ADD_TODO, CHANGE_COLOR, DELETE_TODO } from "./actionTypes";

export const initialState = {
    todos: [],
    isChangeColor: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case DELETE_TODO:
            return {
                todos: state.todos.filter((todo, i) => action.payload !== i)
            };
        case CHANGE_COLOR:
            return {
                ...state,
                isChangeColor: true
            };
        default:
            return state;
    }
};

export default reducer;