import React from 'react';
import './TotalSales.css';

function TotalSales() {
    return (
        <div className="total-sales">
            <span>
                <p className="label">Total Sales</p>
                <p className="total"> $ 126,560 </p>
            </span>
            <span>
                <p>Wow Change 12%</p>
            </span>
            <span>
                <p>Dod Change 11%</p>
            </span>
            <span className="daily-status">
                <p>Daily Sales $12345</p>
            </span>
        </div>
    )
}

export default TotalSales
