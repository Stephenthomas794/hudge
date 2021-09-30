import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from '../Reducers';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const persistedStore = persistedStore(Store);
*/
const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const Store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk)
    ));

export default Store;