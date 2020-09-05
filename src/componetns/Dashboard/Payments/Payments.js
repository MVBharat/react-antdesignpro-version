import React from 'react'
import { Bar } from 'react-chartjs-2';
import './Payments.css';

function Payments() {

    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
            {
                label: '',
                data: [300, 450, 330, 380, 400, 450, 420, 480],
                backgroundColor: ['#63aafc', '#63aafc', '#63aafc', '#63aafc', '#63aafc', '#63aafc', '#63aafc', '#63aafc',],
            }
        ]
    }



    return (
        <div className="payments">
            <span>
                <p className="label">Payments</p>
                <p className="total"> $ 126,560 </p>
            </span>

            <div className="payments-graph">
                <Bar data={data} />
            </div>

            <span className="daily-status">
                <p>Conversion Rate 60%</p>
                {/* <p>60%</p> */}
            </span>
        </div>
    )
}

export default Payments
