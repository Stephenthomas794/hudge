const nameReducer = (state = 'null', action) => {
    switch(action.type){
        case 'NAMEACTION':
            return {
                name: action.payload
            };
        default:
            return {...state}
    }
};

export default nameReducer;