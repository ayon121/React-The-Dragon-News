import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/Login',
        element : <Login></Login>
      }
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
