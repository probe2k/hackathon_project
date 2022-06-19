import React from 'react';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Login />} />
        </Routes>
    </Router>
);

export default Main;