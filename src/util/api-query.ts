import {BASE_URL} from "./env-exports.ts";
import axios from "axios";
import {getUser} from "./util.ts";


export interface TodoProps {
    user_id: string;
    task_id: string;
    tasks: string;
    is_completed: boolean;
}

const user = getUser();


const headers = {
    "Content-Type": "application/json",
    'Authorization': `Bearer 12345`,
    'Accept': 'application/json',
    'userId': user?.profile.sub,
};



const fetchTodos = async (): Promise<TodoProps[]> => {
    const response = await axios.get(`${BASE_URL}/todos`, {headers});
    return response.data.data;
};

const deleteTodo = async (taskId: string) => {
    const response = await axios.delete(`${BASE_URL}/todos/${taskId}`, {headers});
    return response.status;
}

export {fetchTodos, deleteTodo}