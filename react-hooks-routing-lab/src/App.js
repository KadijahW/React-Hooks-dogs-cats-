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
  <Link to ="/dog/random/:num">Dog by Numbers</Link>{" "}
  <Link to ="/dog/:breed">Dog by Breed</Link>{" "}
  </nav>

  <Switch>
  <Route exact path="/dog/random" component={Dog}/>
  <Route path="/dog/random/:num" component={Dog}/>
  <Route path="/dog/:breed" component={Dog}/>
  </Switch>
    </div>
  );
}

export default App;
