import React, { Component } from 'react';
import TopEmployees from './TopEmployees';
import SalesByCountry from './SalesByCountry';
import SalesSince from './SalesSince';
import ClientAcquisition from './ClientAcquisition';

class Charts extends Component {
    render() {
        return (
            <div className="charts">
                <TopEmployees />
                <SalesByCountry />
                <SalesSince />
                <ClientAcquisition />
            </div>
        );
    }
}

export default Charts;