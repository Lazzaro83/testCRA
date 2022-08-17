import { createSlice } from "@reduxjs/toolkit"

const postSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers: {
		getAll: (state, action) => {
			console.log(action.payload)
			state.push(action.payload)
		}
	}
})

export const { getAll } = postSlice.actions;

export default postSlice.reducer
