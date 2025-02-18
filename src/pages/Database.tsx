import {useQuery} from "@tanstack/react-query";
import {fetchTodos, TodoProps} from "../util/api-query.ts";


const Database = () => {
    const { data, error, isLoading } = useQuery<TodoProps[]>({ queryKey: ["todos"], queryFn: fetchTodos });

    return(
        <>
            <table className="min-w-full table-auto">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="px-4 py-2 font-medium text-gray-600">Task</th>
                    <th className="px-4 py-2 font-medium text-gray-600">Status</th>
                    <th className="px-4 py-2 font-medium text-gray-600">Action</th>
                </tr>
                </thead>
                <tbody>
                {data?.map((task, index) => (
                    <tr key={index} className="border-b">
                        <td className="px-4 py-2">{task.title}</td>
                        <td className={`px-4 py-2 ${task.completed ? 'text-green-500' : 'text-gray-500'}`}>
                            {task.completed}
                        </td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:text-blue-700">Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
}
export default Database