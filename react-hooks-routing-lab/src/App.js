import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import Dog from './Components/Dog'
import selectDogByNum from './Components/selectDogByNum'

function App() {
  return (
    <div className="App">
    <nav>
      <Link to ="/dog/random">Dog</Link>{" "}
      <Link to ="/dog/random/:num">Dog by Numbers</Link>{" "}
      <Link to ="/dog/:breed">Dog by Breed</Link>{" "}


      {/* <Link to="/cat">Cat</Link> */}
    </nav>

    <Switch>
     <Route exact path="/dog/random" component={Dog}/>
     <Route path="/dog/random/:num" component={selectDogByNum}/>
     <Route path="/dog/:breed" component={Dog}/>
     {/* <Route path="/cat/random" component={Cat}/>
     <Route path="/cat/random/:num" component={Cat}/> */}
    </Switch>
    </div>
  );
}

export default App;
