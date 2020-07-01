import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './common/template/header'
import Footer from './common/template/footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes