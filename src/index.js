import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import { CRMStore as CRM } from './stores/CRMStore';
import { GeneralStore as general } from './stores/GeneralStore';

let CRMStore = new CRM()
let GeneralStore = new general()
let stores = { CRMStore, GeneralStore}

ReactDOM.render(<Provider {...stores}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();