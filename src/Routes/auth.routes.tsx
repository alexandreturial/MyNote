import React, {} from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../Page/Login';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login}/>
    </BrowserRouter>
  );
}

export default Routes;