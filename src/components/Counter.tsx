import React from "react";

// 컴포넌트에서 사용할 props 타입 선언
type CounterProps = {
    count: number;
    onIncrease: () => void; // 반환하지 않는 함수
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void; // diff 파라미터로 받아서 반환하지 않는 함수

}

function Counter({ count, onIncrease, onDecrease, onIncreaseBy }: CounterProps) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    )
}

export default Counter;