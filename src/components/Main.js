import React from 'react';
import Login from './Login';
import Settings from './settings'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/settings" element={<Settings />} />
        </Routes>
    </Router>
);

export default Main;