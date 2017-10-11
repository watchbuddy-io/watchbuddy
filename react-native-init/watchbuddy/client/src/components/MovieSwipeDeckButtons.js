import React, { Component } from 'react';

import {
  Dimensions,
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

export default class MovieSwipeDeckButtons extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flexDirection: "column", height: this.props.style.height, justifyContent: 'center' }}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>
          <Button 
            onPress={this.props.handleLeftButtonPress} 
            icon={{ name: 'thumb-down', size: 25, color: '#FFF' }} 
            buttonStyle={{ backgroundColor: '#ff5722', borderRadius: 25 }} 
          />
          <Button 
            onPress={this.props.handleLeftButtonPress} 
            icon={{ name: 'eye-with-line', type: 'entypo', size: 25, color: '#FFF' }} 
            buttonStyle={{ backgroundColor: '#fdd835', borderRadius: 25 }} 
          />
          <Button 
            onPress={this.props.handleLeftButtonPress} 
            icon={{ name: 'thumb-up', size: 25, color: '#FFF' }} 
            buttonStyle={{ backgroundColor: '#29b6f6', borderRadius: 25 }} 
          />
        </View>
      </View>
    );
  }
}