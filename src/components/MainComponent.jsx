import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./MainNav";
import Home from "./Home"


class MainComponent extends React.Component {
    state = {}
    render() {
        return (

            <>
                <Router>

                    <NavBar />
                    <div>
                        <Route path="/" exact component={Home} />
                        {/* <Route path="/profile" component={ProfilePage} /> */}
                    </div>

                </Router>
            </>
        );
    }
}

export default MainComponent;