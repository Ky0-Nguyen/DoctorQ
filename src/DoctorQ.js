import React from 'react'
import { Router } from 'react-native-router-flux'

import 'rxjs'
import { Provider, connect } from 'react-redux'
import store from './Controller/Redux/Store'
import scenes from './Common/globalGroutes'
const RouterWithRedux = connect()(Router)
export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes}/>
      </Provider>
    )
  }
}
