import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState} from "react";
import auth from "../../Auth/Auth.tsx";
import {Link} from "react-router-dom";


const App = (props: any) => {
    document.title = "Welcome! | TODO App";
    const [tasks, setTasks] = useState<any>(null);
    const [todayTasks, setTodayTasks] = useState<any>(null);

    useEffect(() => {
        if(localStorage.getItem('id') !== null){
            auth.getTasks(Number(localStorage.getItem('id')))
                // @ts-ignore
                .then(data => setTasks(data))
                .catch(reason => console.log(reason));
        }
        else{
            props.logout();
        }


    }, []);

    useEffect(() => {
        auth.getTodayTasks(tasks)
            // @ts-ignore
            .then(data => setTodayTasks(data))
            .catch(reason => console.log(reason));
    }, [tasks]);

    return (
        <>
            <div
                className="nav bg-orange-500 w-full h-14 text-white flex justify-between items-center text-xl pl-10 pr-10">
                <h1 className="">TODO App</h1>
                <button className="text-lg" onClick={() => {
                    props.logout();
                }}>Log out {localStorage.getItem('username')}</button>
            </div>


            <div className="w-11/12 ml-auto mr-auto mt-20">
                <div className="text-end">
                    <Link to={'/add-task'}>
                        <button className="bg-orange-500 p-3 w-48 rounded-md text-white hover:bg-orange-700 transition-all ">Add new task</button>
                    </Link>
                </div>
                <h1 className="mb-10 mt-10 text-center text-3xl">Tasks for today!</h1>
                <table className={"table-fixed w-full rounded-md text-xs md:text-sm" + (todayTasks === null || todayTasks.length === 0 ? " hidden" : "")}>
                    <thead>
                    <tr className="h-14 bg-gray-400">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Expire date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {todayTasks && todayTasks.length > 0 ? todayTasks.map((task: {
                        done: boolean;
                        id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        expire: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                    }, id: number) => (
                        <tr key={id} className={"h-12 border-t-2 border-t-gray-200 hover:bg-gray-300"}>
                            <td className="pl-5 pr-5">{id + 1}</td>
                            <td className="pl-5 pr-5">{task.title}</td>
                            <td className="pl-5 pr-5">{task.description}</td>
                            <td className="pl-5 pr-5">{task.expire}</td>
                            <td className="pl-5 pr-5 text-center md:text-xl">
                                <button className="ml-auto mr-auto">Do it!</button>
                            </td>
                        </tr>
                    )) : ""
                    }
                </table>
                <p className={!(todayTasks === null || todayTasks.length === 0) ? "hidden" : "text-center text-gray-400"}>No tasks for today!</p>

                <h1 className="mt-10 mb-10 text-center text-3xl">All tasks</h1>
                <table className={"table-fixed w-full rounded-md text-xs md:text-sm" + (tasks === null ? " hidden" : "")}>
                    <thead>
                    <tr className="h-14 bg-gray-400">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Expire date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {tasks && tasks.length > 0 ? tasks.map((task: {
                        done: boolean;
                        id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        expire: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                    }, id: number) => (
                        <tr key={id} className={"h-12 border-t-2 border-t-gray-200 hover:bg-gray-300" + (task.done ? " opacity-25" : "")}>
                            <td className="pl-5 pr-5">{id + 1}</td>
                            <td className="pl-5 pr-5">{task.title}</td>
                            <td className="pl-5 pr-5">{task.description}</td>
                            <td className="pl-5 pr-5">{task.expire}</td>
                            <td className="pl-5 pr-5 text-center md:text-xl">
                                <button disabled={task.done} className="ml-auto mr-auto">Do it!</button>
                            </td>
                        </tr>
                    )) : "Null"}
                </table>
            </div>
            <p className="text-center mt-16 text-gray-400">&copy; Chyliński Daniel {new Date().getFullYear()}</p>
        </>
    )

}

export default App;