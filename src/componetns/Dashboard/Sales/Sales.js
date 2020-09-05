import React from 'react'
import {Bar} from 'react-chartjs-2';

function Sales() {
    
    const data = {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12],
        datasets: [
            {
                label: '',
                data: [200,280,230,650,400,340, 530, 850, 500, 900, 700, 600],                
                backgroundColor: ['#63aafc','#63aafc','#63aafc','#63aafc','#63aafc','#63aafc','#63aafc','#63aafc','#63aafc','#63aafc','#63aafc','#63aafc',],  
                // fillColor: ['#63aafc'],  
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Store Sales Trend'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 1000,
                        stepSize: 200
                    }
                }
            ]

        }
    }
    return (
        <div className="sales-charts">
            <Bar data={data} options={options} />            
        </div>
    )
}

export default Sales
