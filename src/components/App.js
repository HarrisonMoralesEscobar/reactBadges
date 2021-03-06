import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

export default function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges"  component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/" component={Home}/>
          <Route component={NotFound} />
        </Switch>   
      </Layout>
    </BrowserRouter>
  );
}