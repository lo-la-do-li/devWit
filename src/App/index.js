import React from 'react';
import NavBar from '../NavBar';
import Home from '../Home';
import GetMaterial from '../GetMaterial';
import MySet from '../MySet';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <section className="App">
      This is the devWit app. 
      <NavBar />
      <Switch>
        <Redirect exact path='/' to='/home' component={Home} />
        <Route path="/home" component={Home}/>
        <Route path="/get-material" component={GetMaterial}/>
        <Route path="/my-set" component={MySet}/>
      </Switch>
    </section>
  );
}

export default App;
