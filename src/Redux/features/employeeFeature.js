import { createSlice } from '@reduxjs/toolkit'
import { EmployeeData } from '../../EmployeeData'

const initialState = {
  reduxEmpl: EmployeeData.getAllEmployees(), // getting data from the js dummy file
}

let reduxEmployeeSlice = createSlice({
  // creating slice
  name: 'employeeCheck', // this will be the state name
  initialState: initialState, // initital value like useState(0)
  reducers: {
    reduxUpdateSelected: function (state, action) {
      // action will be exported
      state.reduxEmpl = state.reduxEmpl.map((reduxEm) => {
        if (reduxEm.id === action.payload) {
          //action.payload will come from the ui
          return {
            ...reduxEm, // spreading the existing data to add aditional data
            isSelected: !reduxEm.isSelected, // and adding updated data
          }
        } else return reduxEm
      })
    },
  },
})

export const { reduxUpdateSelected } = reduxEmployeeSlice.actions
export default reduxEmployeeSlice.reducer // go to rootreducer.js to update the global state
