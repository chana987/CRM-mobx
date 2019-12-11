import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
            <div>
                <button>X</button>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input name="firstName" type="text" placeholder="Jane" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input name="lastName" type="text" placeholder="Smith" />
                </div>
                <div>
                    <label htmlFor="country">Country: </label>
                    <input name="country" type="text" placeholder="Monaco" />
                </div>
                <button>Update</button>
            </div>
        );
    }
}

export default Popup;