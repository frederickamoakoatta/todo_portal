import {BASE_URL} from "./env-exports.ts";
import axios from "axios";
import {getUser} from "./util.ts";


export interface TodoProps {
    user_id: string;
    task_id: string;
    tasks: string;
    is_completed: boolean;
}


const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    'Accept': 'application/json'
};



const fetchTodos = async (): Promise<TodoProps[]> => {
    const user  = getUser();
    const response = await axios.get(`${BASE_URL}/todos`, {
        headers : {
            ...headers,
            'Authorization': `Bearer ${user?.access_token}`,
            'userId': user?.profile.sub,
        }
    });
    return response.data.data;
};

const deleteTodo = async (taskId: string) => {
    const user  = getUser();
    const response = await axios.delete(`${BASE_URL}/todos/${taskId}`, {
        headers : {
            ...headers,
            'Authorization': `Bearer ${user?.access_token}`,
            'userId': user?.profile.sub,
        }
    });
    return response.status;
}

export {fetchTodos, deleteTodo}