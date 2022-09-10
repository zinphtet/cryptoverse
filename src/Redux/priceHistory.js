import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3096eba63msh69ff0621ee3695ap1075b2jsn5a8e7127f0f3',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
	},
};

const initialState = {
	priceHistory: [],
	loading: true,
	error: '',
};

export const fetchPriceHistory = createAsyncThunk(
	'fetchPriceHistory',
	(data) => {
		console.log(data);
		const { id, period } = data;
		return fetch(
			`https://coinranking1.p.rapidapi.com/coin/${id}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${period}`,
			options
		)
			.then((response) => response.json())
			.then((response) => response)
			.catch((err) => err);
	}
);

const priceHistorySlice = createSlice({
	name: 'price history',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchPriceHistory.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchPriceHistory.fulfilled, (state, action) => {
				state.priceHistory = action.payload;
				state.loading = false;
			})
			.addCase(fetchPriceHistory.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false;
			});
	},
});

export default priceHistorySlice.reducer;
