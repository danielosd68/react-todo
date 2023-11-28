import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import AppRouter from "./Routes/Routes.tsx";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="App">
        <RouterProvider router={AppRouter}/>
    </div>
  </React.StrictMode>,
)
