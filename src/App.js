import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/projects'
import Forms from './components/form';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={Projects} />
          <Route path="/form" component={Forms} />
        </Router>
    </div>
  );
}

export default App;
