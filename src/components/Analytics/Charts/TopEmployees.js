import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { observer, inject } from 'mobx-react'

@inject("CRMStore")
@observer
class TopEmployees extends PureComponent {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (
            <div>
                <h3>Top Employees</h3>
             {/* <ResponsiveContainer width='100%'> */}
                <BarChart
                    layout="vertical"
                    width={500}
                    height={300}
                    data={this.props.CRMStore.topEmployees}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="numClients" name="Number of clients" fill="#0088FE" />
                </BarChart>
             {/* </ResponsiveContainer> */}
            </div>
        );
    }
}
export default TopEmployees