import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar';
import CategoriesContainer from './containers/CategoriesContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/categories' component={CategoriesContainer} /> 
      </div>
    </Router>
  );
}

export default App;
