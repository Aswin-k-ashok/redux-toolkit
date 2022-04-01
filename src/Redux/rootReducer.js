import counterReducer from './features/counterFeature'
import employeeReducer from './features/employeeFeature'
const rootReducer = {
  // root reducer is made for combining other reducers , all the coponents reducers need to be configured here

  reduxCounter: counterReducer,
  employeeList: employeeReducer, // now go and check redux dev tools
}

export default rootReducer
