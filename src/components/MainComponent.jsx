import React from "react";
import { } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class MainComponent extends React.Component {
    state = {}
    render() {
        return (

            <>
                <Router>
                    <div><h1>My React App</h1></div>

                </Router>
            </>
        );
    }
}

export default MainComponent;