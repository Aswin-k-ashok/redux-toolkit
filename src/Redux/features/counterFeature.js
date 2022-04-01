import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // setting up initial state
  reduxCount: 7,
}

let counterSlice = createSlice({
  name: 'reduxCounter',
  initialState: initialState,
  reducers: {
    incrementAction: function (state, action) {
      // reducer + actions are here
      state.reduxCount = state.reduxCount + 1
    },
    decrementAction: function (state, action) {
      state.reduxCount = state.reduxCount - 1
    },
    incrementByFiveAction: function (state, action) {
      state.reduxCount = state.reduxCount + action.payload
    },
  },
})

export const { incrementAction, decrementAction, incrementByFiveAction } =
  counterSlice.actions

export default counterSlice.reducer
