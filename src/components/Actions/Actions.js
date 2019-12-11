import React, { Component } from 'react';
import AddClient from './AddClient';
import ClientInput from './ClientInput';
import Update from './Update';

class Actions extends Component {
    render() {
        return (
            <div>
                <h3>Update</h3>
                <ClientInput />
                <Update />
                <h3>Add Client</h3>
                <AddClient />
            </div>
        );
    }
}

export default Actions;