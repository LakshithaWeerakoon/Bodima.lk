import './index.css';

import React from 'react';
import {routes} from "./routes/Routes";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={routes}/>
    </React.StrictMode>
);

reportWebVitals();
