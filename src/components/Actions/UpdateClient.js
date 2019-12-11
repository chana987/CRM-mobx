import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import '../../App.css'

@inject("CRMStore", "GeneralStore")
@observer
class Update extends Component {
    inputHandler = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }

    updateClient = (event) => {
        event.persist()
        let field = event.target.className
        let GeneralStore = this.props.GeneralStore

        if (GeneralStore[field] === '' || GeneralStore.clientInput === '') {
            toast.warn('Incomplete input')
            return
        }

        this.props.CRMStore.updateClient(GeneralStore.clientInput, field, GeneralStore[field])
    }

    render() {
        return (
            <div className="update-form">
                <label htmlFor="ownership">Transfer ownership to</label>
                <input type="text" name="owner" id="owner" list="ownerList" placeholder="Owner"
                    onChange={this.inputHandler}
                    value={this.props.GeneralStore.owner} />
                <datalist id="ownerList">
                    {this.props.CRMStore.owners.map((o, i) =>
                        <option key={i}>{o}</option>)}
                </datalist>
                <button className="owner" onClick={this.updateClient}>Transfer</button>

                <label htmlFor="emailType">Send Email</label>
                <input type="text" name="emailType" id="emailType" list="emailTypeList" placeholder="Email type"
                    onChange={this.inputHandler}
                    value={this.props.GeneralStore.emailType} />
                <datalist id="emailTypeList">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </datalist>
                <button className="emailType" onClick={this.updateClient}>Send</button>

                <label htmlFor="sale">Declare sale!</label>
                <span></span>
                <button className="sold" onClick={this.updateClient}>Declare</button>
            </div>
        );
    }
}

export default Update;