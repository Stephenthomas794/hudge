const emailReducer = (state = 'null', action) => {
    switch(action.type){
        case 'EMAILACTION':
            return {
                ...state,
                email: action.payload
            };
        default:
            return null
    }
};

export default emailReducer;