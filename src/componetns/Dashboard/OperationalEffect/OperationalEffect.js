import React from 'react'
import './OperationalEffect.css';

function OperationalEffect() {
    const containerStyles = {
        height: 10,
        width: '10rem',
        backgroundColor: "#f5f5f5",
        border: '1px solid #f5f5f5'
    }

    const fillerStyles = {
        height: '100%',
        width: '8rem',
        backgroundColor: '#51c3c2',

        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        width: 5,
        color: 'white',
        fontWeight: 'bold',
    }

    return (
        <div className="op-effect">
            <span>
                <p className="label">Operational Effect</p>
                <p className="total"> 78% </p>
            </span>

            <div className="op-progress">
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                        <span style={labelStyles}></span>
                    </div>
                </div>
            </div>

            <span className="daily-op-status">
                <p>Wow Change 12%</p>
                <p>Dod Change 11%</p>
            </span>
        </div>
    )
}

export default OperationalEffect
