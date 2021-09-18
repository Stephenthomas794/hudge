import { combineReducers } from "redux";
import emailReducer from './EmailReducer';

export default combineReducers({
    email:emailReducer
});
