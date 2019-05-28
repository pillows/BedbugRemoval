import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";
import Donate from "./Donate";
import About from "./About";
function Routing() {
    return (
      <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/donate" component={Donate} />
                <Route path="/about" component={About} />
            </Switch>
          
        </div>
      </Router>
    );
  }

  export default Routing;