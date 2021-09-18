import { FETCH_EMAIL, NEW_EMAIL } from "../Actions/types";

const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}
