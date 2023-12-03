import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import auth from "../../Auth/Auth.tsx";

const AddNewTask = () => {
    const navigate = useNavigate();
    document.title = "Add new task | TODO App";
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [expire, setExpire] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();

        let expireDate = expire.replace(/-/g, '/');
        const date = new Date(expireDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        expireDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
        console.log(expireDate);

        const task = {
            user_id: localStorage.getItem('id'),
            title: title,
            description: content,
            expire: expireDate
        }

        auth.addTask(task)
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                setError(true);
            })
    }
    return (
        <div className="mt-16 ml-5 mr-5 md:ml-40 md:mr-40">
            <div className="text-end">
                <Link to={'/'}><button className="border-2 border-orange-500 p-3 w-48 rounded-md hover:bg-orange-500 hover:text-white transition-all">Close</button></Link>
            </div>

            <div className="text-center mt-16">
                <h1 className="text-4xl">Add new task!</h1>
            </div>

            <form>
                <div className="form flex pt-10 pb-10 pr-10 border-b-2 border-b-gray-200">
                    <div className="w-1/4 pl-10 pr-10 flex items-center justify-end">
                        <p className="font-bold">Title</p>
                    </div>
                    <div className="w-3/4 pl-10 pr-10">
                        <input onChange={(e) => setTitle(e.target.value)} className="border-2 border-gray-200 pl-3 pr-3 pt-2 pb-2 w-full" type="text" name="title" id="title" placeholder="Title..."/>
                    </div>
                </div>

                <div className="form flex pt-10 pb-10 pr-10 border-b-2 border-b-gray-200">
                    <div className="w-1/4 pl-10 pr-10 flex items-center justify-end">
                        <p className="font-bold">Description</p>
                    </div>
                    <div className="w-3/4 pl-10 pr-10">
                        <textarea onChange={(e) => setContent(e.target.value)} name="description" id="description" className="border-2 border-gray-200 pl-3 pr-3 pt-2 pb-2 w-full" placeholder="Content..."></textarea>
                    </div>
                </div>

                <div className="form flex pt-10 pb-10 pr-10 border-b-2 border-b-gray-200">
                    <div className="w-1/4 pl-10 pr-10 flex items-center justify-end">
                        <p className="font-bold">Expire day</p>
                    </div>
                    <div className="w-3/4 pl-10 pr-10">
                        <input onChange={(e) => setExpire(e.target.value)} type="date" name="" id=""/>
                    </div>
                </div>

                <div className="form flex pt-10 pb-10 pr-10 justify-center">
                    <button onClick={addTask} className="bg-orange-500 p-3 w-48 rounded-md text-white hover:bg-orange-700 transition-all ">Add new task</button>
                </div>

                <p className={"text-center text-red-500" + (!error ? " hidden" : "")}>Upload error...</p>
            </form>
        </div>
    )
}

export default AddNewTask;