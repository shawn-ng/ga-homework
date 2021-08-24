import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import WineBoard from './components/wines/WineBoard'
import Wine from './components/wines/Wine'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import NewWine from './components/wines/NewWine'
import EditWine from './components/wines/EditWine'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/wines/add">
          <NewWine />
        </Route>
        <Route path="/wines/:id/edit">
          <EditWine />
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
      </Switch>
    </Router>
  )
}

export default App
