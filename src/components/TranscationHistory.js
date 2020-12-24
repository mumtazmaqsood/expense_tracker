
import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Transcation } from './Transcation';


export const TranscationHistory = () => {
    const {transcations} = useContext(GlobalContext);
    console.log(transcations)
    return (
        <div>
            <h3>Transcation History</h3>
            <ul className="list">
                { transcations.map( transcation => (
                    <Transcation key={transcation.id} transcation = {transcation} />
                ))   
                }
            </ul>
        </div>
    )
}

