import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop.jsx';
import {loderHandle } from './loader/loader.js';
const router=createBrowserRouter([{
  path:'/',
  element:<App></App>,
  children:[
    {
      path:'/',
      element:<Shop></Shop>,
      loader:loderHandle
    }
  ]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
