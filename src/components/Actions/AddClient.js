import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from "react-router-dom";
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
            owner: General.newOwner,
            emailType: null,
            email: '',
            sold: false,
            firstContact: new Date()
        }

        if (General.firstName === '' || General.lastName === '' || General.country === '' || General.newOwner === '') {
            toast.warn('Incomplete input')
            return
        }
        this.props.CRMStore.addClient(newClient)
        General.firstName = ''
        General.lastName = ''
        General.country = ''
        General.newOwner = ''
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
                    <input type="text" name="newOwner" id="newOwner" list="newOwnerList"
                        onChange={this.inputHandler}
                        value={this.props.GeneralStore.newOwner} />
                    <datalist id="newOwnerList">
                        {this.props.CRMStore.owners.map((o, i) =>
                            <option key={i}>{o}</option>)}
                    </datalist>
                </div>
                <Link to="/clients"><button onClick={this.addClient}>Add New Client</button></Link>
            </div>
        );
    }
}

export default AddClient;