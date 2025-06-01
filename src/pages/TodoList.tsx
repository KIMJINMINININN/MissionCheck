// 사용 예시 (컴포넌트 내에서)
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos, Todo } from '../api/todoApi';

const TodoList: React.FC = () => {
    const { data, error, isLoading } = useQuery<Todo[]>(['todos'], fetchTodos);

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생</div>;

    return (
        <ul>
            {data?.map((todo) => (
                <li key={todo.id}>
                    {todo.id}. {todo.title} [{todo.completed ? '완료' : '미완료'}]
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
