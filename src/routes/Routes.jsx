import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import HomePage from '../pages/HomePage/HomePage';

const Routes = createBrowserRouter([
   {
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        }
    ]
   } 
])

export default Routes;