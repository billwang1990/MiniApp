import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default class Setup extend Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}