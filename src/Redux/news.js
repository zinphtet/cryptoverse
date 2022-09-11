import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': 'a3096eba63msh69ff0621ee3695ap1075b2jsn5a8e7127f0f3',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
	},
};
const initialState = {
	loading: true,
	error: '',
	news: [],
};
export const fetchNews = createAsyncThunk('fetchNews', (selected) => {
	return fetch(
		`https://bing-news-search1.p.rapidapi.com/news/search?q=${selected}&count=30&freshness=Day&textFormat=Raw&safeSearch=Off`,
		options
	)
		.then((response) => response.json())
		.then((response) => response)
		.catch((err) => err);
});

const newsSlice = createSlice({
	name: 'news slice',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchNews.fulfilled, (state, action) => {
				state.news = action.payload;
				state.loading = false;
			})
			.addCase(fetchNews.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false;
			});
	},
});

export default newsSlice.reducer;
