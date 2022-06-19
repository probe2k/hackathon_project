import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            <Login />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
