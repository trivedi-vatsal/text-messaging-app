import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();


ReactDOM.render(
    <Router>
        <div className="container">
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Text SMS</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/Home">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer exact to="/Login">
                            <NavItem eventKey={2}>Login</NavItem>
                        </LinkContainer>
                        <LinkContainer exact to="/SignUp">
                            <NavItem eventKey={3}>SignUp</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={App} history={history}/>
            <Route path="/Home/" component={Home} history={history}/>
            <Route path="/Login" component={Login} history={history}/>
            <Route path="/SignUp" component={SignUp} history={history}/>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();