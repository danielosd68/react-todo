import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState} from "react";
import auth from "../../Auth/Auth.tsx";


const App = (props: any) => {
    document.title = "Welcome! | TODO App";
    const [tasks, setTasks] = useState<any>(null);

    useEffect(() => {
        auth.getTasks(Number(localStorage.getItem('id')))
            // @ts-ignore
            .then(data => setTasks(data))
            .catch(reason => console.log(reason));
    }, [tasks]);

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
                <table className="table-auto w-full rounded-md">
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
                            <td className="pl-5 pr-5"></td>
                        </tr>
                    )) : "Brak zadań!"}
                </table>
            </div>

        </>
    )

}

export default App;