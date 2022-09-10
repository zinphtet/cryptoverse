import { configureStore } from '@reduxjs/toolkit';
import allCoinsReducer from './allcoins';
import coinReducer from './coin';
import priceHistoryReducer from './priceHistory';
export const store = configureStore({
	reducer: {
		allcoins: allCoinsReducer,
		coin: coinReducer,
		priceHistory: priceHistoryReducer,
	},
});
