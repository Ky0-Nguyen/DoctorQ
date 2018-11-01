// import liraries
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Body from './Body'

// create a component
class MyClass extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Body/>
      </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
})

// make this component available to the app
export default MyClass
