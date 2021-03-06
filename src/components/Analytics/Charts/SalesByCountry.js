import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { observer, inject } from 'mobx-react'

@inject("CRMStore")
@observer
class SalesByCountry extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (
            <div>
                <h3>Sales by Country</h3>
                {/* <ResponsiveContainer width='100%' > */}
                <BarChart
                    width={500}
                    height={300}
                    data={this.props.CRMStore.salesByCountry}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis dataKey="country" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="numClients" name="Number of clients" fill="#FFBB28" />
                </BarChart>
                {/* </ResponsiveContainer> */}
            </div>
        );
    }
}
export default SalesByCountry