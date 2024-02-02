import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import PlanetPage from './planets-page/planets-page.component.js';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';
import PlanetsA from './PlanetsA/index.js';
import PlanetsB from './PlanetsB/index.js';

export default function Root(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/planets/a" component={PlanetsA} />
        <Route path="/planets/b" component={PlanetsB} />
        <Redirect to="/planets/a" />
      </Switch>
    </BrowserRouter>
  );
}
