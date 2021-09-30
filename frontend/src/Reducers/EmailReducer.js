const emailReducer = (state = 'null', action) => {
    switch(action.type){
        case 'EMAILACTION':
            return {
                email: action.payload
            };

        default:
            return {...state}
    }
};

export default emailReducer;