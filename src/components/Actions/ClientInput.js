import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css'

@inject("CRMStore", "GeneralStore")
@observer
class ClientInput extends Component {
    inputHandler = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }

    render() {
        return (
            <div className="client-input">
                <label htmlFor="clientInput">Client</label>
                <input type="text" name="clientInput" id="clientInput" list="clientList" placeholder="Client name"
                        onChange={this.inputHandler}
                        value={this.props.GeneralStore.clientInput}/>
                <datalist id="clientList">
                    {this.props.CRMStore.clients.map(c => 
                        <option key={c.id}>{c.firstName} {c.lastName}</option>)}
                </datalist>
            </div>
        );
    }
}

export default ClientInput;