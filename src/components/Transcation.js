import React from 'react'

export const Transcation = ({transcation}) => {
        
        const sign = transcation.transcationamount > 0 ? '+':'-';

        const transcationType = transcation.transcationamount > 0 ? "plus": "minus";
    return (
            <li className= {transcationType}>
                {transcation.description}
                <span>{sign}${Math.abs(transcation.transcationamount)}</span>
                <button className="delete-btn">X</button>
            </li>
    )
}
