// @flow
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/index";
import React from "react";

function App() {
    return (
        <Router>
            <>
                <Route path="/" component={Home} />
            </>
        </Router>
    );
};

export default App;