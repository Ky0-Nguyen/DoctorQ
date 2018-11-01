import React from 'react'
import {Scene, Router} from 'react-native-router-flux';
import Home from './Home'
import Detail from './Detail'

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial/>
          <Scene key="detail" component={Detail} title="Detail"/>
        </Scene>
      </Router>
    )
  }
}