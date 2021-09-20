import { combineReducers } from "redux";
import emailReducer from './EmailReducer';
import nameReducer from './NameReducer';

const allReducers = combineReducers({
    email : emailReducer,
    name : nameReducer
})

export default allReducers;
