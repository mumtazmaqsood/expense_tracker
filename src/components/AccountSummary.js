import React from 'react'

export const AccountSummary = () => {
    return (
        <div className= "inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money_plus">$0.00</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className="money_minus"> $0.00</p>
            </div>
        </div>
    )
}