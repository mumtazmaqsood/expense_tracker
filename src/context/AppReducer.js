

export const AppReducer = (state, action) => {

    switch (action.type) {
        case 'DELETE_TRANSCATION':
            return{
                ...state,
                transcations: state.transcations
                    .filter(transcation =>transcation.id != action.payload)
            }
        default:
            return state;
    };

}