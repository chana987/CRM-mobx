import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Country</th>
                <th>First Contact</th>
                <th>Email</th>
                <th>Sold</th>
                <th>Owner</th>
            </tr>
        );
    }
}

export default Header;