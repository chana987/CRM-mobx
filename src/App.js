import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Actions from './components/Actions/Actions';
import Analytics from './components/Analytics/Analytics';
import Clients from './components/Clients/Clients';
import { ToastContainer } from 'react-toastify';

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
            <Link to="/clients" className="link">Clients</Link>
            <Link to="/actions" className="link">Actions</Link>
            <Link to="/analytics" className="link">Analytics</Link>
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
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
        </div>
      </Router>    
    );
  }
}

export default App;