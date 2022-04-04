import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' // no need of thunk thunk is now a part of redux toolkit
import axios from 'axios'

const initialState = {
  loading: false,
  users: [],
  error: null,
}

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  // using thunk 'users/getUsers' is nothing more than just a name you can give anyting on there
  let response = await axios.get('https://jsonplaceholder.typicode.com/users#')
  return response.data
})

const userListSlice = createSlice({
  name: 'users', // name of the state
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        // promise based , used instad of the switch statement in the normal redux
        state.loading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload // this will be the data got rom the response  and it will be placed inot the state
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false
        state.error = 'ERROR'
      })
  },
})

export default userListSlice.reducer
