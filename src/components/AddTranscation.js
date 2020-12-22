import React from 'react'

export const AddTranscation = () => {
    return (
        <div>
            <h3>Add New Transcation</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" placeholder="Details of Transcation"/>
                </div>

                <div className="form-control">
                    <label htmlFor="transcationamount">Transcation Amount</label>
                    <input type="number" id="transcationamount" placeholder="Enter Transcation amount" />

                </div>
                <button className="btn"> Add Transcation</button>
            </form>
        </div>
    )
}
