import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BasicTemplate } from 'templates/BasicTemplate';
import { Home } from 'views/Home';
import { Contact } from 'views/Contact';
import Bags from 'views/Bags';
import { About } from './About';
import { Category } from './Category';
import Shawl from './Shawl';
import Clothes from './Clothes';
import Blanket from './Blanket';
import Mascots from './Mascots';
import { routes } from '../routes/index';

export const Root = () => (
  <Provider store={store}>
    <BasicTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.contact} component={Contact} />
          <Route exact path={routes.category} component={Category} />
          <Route path={routes.about} component={About} />
          <Route path={routes.torebki} component={Bags} />
          <Route path={routes.chusty} component={Shawl} />
          <Route path={routes.ubrania} component={Clothes} />
          <Route path={routes.kocyki} component={Blanket} />
          <Route path={routes.pluszaki} component={Mascots} />
        </Switch>
      </BrowserRouter>
    </BasicTemplate>
  </Provider>
);
