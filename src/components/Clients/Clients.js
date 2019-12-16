import React, { Component } from 'react';
import Client from './Client';
import Header from './Header';
import { observer, inject } from 'mobx-react';
import Popup from './Popup';
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
                            <Client c={c} key={c.id} />)}
                    </tbody>
                </table>
                {this.props.CRMStore.popupOpen === true ? <Popup /> : null}
            </div>
        );
    }
}

export default Clients;