import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTranscation = () => {
    const [description, setDescription] = useState('');
    const [transcationAmount, setTranscationAmount] = useState(0);

    const {addTranscation} = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const newTranscation = {
            id: new Date().getTime(), 
            description, 
            transcationamount: +transcationAmount
        }
        console.log(newTranscation);

        addTranscation(newTranscation);
        
    }


    return (
        
        <div>
            <h3>Add New Transcation</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                    id="description"
                    value = {description}
                    onChange = { (e) => setDescription(e.target.value)}
                     placeholder="Details of Transcation"/>
                </div>

                <div className="form-control">
                    <label htmlFor="transcationamount">Transcation Amount</label>
                    <input type="number" 
                    id="transcationamount"
                    value = {transcationAmount} 
                    onChange = { (e) => setTranscationAmount(e.target.value)}
                    placeholder="Enter Transcation amount" />

                </div>
                <button className="btn"> Add Transcation</button>
            </form>
        </div>
    )
}
