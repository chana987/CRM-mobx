import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import '../../App.css'

@inject("GeneralStore", "CRMStore")
@observer
class AddClient extends Component {
    inputHandler = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }

    addClient = () => {
        let General = this.props.GeneralStore
        let newClient = {
            firstName: General.firstName,
            lastName: General.lastName,
            country: General.country,
            newOwner: General.newOwner,
            emailType: null,
            email: ''
        }

        if (General.firstName === '' || General.lastName === '' || General.country === '' || General.newOwner === '') {
            toast.warn('Incomplete input')
            return
        }
        this.props.CRMStore.addClient(newClient)
    }

    render() {
        return (
            <div>
                <div className="new-form">
                    <label htmlFor="firstName">First name: </label>
                    <input type="text" name="firstName" id="firstName"
                        onChange={this.inputHandler}
                        value={this.props.GeneralStore.firstName} />

                    <label htmlFor="lastName">Last name: </label>
                    <input type="text" name="lastName" id="lastName"
                        onChange={this.inputHandler}
                        value={this.props.GeneralStore.lastName} />

                    <label htmlFor="country">Country: </label>
                    <input type="text" name="country" id="country"
                        onChange={this.inputHandler}
                        value={this.props.GeneralStore.country} />

                    <label htmlFor="newOwner">Owner: </label>
                    <input type="text" name="newOwner" id="newOwner"
                        onChange={this.inputHandler}
                        value={this.props.GeneralStore.newOwner} />
                </div>
                <button onClick={this.addClient}>Add New Client</button>
            </div>
        );
    }
}

export default AddClient;