import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Colors from "./Colors";
import ColorDetail from "./ColorDetail";
import AddColorForm from "./AddColorForm";


// colors list and form need access to 'colors' state
//place your functions and state where you need access to them
// don't lift state any higher than you need to
//this is agood place for functions to be passed as props --
//since all components are being rendered here!

function Routes(){
  return (
<Switch>
  <Route exact path="/colors">
    <Colors />
  </Route>
  <Route exact path="/colors/new">
    <AddColorForm />
  </Route>
    {/* can be an exact path */}
  <Route exact path="/colors/:color">
    <ColorDetail />
  </Route>
  <Redirect to="/colors" />
</Switch>
  )
}

export default Routes


