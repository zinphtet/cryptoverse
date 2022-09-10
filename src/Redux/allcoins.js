import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3096eba63msh69ff0621ee3695ap1075b2jsn5a8e7127f0f3',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
	},
};

const initialState = {
	allcoins: {},
	loading: true,
	error: '',
};

export const fetchAllCoins = createAsyncThunk('fetchAllcoins', () => {
	return fetch(
		'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
		options
	)
		.then((response) => response.json())
		.then((data) => data);
});

const AllCoinsSlice = createSlice({
	name: 'allcoin slice',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllCoins.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchAllCoins.fulfilled, (state, action) => {
				state.loading = false;
				// console.log({ action });
				state.allcoins = action.payload;
			})
			.addCase(fetchAllCoins.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default AllCoinsSlice.reducer;
