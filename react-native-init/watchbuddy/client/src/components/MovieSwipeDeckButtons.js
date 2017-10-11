import React, { Component } from 'react';

import {
  Dimensions,
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

const ICON_STYLES = {
  size: 35,
  color: '#FFF'
}

export default class MovieSwipeDeckButtons extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flexDirection: "column", height: this.props.style.height, justifyContent: 'center' }}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <Button 
            rounded
            onPress={this.props.handleLeftButtonPress} 
            icon={{ name: 'thumb-down', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
            buttonStyle={{ backgroundColor: '#ff5722' }} 
          />
          <Button 
            rounded
            onPress={this.props.handleLeftButtonPress} 
            icon={{ name: 'eye-with-line', type: 'entypo', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
            buttonStyle={{ backgroundColor: '#fdd835' }}
          />
          <Button
            rounded
            onPress={this.props.handleRightButtonPress} 
            icon={{ name: 'thumb-up', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
            buttonStyle={{ backgroundColor: '#29b6f6' }} 
          />
        </View>
      </View>
    );
  }
}