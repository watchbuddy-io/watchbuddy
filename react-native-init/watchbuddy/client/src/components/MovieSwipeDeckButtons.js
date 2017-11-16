import React from 'react';

import {
  Image,
  TouchableHighlight,
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

const ICON_STYLES = {
  size: 35,
  color: '#FFF'
}

export default MovieSwipeDeckButtons = ({ dimensions, handleLeftButtonPress, handleUnwatchedButtonPress, handleRightButtonPress, buttonsDisabled }) => {
  return (
    <View style={{ flexDirection: "column", height: dimensions.height, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: "row", justifyContent: 'space-between', width: dimensions.width }}>
        <TouchableHighlight onPress={handleLeftButtonPress} underlayColor="rgba(0,0,0,0)">
          <Image
            source={require('../../assets/thumbsdown.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={handleUnwatchedButtonPress} underlayColor="rgba(0,0,0,0)">
          <Image
            source={require('../../assets/notseen.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={handleRightButtonPress} underlayColor="rgba(0,0,0,0)">
          <Image
            source={require('../../assets/thumbsup.png')}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}