import React, { useContext } from 'react'

import {GlobalContext} from '../context/GlobalState'



export const AccountSummary = () => {
    const {transcations} = useContext(GlobalContext);
    const transcationAmounts = transcations.map(transcation => transcation.transcationamount);
    console.log(transcationAmounts)

    const income = transcationAmounts.filter(transcation => transcation > 0)
    .reduce( (acc, transcation) => (acc += transcation),0).toFixed(2);
    console.log(income);
        
    
    const expense = transcationAmounts
        .filter(transcation => transcation < 0)
        .reduce( (acc, transcation) => (acc -= transcation), 0).toFixed(2);
        console.log(expense);

    return (
        <div className= "inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money_plus"> {income}</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className="money_minus"> {expense}</p>
            </div>
        </div>
    )
}