import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './charts/Charts';

class Analytics extends Component {
    render() {
        return (
            <div>
                <Badges />
                <Charts />
            </div>
        );
    }
}

export default Analytics;