import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Colors from "./Colors";
import ColorDetail from "./ColorDetail";
import AddColorForm from "./AddColorForm";

function Routes(){
  return (
<Switch>
  <Route exact path="/colors">
    <Colors />
  </Route>
  <Route path="/colors/:color">
    <ColorDetail />
  </Route>
  <Route exact path="/colors/new">
    <AddColorForm />
  </Route>
  <Redirect to="/colors" />
</Switch>
  )
}

export default Routes