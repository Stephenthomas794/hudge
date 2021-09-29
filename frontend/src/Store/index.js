import { createStore, combineReducers, applyMiddleware } from 'redux';
import allReducers from '../Reducers';
import {persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({

})

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, persistReducer);



const store = createStore(
    allReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;