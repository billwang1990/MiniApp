import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Home from './containers/Home'

export default class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}