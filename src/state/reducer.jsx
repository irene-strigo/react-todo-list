import { ADD_TODO, CHANGE_COLOR, DELETE_TODO } from "./actionTypes";

/*
{
    id: '', // хороший стиль предполагает его наличие
    text: '',
    isChangeColor: false
}
*/
export const initialState = {
    todos: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,
                {
                    text: action.payload,
                    /*count: state.todos.length + 1,*/
                    isChangeColor: false
                }
                ]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, i) => action.payload !== i)
            };
        case CHANGE_COLOR:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (action.payload !== i) {
                        return todo
                    }

                    return {
                        ...todo,
                        isChangeColor: !todo.isChangeColor
                    }
                })
            };
        default:
            return state;
    }
};

export default reducer;