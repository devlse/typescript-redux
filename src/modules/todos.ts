// 액션타입 선언
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1; // 새로운 항목을 추가할 때 사용할 고유 ID 값

// 액션 생성 함수
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: { // 전송될 데이터
        id: nextId++,
        text
    }
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
})

// 모든 액션에 대한 타입 작성
type TodosAction = 
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>

// 상태에서 사용할 할일 데이터 타입 정의
export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

type TodosState = Todo[]; // 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열

// 초기상태 선언
const initialState: TodosState = []; // 기본값 빈 배열

// 리듀서 작성
function todos(state: TodosState = initialState, action: TodosAction): TodosState {
    switch (action.type) {
        case ADD_TODO:
            // concat 으로 새로운 항목 등록
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false
            })
        case TOGGLE_TODO:
            // map 을 이용해 id 가 일치한다면 done 값을 반전시킴
            return state.map(todo =>
                todo.id === action.payload ? {...todo, done: !todo.done } : todo
            );
        case REMOVE_TODO:
            // filter 를 이용해 payload 에서 가져온 id 와 todo.id 가 일치하지 않는 것을 필터링
            // 일치한다면 배열에서 제거
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
}

export default todos;

