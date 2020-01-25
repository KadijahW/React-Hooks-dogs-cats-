import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import Dog from './Dog'


function App() {
  return (
    <div className="App">
  <nav>
  <Link to ="/dog/random">Dog</Link>{" "}
 
  </nav>

  <Switch>
  <Route exact path="/dog/random" component={Dog}/>

  </Switch>
    </div>
  );
}

export default App;
