import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BasicTemplate } from 'templates/BasicTemplate';
import { Home } from 'views/Home';
import { Contact } from 'views/Contact';
import { Products } from 'views/Products';
import { About } from './About';
import { Category } from './Category';

export const Root = () => (
  <BasicTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </BasicTemplate>
);
