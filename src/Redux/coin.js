import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	coin: {},
	loading: true,
	error: '',
};
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3096eba63msh69ff0621ee3695ap1075b2jsn5a8e7127f0f3',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
	},
};

export const fetchCoin = createAsyncThunk('fetchCoin', (id) => {
	console.log({ id });
	return fetch(
		`https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
		options
	)
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => err);
});

const coinSlice = createSlice({
	name: 'coin slice',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchCoin.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchCoin.fulfilled, (state, action) => {
				state.coin = action.payload;
				state.loading = false;
			})
			.addCase(fetchCoin.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default coinSlice.reducer;
