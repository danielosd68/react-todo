import {createBrowserRouter} from "react-router-dom";
import Login from "../Views/Login/Login.tsx";
import Signup from "../Views/Signup/Signup.tsx";

class Routes{
    public appRouter() {
        return createBrowserRouter([{
            path: "/",
            element: <Login />
        },
            {
                path: "/signup",
                element: <Signup />
            }]);
    }
}

const  AppRouter = new Routes().appRouter();

export default AppRouter;