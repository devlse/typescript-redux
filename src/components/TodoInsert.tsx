import React, { FormEvent, useState } from "react";

type TodoInsertProps = {
    onInsert: (text: string) => void;
}

function TodoInsert({ onInsert }: TodoInsertProps) {
    const [value, setValue] = useState(''); // 기본값 공백
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue(''); // 값 초기화
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    )
}

export default TodoInsert;