import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer';
import { persistStore } from "redux-persist";
const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        thunk,
        // thunkMiddleware,
        loggerMiddleware
    ))
);

const persistor = persistStore(store);

export  { store, persistor };