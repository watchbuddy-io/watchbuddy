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

export default MovieSwipeDeckButtons = ({ dimensions, handleLeftButtonPress, handleUnwatchedButtonPress, handleRightButtonPress, buttonsDisabled }) => {
  return (
    <View style={{ flexDirection: "column", height: dimensions.height, justifyContent: 'center' }}>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Button 
          rounded
          disabled={buttonsDisabled}
          onPress={handleLeftButtonPress}
          icon={{ name: 'thumb-down', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
          buttonStyle={{ backgroundColor: '#ff5722' }}
          iconStyle={{position:'relative', right:"50px"}}
        />
        <Button 
          rounded
          icon
          disabled={buttonsDisabled}
          onPress={handleUnwatchedButtonPress} 
          icon={{ name: 'md-eye-off', type: 'ionicon', size: ICON_STYLES.size, color: ICON_STYLES.color, position: 'relative', top: '50px' }} 
          buttonStyle={{ backgroundColor: '#fdd835' }}
        />
        <Button
          rounded
          disabled={buttonsDisabled}
          onPress={handleRightButtonPress} 
          icon={{ name: 'thumb-up', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
          buttonStyle={{ backgroundColor: '#29b6f6' }} 
        />
      </View>
    </View>
  );
}