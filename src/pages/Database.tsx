import {useQuery} from "@tanstack/react-query";
import {deleteTodo, fetchTodos, TodoProps} from "../util/api-query.ts";
import Badge from "../components/Badge.tsx";
import {CiTrash} from "react-icons/ci";
import Loading from "./Loading.tsx";
import ErrorPage from "./Error.tsx";
import EmptyPage from "./Empty.tsx";
import OverlayLoader from "../components/OverlayLoader.tsx";
import {useState} from "react";


const Database = () => {
    const {
        data,
        isLoading,
        isFetching,
        isError,
        error,
        isFetched,
        isSuccess,
        refetch
    } = useQuery<TodoProps[]>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        refetchOnMount: true,
        refetchOnWindowFocus: false
    });

    const [isDisabled, setDisabled] = useState<boolean>(false);

    const deleteTask = async (id: string) => {
        setDisabled(true);
        const status = await deleteTodo(id);
        if (status === 200)
            await refetch();
        setDisabled(false);
    }

    return (
        <>
            {isLoading && <Loading fullPage={false}/>}
            {isError && <ErrorPage message={error.message}/>}
            {data?.length === 0 && <EmptyPage message={'There are currently no todos created!'}/>}

                {
                    isFetched && isSuccess && data?.length > 0 &&
                    <OverlayLoader loading={isFetching || isDisabled}>
                        <table className="min-w-full table-auto">
                            <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-4 py-2 font-medium text-gray-600">Task</th>
                                <th className="px-4 py-2 font-medium text-gray-600">Status</th>
                                <th className="px-4 py-2 font-medium text-gray-600">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data?.map((task) => (
                                <tr key={task.task_id} className="border-1 border-gray-200">
                                    <td className="px-4 py-4">{task.tasks}</td>
                                    <td className={`px-4 py-4`}>
                                        <Badge status={task.is_completed}/>
                                    </td>
                                    <td className="px-4 py-4">
                                        <CiTrash className={'h-6 w-6 cursor-pointer text-gray-700 hover:text-red-700'}
                                                 onClick={() => deleteTask(task.task_id)}/>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </OverlayLoader>
                }
        </>
    )
}
export default Database