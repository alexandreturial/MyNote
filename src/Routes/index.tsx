import React from 'react';
import {BrowserRouter} from 'react-router-dom';


import App from './app.routes';
import Auth from './auth.routes';


const Routes: React.FC = () =>{
    const  logged = localStorage.getItem('@my-task-login:') !== null ? localStorage.getItem('@my-task-login:') : null;
   
    return(
        <BrowserRouter>
            {logged !== null ? <App/> : <Auth />}
        </BrowserRouter>
    );
}

export default Routes;