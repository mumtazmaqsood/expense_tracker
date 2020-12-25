import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';



export const Transcation = ({transcation}) => {
        
        const sign = transcation.transcationamount > 0 ? '+':'-';

        const transcationType = transcation.transcationamount > 0 ? "plus": "minus";

        const { delTranscation } = useContext(GlobalContext)
    return (
            <li className= {transcationType}>
                {transcation.description}
                <span>{sign}${Math.abs(transcation.transcationamount)}</span>
                <button className="delete-btn" onClick={ ()=> delTranscation(transcation.id)}>X</button>
            </li>
    )
}
