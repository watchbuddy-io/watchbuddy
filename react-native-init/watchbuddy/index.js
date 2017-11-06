import { AppRegistry } from 'react-native';
import App from './client/src/App';
import React from 'react';
import BrainPNG from './client/assets/thinking256.png';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native'

class heartbeat extends React.Component {
constructor () {
  super()
  this.springValue = new Animated.Value(0.05)
}

spring () {
  this.springValue.setValue(0.05)
  Animated.spring(
    this.springValue,
    {
      toValue: .5,
      friction: 0.1,
      tension: 10
    }
  ).start()
}

render() {
  this.spring();
  return (
  <View style={styles.container}>
    <Animated.Image
      style={{ transform: [{scale: this.springValue}] }}
      source={BrainPNG}/>
  </View>
  )
}




//   constructor() {
//     super();
//     this.spinValue = new Animated.Value(0);
//   }
//   componentDidMount () {
//     this.spin()
//   }
//   spin () {
//     this.spinValue.setValue(0)
//     Animated.timing(
//       this.spinValue,
//       {
//         toValue: 1,
//         duration: 4000,
//         easing: Easing.bounce
//       }
//     ).start(() => this.spin())
//   }
// render () {
//   const spin = this.spinValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg']
//   })
//   return (
//     <View style={styles.container}>
//       <Animated.Image
//         style={{
//           transform: [{rotate: spin}] }}
//           source={HeartPNG}
//       />
//     </View>
//   )
// }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
// const styles = StyleSheet.create({
//   heart: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     alignItems: 'center'
//   }
// })

AppRegistry.registerComponent('watchbuddy', () => App);