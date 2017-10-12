import React from 'react';

import {
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

const ICON_STYLES = {
  size: 35,
  color: '#FFF'
}

export default MovieSwipeDeckButtons = ({ dimensions, handleLeftButtonPress, handleUnwatchedButtonPress, handleRightButtonPress }) => {
  return (
    <View style={{ flexDirection: "column", height: dimensions.height, justifyContent: 'center' }}>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Button 
          rounded
          onPress={handleLeftButtonPress}
          icon={{ name: 'thumb-down', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
          buttonStyle={{ backgroundColor: '#ff5722' }} 
        />
        <Button 
          rounded
          onPress={handleUnwatchedButtonPress} 
          icon={{ name: 'eye-with-line', type: 'entypo', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
          buttonStyle={{ backgroundColor: '#fdd835' }}
        />
        <Button
          rounded
          onPress={handleRightButtonPress} 
          icon={{ name: 'thumb-up', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
          buttonStyle={{ backgroundColor: '#29b6f6' }} 
        />
      </View>
    </View>
  );
}