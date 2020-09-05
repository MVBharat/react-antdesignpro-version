import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import TotalSales from './TotalSales/TotalSales'
import Sales from './Sales/Sales';
import Visits from './Visits/Visits';
import Payments from './Payments/Payments';
import OperationalEffect from './OperationalEffect/OperationalEffect';
import SalesRanking from './SalesRanking/SalesRanking';
import './Dashboard.css';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            startDate: Date.today,
            endDate: Date.tomorrow
        }
    }
    render() {
        return (
            <div>
                <div className="top-view">
                    <TotalSales />
                    <Visits />
                    <Payments />
                    <OperationalEffect />
                </div>
                <div className="sales">

                    <ul className="sales-topbar">
                        <li>Sales</li>
                        <li>Visits</li>
                        <li className="flexgap"></li>
                        <li>All Day</li>
                        <li>All Week</li>
                        <li>All Month</li>
                        <li>All Year</li>
                        <li className="date-range">
                            <DateRangePicker
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                            />
                        </li>
                    </ul>
                    <div className="sales-details">
                        <div className="sales-charts">
                            <Sales />
                        </div>

                        <SalesRanking />
                    </div>
                </div>

            </div>
        )
    }
}
export default Dashboard