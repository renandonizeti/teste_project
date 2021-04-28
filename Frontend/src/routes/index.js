import React from 'react';
import {
  BrowserRouter,
  Switch, Route
} from 'react-router-dom';

import { Comments } from '../pages/Comments';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Comments} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
