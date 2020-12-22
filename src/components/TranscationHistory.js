
import React from 'react'

export const TranscationHistory = () => {
    return (
        <div>
            <h3>Transcation History</h3>
            <ul className="list">
                <li className="plus">
                    Project1 Income
                    <span>$1000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Project1 Salary
                    <span>-$500</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}

