import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import eFlow from './components/pages/eFlow';
import IPO from './components/pages/IPO';
import eCrypto from './components/pages/eCrypto';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/eFlow' component={eFlow} />
          <Route path='/IPO' component={IPO} />
          <Route path='/eCrypto' component={eCrypto} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
