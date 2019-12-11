import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("CRMStore")
@observer
class ClientInput extends Component {
    render() {
        return (
            <div>
                <label htmlFor="clientInput">Client</label>
                <input type="text" name="clientInput" id="clientInput" list="clientList"/>
                <datalist id="clientList">
                    {this.props.CRMStore.clients.map(c => 
                        <option key={c._id}>{c.firstName} {c.lastName}</option>)}
                </datalist>
            </div>
        );
    }
}

export default ClientInput;