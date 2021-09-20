const CombinedReducer = (state, action) => {
    switch(action.type){
        case 'COMBINEDACTION':
            return {
                ...state,
                email: action.payload[0],
                name: action.payload[1]
            };
        default:
            return null
    }
};

export default CombinedReducer;