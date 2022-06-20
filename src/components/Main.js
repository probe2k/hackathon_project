import React from 'react';
import Login from './Login';
import Settings from './settings'
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/home" element={<Home />} />
        </Routes>
    </Router>
);

export default Main;