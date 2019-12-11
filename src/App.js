import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Actions from './components/Actions/Actions';
import Analytics from './components/Analytics/Analytics';
import Clients from './components/Clients/Clients';

@inject("CRMStore")
@observer
class App extends Component {
  componentDidMount = () => {
    this.props.CRMStore.getClients()
  }
  render() {
    return (
      <Router>  
        <div className="App">
          <header></header>
          <div className="links">
            <Link to="/clients">Clients</Link>
            <Link to="/actions">Actions</Link>
            <Link to="/analytics">Analytics</Link>
          </div>

          <Route exact path="/clients">
            <Clients />
          </Route>
          <Route exact path="/actions">
            <Actions />
          </Route>
          <Route exact path="/analytics">
            <Analytics />
          </Route>
        </div>
      </Router>    
    );
  }
}

export default App;