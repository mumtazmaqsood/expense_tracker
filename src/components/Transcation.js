import React from 'react'

export const Transcation = ({transcation}) => {
    return (
            <li className="plus">
                    {transcation.description}
                    <span>{transcation.transcationamount}</span>
                    <button className="delete-btn">X</button>
            </li>
    )
}
