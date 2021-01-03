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
        <Route path="/category" component={Category} />
        <Route path="/torebki" component={Bags} />
        <Route path="/about" component={About} />
        <Route path="/chusty" component={Shawl} />
        <Route path="/ubrania" component={Clothes} />
        <Route path="/kocyki" component={Blanket} />
        <Route path="/pluszaki" component={Mascots} />
      </Switch>
    </BrowserRouter>
  </BasicTemplate>
);
