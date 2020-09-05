import React from 'react'
import { Line } from 'react-chartjs-2';
import './Visits.css';

function Visits() {

    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
            {
                label: '',
                data: [200, 650, 300, 380, 300, 650, 400, 700],
                backgroundColor: ['#9864e4'],
                borderColor: ['#9864e4'],
            }
        ]
    }



    return (
        <div className="visits">
            <span>
                <p className="label">Visits</p>
                <p className="total"> $ 126,560 </p>
            </span>

            <div className="visits-graph">
                <Line data={data} />
            </div>

            <span className="daily-status">
                <p>Daily Visits $12345</p>
            </span>
        </div>
    )
}

export default Visits
