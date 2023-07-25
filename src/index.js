import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './component/about';
import Contact from './component/contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routering = createBrowserRouter([
    {
      path:'/',
      element: <App/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element: <Contact/>
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={routering} />);