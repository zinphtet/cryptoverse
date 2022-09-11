import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3096eba63msh69ff0621ee3695ap1075b2jsn5a8e7127f0f3',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
	},
};

const initialState = {
	exchanges: {},
	loading: true,
	error: '',
};

export const fetchExchanges = createAsyncThunk('fetchExchanges', () => {
	return fetch(
		'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc',
		options
	)
		.then((response) => response.json())
		.then((response) => response)
		.catch((err) => err);
});

const exchangesSlice = createSlice({
	name: 'exchange slice',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchExchanges.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchExchanges.fulfilled, (state, action) => {
				state.exchanges = action.payload;
				state.loading = false;
			})
			.addCase(fetchExchanges.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false;
			});
	},
});

export default exchangesSlice.reducer;
