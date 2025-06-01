import axios from 'axios';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// 예시: todo 리스트 가져오기
export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    return response.data;
};
