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
        let GeneralStore = this.props.GeneralStore

        if (GeneralStore[event.target.className] === '' || GeneralStore.clientInput === '') {
            toast.warn('Incomplete input')
            return
        }
        let client = this.props.CRMStore.clients.find(c => `${c.firstName} ${c.lastName}` === GeneralStore.clientInput)
        let updateInfo = [
            {
                id: client.id,
                field: event.target.className,
                newValue: GeneralStore[event.target.className]
            }
        ]
        this.props.CRMStore.updateClient(updateInfo)
        GeneralStore[event.target.className] = ''
        GeneralStore.clientInput = ''
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
                        <option key={i} >{o}</option>)}
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