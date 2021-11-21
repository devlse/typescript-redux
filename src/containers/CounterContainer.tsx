import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { RootState } from "../modules";
import { decrease, increase, increaseBy } from "../modules/counter";

function CounterContainer () {
    // 상태 조회 - state 의 타입을 RootState 로 지정해야한다.
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch(); // 디스패치 함수 가져오기
    
    // 각 액션을 디스패치하는 함수 생성
    const onIncrease = () => {
        dispatch(increase());
    }
    const onDecrease = () => {
        dispatch(decrease());
    }
    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }

    return(
        <Counter 
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    );
};

export default CounterContainer;