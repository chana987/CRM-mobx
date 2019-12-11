import React, { Component } from 'react';
import Client from './Client';
import Header from './Header';
import Popup from './Popup';
import { observer, inject } from 'mobx-react';
import '../../App.css';

@inject("CRMStore")
@observer
class Clients extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <Header />
                    </thead>
                    <tbody>
                        {this.props.CRMStore.clients.map(c => 
                            <Client c={c} key={c._id} />)}
                    </tbody>
                </table>
                <Popup />
            </div>
        );
    }
}

export default Clients;