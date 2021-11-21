import React from "react";
import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";

type TodoListProps = {
    todos: Todo[]; // 할 일 정보들을 지니고 있는 배열
    onToggle: (id: number) => void; // TodoItem 컴포넌트들에게 전달
    onRemove: (id: number) => void; // TodoItem 컴포넌트들에게 전달
}

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
    if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList;