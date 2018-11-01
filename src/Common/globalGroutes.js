import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import Home from '../Home'
import Detail from '../Detail'

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key="home" component={Home} title="Home" initial/>
    <Scene key="detail" component={Detail} title="Detail"/>
  </Scene>
)
export default scenes
