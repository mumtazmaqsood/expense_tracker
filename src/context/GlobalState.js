import { createContext, useReducer } from "react";

import {AppReducer} from './AppReducer'

const intialState = {
    transcations : [
        {id:1, description:"Income1", transcationamount:5000},
        {id:2, description:"Expense1", transcationamount:-500},
        {id:3, description:"Income2", transcationamount:200},
        {id:4, description:"Expense2", transcationamount:-1200}
    ]
}


export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    function delTranscation(id) {
        dispatch({
            type: 'DELETE_TRANSCATION',
            payload: id
        });
    }

    return(
        <GlobalContext.Provider value = {
            {transcations : state.transcations,
            delTranscation}
        }>
            {children}
    </GlobalContext.Provider>
    );
}
