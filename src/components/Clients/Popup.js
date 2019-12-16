import React, { Component } from 'react';
import '../../App.css'
import { observer, inject } from 'mobx-react';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

@inject("CRMStore", "GeneralStore")
@observer
class Popup extends Component {
    inputHandler = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }

    closePopup = () => {
        let GeneralStore = this.props.GeneralStore
        this.props.CRMStore.closePopup()
        GeneralStore.firstName = ''
        GeneralStore.lastName = ''
        GeneralStore.country = ''
    }

    updateClient = () => {
        let GeneralStore = this.props.GeneralStore
        let CRMStore = this.props.CRMStore
        let updateInfo = [
            {
                id: CRMStore.openClient.id,
                field: 'firstName',
                newValue: GeneralStore.firstName
            },
            {
                id: CRMStore.openClient.id,
                field: 'lastName',
                newValue: GeneralStore.lastName
            },
            {
                id: CRMStore.openClient.id,
                field: 'country',
                newValue: GeneralStore.country
            },
        ]
        this.props.CRMStore.updateClient(updateInfo)
        this.props.CRMStore.closePopup()
    }

    render() {
        let GeneralStore = this.props.GeneralStore
        return (
            <div className="popup">
                <FontAwesomeIcon className="popup-icon" onClick={this.closePopup} icon={faTimesCircle}/>
                <div className="popup-field">
                    <label htmlFor="firstName">First Name: </label>
                    <input name="firstName" type="text"
                        value={GeneralStore.firstName}
                        onChange={this.inputHandler}/>
                </div>
                <div className="popup-field">
                    <label htmlFor="lastName">Last Name: </label>
                    <input name="lastName" type="text"
                        value={GeneralStore.lastName}
                        onChange={this.inputHandler}/>
                </div>
                <div className="popup-field">
                    <label htmlFor="country">Country: </label>
                    <input name="country" type="text"
                        value={GeneralStore.country}
                        onChange={this.inputHandler}/>
                </div>
                <button className="popup-button" onClick={this.updateClient}>Save</button>
            </div>
        );
    }
}

export default Popup;