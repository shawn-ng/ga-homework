import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import WineBoard from './wines/WineBoard'
import Wine from './wines/Wine'
import Register from './auth/Register'
import Login from './auth/Login'
import NewWine from './wines/NewWine'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/wines/:id">
          <Wine />
        </Route>
        <Route path="/wines">
          <WineBoard />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/newWine">
          <NewWine />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
