import { ActionType } from "typesafe-actions";
import * as actions from './actions'; // actions.ts 파일에서 내보낸 모든 것 불러오기

export type TodosAction = ActionType<typeof actions>;

// 상태에서 사용할 할일 데이터 타입 정의
export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

export type TodosState = Todo[]; // 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
