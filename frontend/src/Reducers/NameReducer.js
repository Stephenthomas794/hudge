const nameReducer = (state = 'null', action) => {
    switch(action.type){
        case 'NAMEACTION':
            return {
                ...state,
                name: action.payload
            };
        default:
            return null
    }
};

export default nameReducer;