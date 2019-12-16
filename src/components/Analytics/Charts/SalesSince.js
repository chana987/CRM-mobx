import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Moment from 'react-moment';
import { observer, inject } from 'mobx-react';
import moment from 'moment';

@inject("CRMStore")
@observer
class SalesSince extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    getDateArray = (start, end) => {
        let arr = new Array();
        let dt = new Date(start);
        while (dt <= end) {
            arr.push(new Date(dt));
            dt.setDate(dt.getDate() + 100);
        }
        return arr;
    }

    salesByDay = () => {
        let startDate = moment().subtract(30, 'days')
        console.log(startDate)
        let newSalesArray =[]
        this.props.CRMStore.soldClients.map(c => (moment(c.firstContact).isAfter(moment(startDate))) ? newSalesArray.push(c) : null)
        console.log(newSalesArray)
        let sales = []
        let days = this.getDateArray(startDate, new Date())
        for (let day of days) {
            let sales = newSalesArray.filter(c => moment(c.firstContact).format('YY-MMM-DD') === moment(day).format('YY-MMM-DD')).length
            // sales.push({ day: day, sales: sales })
        }
        console.log(sales)
        return sales
    }

    render() {
        let data = this.salesByDay()
        return (
            <div>
                <h3>Sales Since <Moment subtract={{ months: 1 }} format="MMM-DD">{new Date()}</Moment></h3>
                {/* <ResponsiveContainer width='100%' > */}
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#f04668" />
                </LineChart>
                {/* </ResponsiveContainer> */}
            </div>
        );
    }
}
export default SalesSince