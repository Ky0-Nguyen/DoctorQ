import React, { Component } from 'react'
import { Path } from 'react-native-svg'
import { createAnimatableComponent } from 'react-native-animatable'

class SvgPathAnimation extends Component {
  setNativeProps = (props = {}) => {
    if (props.strokeWidth) {
      props.strokeWidth = 20
    }
    this._component && this._component.setNativeProps(props)
  }
  render () {
    return (
      <Path
        ref={component => (this._component = component)}
        {...this.props}
      />
    )
  }
}
// eslint-disable-next-line no-class-assign
SvgPathAnimation = createAnimatableComponent(SvgPathAnimation)
export default SvgPathAnimation
