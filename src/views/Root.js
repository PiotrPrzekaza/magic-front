import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BasicTemplate } from 'templates/BasicTemplate';
import { Home } from 'views/Home';
import { Contact } from 'views/Contact';
import { Bags } from 'views/Bags';
import { About } from './About';
import { Category } from './Category';
import { Shawl } from './Shawl';
import { Clothes } from './Clothes';
import { Blanket } from './Blanket';
import { Mascots } from './Mascots';

export const Root = () => (
  <BasicTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/category" component={Category} />
        <Route path="/category/torebki" component={Bags} />
        <Route path="/about" component={About} />
        <Route path="/category/chusty" component={Shawl} />
        <Route path="/category/ubrania" component={Clothes} />
        <Route path="/category/kocyki" component={Blanket} />
        <Route path="/category/pluszaki" component={Mascots} />
      </Switch>
    </BrowserRouter>
  </BasicTemplate>
);
