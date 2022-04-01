import React from 'react'
import AppBar from './Components/AppBar'
import Counter from './Components/Counter'
import Employee from './Components/Employee'
import Home from './Components/Home'
import UserList from './Components/UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/userlist' element={<UserList />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
