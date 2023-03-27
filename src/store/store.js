import { compose, applyMiddleware, createStore } from 'redux';
import {persistStore , persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { rootReducer } from './root-reducer';

import { logger } from 'redux-logger';

const middlewares = [logger];

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['bucket']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);


