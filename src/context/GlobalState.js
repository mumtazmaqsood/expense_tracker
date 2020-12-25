import { createContext, useReducer } from "react";

import {AppReducer} from './AppReducer'

const intialState = {
    transcations : [ ]
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

    function addTranscation(transcation){
        dispatch({
            type: 'ADD_TRANSCATION',
            payload: transcation
        });
    }

    return(
        <GlobalContext.Provider value = {
            {transcations : state.transcations,
            delTranscation,
            addTranscation
        }
        }>
            {children}
    </GlobalContext.Provider>
    );
}
