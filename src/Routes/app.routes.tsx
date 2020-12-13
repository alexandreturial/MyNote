import React, {} from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../Page/Home';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Route path="/" exact component={Home}/>
        </Layout>
    </BrowserRouter>
  );
}

export default Routes;