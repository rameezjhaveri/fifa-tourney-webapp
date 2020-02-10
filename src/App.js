import React from 'react';
import './App.css';
import Navigator from './components/Navigator'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
