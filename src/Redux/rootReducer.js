import counterReducer from './features/counterFeature'
import employeeReducer from './features/employeeFeature'
import userListReducer from './features/getDataFromApi'
const rootReducer = {
  // root reducer is made for combining other reducers , all the coponents reducers need to be configured here

  reduxCounter: counterReducer,
  employeeList: employeeReducer, // now go and check redux dev tools
  reduxUserList: userListReducer,
}

export default rootReducer
