import { combineReducers } from "redux";
import emailReducer from './EmailReducer';

const allReducers = combineReducers({
    email : emailReducer
})

export default allReducers;
