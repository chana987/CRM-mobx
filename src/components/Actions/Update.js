import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("CRMStore")
@observer
class Update extends Component {
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="ownership">Transfer ownership to</label>
                    <input type="text" name="owner" id="owner" list="ownerList"/>
                    <datalist id="ownerList">
                        {this.props.CRMStore.owners.map((o, i) =>
                            <option key={i}>{o}</option>)}
                    </datalist>
                    <button>Transfer</button>
                </div>
                <div>
                    <label htmlFor="email">Send Email</label>
                    <input type="text" name="email" id="email" list="emailList"/>
                    <datalist id="emailList">
                        {this.props.CRMStore.clients.map(c =>
                            <option key={c._id}>{c.email}</option>)}
                    </datalist>
                    <button>Send</button>
                </div>
                <div>
                    <label htmlFor="sale">Declare sale!</label>
                    <span></span>
                    <button>Declare</button>
                </div>
            </div>
        );
    }
}

export default Update;