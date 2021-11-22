import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated

// 액션 생성 함수 createStandardAction(액션타입)<payload 타입>()
export const increase = createStandardAction('counter/INCREASE')();
export const decrease = createStandardAction('counter/DECREASE')();
export const increaseBy = createStandardAction('counter/INCREASE_BY')<number>();

// 관리할 상태의 타입 선언
type CounterState = {
    count: number;
}

// 초기상태 선언
const initialState: CounterState = {
    count: 0
}

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>

// createReducer<state 타입, action 타입>(초기값, {object 맵})
// 메서드 체이닝 : .handleAction(액션타입, 업데이트함수 작성(리듀서))
const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(increase, state => ({ count: state.count + 1 }))
    .handleAction(decrease, state => ({ count: state.count - 1 }))
    .handleAction(increaseBy, (state, action) => ({
        count: state.count + action.payload
    }));

//     [INCREASE]: state => ({ count: state.count + 1 }),
//     [DECREASE]: state => ({ count: state.count - 1 }),
//     [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
// })

export default counter;


