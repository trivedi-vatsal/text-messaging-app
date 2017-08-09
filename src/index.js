import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Login from './Login';
import SignUp from'./SignUp';
import {Navbar, Nav, NavItem}from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
const history = createBrowserHistory()

ReactDOM.render(
    <Router>
        <div className="container">
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="App">Text SMS</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}>
                            <NavLink exact to="Home">Home</NavLink>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <NavLink exact to="Login" >Login</NavLink>
                        </NavItem>
                        <NavItem eventKey="{3}">
                            <NavLink exact to="SignUp">Signup</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path="/App" component={App} history={history}/>
            <Route path="/Home" component={Home} history={history}/>
            <Route path="/Login" component={Login} history={history}/>
            <Route path="/SignUp" component={SignUp} history={history}/>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();