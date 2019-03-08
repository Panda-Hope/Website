// @flow
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/index";
import Regex from "./Regex/index";
import React from "react";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/regex" component={Regex} />
                <Route path="*" component={Home} />
            </Switch>
        </Router>
    );
};

export default App;