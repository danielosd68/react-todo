import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState} from "react";
import auth from "../../Auth/Auth.tsx";


const App = (props: any) => {
    document.title = "Welcome! | TODO App";
    const [tasks, setTasks] = useState<any>(null);
    const [todayTasks, setTodayTasks] = useState<any>(null);
    useEffect(() => {
        auth.getTasks(Number(localStorage.getItem('id')))
            // @ts-ignore
            .then(data => setTasks(data))
            .catch(reason => console.log(reason));

    }, []);

    useEffect(() => {
        // console.log(tasks);
        auth.getTodayTasks(tasks)
            // @ts-ignore
            .then(data => setTodayTasks(data))
            .catch(reason => console.log(reason));
        console.log(todayTasks);
    }, [tasks]);

    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <div
                className="nav bg-orange-500 w-full h-14 text-white flex justify-between items-center text-xl pl-10 pr-10">
                <h1 className="">TODO App</h1>
                <button className="text-lg" onClick={() => {
                    props.logout();
                }}>Wyloguj {localStorage.getItem('username')}</button>
            </div>


            <div className="w-11/12 ml-auto mr-auto mt-20">
                <h1 className="mb-10 text-center text-3xl">Tasks for today!</h1>
                <table className="table-fixed w-full rounded-md text-xs md:text-sm">
                    <thead>
                    <tr className="h-14 bg-gray-400">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Expire date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {todayTasks ? todayTasks.map((task: {
                        id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        expire: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                    }, id: number) => (
                        <tr key={id} className="h-12 border-t-2 border-t-gray-200 hover:bg-gray-300">
                            <td className="pl-5 pr-5">{id + 1}</td>
                            <td className="pl-5 pr-5">{task.title}</td>
                            <td className="pl-5 pr-5">{task.description}</td>
                            <td className="pl-5 pr-5">{task.expire}</td>
                            <td className="pl-5 pr-5 text-center text-xl">
                                <button className="ml-auto mr-auto">Do it!</button>
                            </td>
                        </tr>
                    )) : "No tasks for today!"}
                </table>


                <h1 className="mt-10 mb-10 text-center text-3xl">All tasks</h1>
                <table className="table-fixed w-full rounded-md text-xs md:text-sm">
                    <thead>
                    <tr className="h-14 bg-gray-400">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Expire date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {tasks ? tasks.map((task: {
                        id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        expire: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                    }, id: number) => (
                        <tr key={id} className="h-12 border-t-2 border-t-gray-200 hover:bg-gray-300">
                            <td className="pl-5 pr-5">{id + 1}</td>
                            <td className="pl-5 pr-5">{task.title}</td>
                            <td className="pl-5 pr-5">{task.description}</td>
                            <td className="pl-5 pr-5">{task.expire}</td>
                            <td className="pl-5 pr-5 text-center text-xl">
                                <button className="ml-auto mr-auto">Do it!</button>
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