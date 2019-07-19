import React from 'react';
import NavigationBar from './components/NavigationBar'
import TwitterContainer from './containers/TwitterContainer'
import PhoneContainer from './containers/PhoneContainer'
import Landing from './components/Landing'

import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">

    <NavigationBar />
    <Switch>
      <Route exact path="/searchTwitter" component={TwitterContainer} />
      <Route exact path="/phoneAnalyzer" component={PhoneContainer} />
      <Route exact path="/" component={Landing} />
    </Switch>




    </div>
  );
}

export default App;
