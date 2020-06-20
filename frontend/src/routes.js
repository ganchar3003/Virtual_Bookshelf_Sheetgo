import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Book from './pages/Book';
import Category from './pages/Category';
import Form from './pages/Form';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/book" component={Book} />
            <Route path="/category" component={Category} />
            <Route path="/form" component={Form} />
        </Switch>
    </BrowserRouter>
);

export default Routes;