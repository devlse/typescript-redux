import { createReducer } from "typesafe-actions";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TodosAction, TodosState } from "./types";

// 초기상태 선언
const initialState: TodosState = []; // 기본값 빈 배열

// 리듀서 작성
const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => state.concat({
        ...action.payload,
        done: false
    }),
    [TOGGLE_TODO]: (state, action) => state.map(
        todo => todo.id === action.payload
            ? { ... todo, done: !todo.done }
            : todo
    ),
    [REMOVE_TODO]: (state, action) => state.filter(
        todo => todo.id !== action.payload
    )
})

export default todos;