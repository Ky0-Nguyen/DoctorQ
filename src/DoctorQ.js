import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Home from './Home'
import Detail from './Detail'

import 'rxjs'
import { Provider, connect } from 'react-redux'
import store from './Controller/Redux/Store'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial/>
            <Scene key="detail" component={Detail} title="Detail"/>
          </Scene>
        </Router>
      </Provider>
    )
  }
}
