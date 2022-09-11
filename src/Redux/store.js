import { combineReducers, configureStore } from '@reduxjs/toolkit';
import allCoinsReducer from './allcoins';
import coinReducer from './coin';
import priceHistoryReducer from './priceHistory';
import newsReducer from './news';
import exchangesReducer from './exchanges';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	allcoins: allCoinsReducer,
	coin: coinReducer,
	priceHistory: priceHistoryReducer,
	news: newsReducer,
	exchanges: exchangesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
