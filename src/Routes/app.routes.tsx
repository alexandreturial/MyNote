import React, {} from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import TesteSlider from '../components/TesteSlider';

import Home from '../Page/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/teste" exact component={TesteSlider}/>
          </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default Routes;