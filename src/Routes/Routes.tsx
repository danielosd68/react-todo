import {createBrowserRouter} from "react-router-dom";
import Login from "../Views/Login/Login.tsx";

class Routes{
    public appRouter() {
        return createBrowserRouter([{
            path: "/",
            element: <Login />
        }]);
    }
}

const  AppRouter = new Routes().appRouter();

export default AppRouter;