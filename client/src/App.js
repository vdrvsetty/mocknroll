import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import CreateApi from './components/CreateApi';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/createapi">
                    <CreateApi />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
