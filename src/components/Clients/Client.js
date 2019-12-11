import React, { Component } from 'react';
import Moment from 'react-moment';

class Client extends Component {
    render() {
        let c = this.props.c
        return (
            <tr>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.country}</td>
                <td><Moment format="YYYY/MM/DD">
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