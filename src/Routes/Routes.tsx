import {createBrowserRouter} from "react-router-dom";
import Signup from "../Views/Signup/Signup.tsx";
import Index from "../Views/Index.tsx";
import AddNewTask from "../Views/AddNewTask/AddNewTask.tsx";

class Routes{
    public appRouter() {
        return createBrowserRouter([{
            path: "/",
            element: <Index />
        },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/add-task",
                element: <AddNewTask />
            }
        ]);
    }
}

const  AppRouter = new Routes().appRouter();

export default AppRouter;