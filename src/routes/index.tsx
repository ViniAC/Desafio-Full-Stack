import React from "react";
import { Switch } from "react-router-dom";
import Route from './Route'
import Login from "../pages/login";
import List from "../pages/list";
import Register from '../pages/register'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/list" isPrivate component={List} />
      <Route path="/register" isPrivate exact component={Register} />
      <Route path="/register/:id" isPrivate component={Register} />

    </Switch>
  );
};

export default Routes;
