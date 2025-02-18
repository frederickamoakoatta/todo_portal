import {BASE_URL} from "./util.ts";

export interface TodoProps {
    id: number;
    title: string;
    completed: boolean;
}

const fetchTodos = async (): Promise<TodoProps[]> => {
    const response = await fetch(`${BASE_URL}/todos`);
    if (!response.ok) throw new Error("Failed to fetch todos");
    return response.json();
};

const deleteTodo = async () => {

}

export {fetchTodos, deleteTodo}