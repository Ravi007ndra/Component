import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};

const rootReducer = combineReducers({

    product: productReducer,

});

const makeConfiguredStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export const makeStore = () => {
    const isServer = typeof window === 'undefined';
    if (isServer) {
        return makeConfiguredStore();
    } else {
        const persistedReducer = persistReducer(persistConfig, rootReducer);
        let store = configureStore({
            reducer: persistedReducer,
        });
        store.__persistor = persistStore(store);
        return store;
    }
};
