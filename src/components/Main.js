import React from 'react';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    <Routes>
        <Route exact path="/" component={Login} />
    </Routes>
}

export default Main;