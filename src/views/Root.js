import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BasicTemplate from 'templates/BasicTemplate';
import Home from 'views/Home';
import Contact from 'views/Contact';
import Products from 'views/Products';
import Knitting from 'views/Knitting';

const Root = () => (
  <BasicTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} />
        <Route path="/knitting" component={Knitting} />
      </Switch>
    </BrowserRouter>
  </BasicTemplate>
);

export default Root;
