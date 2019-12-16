import React, { Component } from 'react';
import Moment from 'react-moment';
import { inject } from 'mobx-react';

@inject("CRMStore", "GeneralStore")
class Client extends Component {
    openPopup = () => {
        let GeneralStore = this.props.GeneralStore
        this.props.CRMStore.openPopup(this.props.c)
        GeneralStore.firstName = this.props.c.firstName
        GeneralStore.lastName = this.props.c.lastName
        GeneralStore.country = this.props.c.country
    }
    render() {
        let c = this.props.c

        return (
            <tr onClick={this.openPopup}>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.country}</td>
                <td><Moment format="DD/MM/YYYY">
                    {c.firstContact}
                </Moment>
                </td>
                <td>{c.emailType}</td>
                <td>{c.sold === true ? 'Yes' : 'No'}</td>
                <td>{c.owner}</td>
            </tr>
        );
    }
}

export default Client;