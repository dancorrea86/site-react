import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Main from './Main.js'
import Calculator from './Calculator.js'
import NameForm from './NameForm.js'

export default props =>
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/calculator' component={Calculator} />
    <Route path='/formulario' component={NameForm} />
    <Redirect from='*' to='/' />
  </Switch>