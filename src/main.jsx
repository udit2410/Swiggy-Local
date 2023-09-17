import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from "./Components/About";
import ContactUs from './Components/ContactUs.jsx';
import Error from './Components/Error.jsx';
import Body from './Components/Body.jsx';
import RestaurantMenu from './Components/RestaurantMenu.jsx';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
         element: <Body></Body>,

      },
      {
         path: "/about",
         element: <About></About>,
      },
      {
       path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/restaurant/:resId",
         element: <RestaurantMenu></RestaurantMenu>,
       }

    ],
    errorElement:<Error />

  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>,
)
