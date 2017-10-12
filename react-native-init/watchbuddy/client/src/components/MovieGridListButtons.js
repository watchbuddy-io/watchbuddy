import React from 'react';

import {
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

const ICON_STYLES = {
  size: 75,
  color: '#FFF'
}

export default MovieGridListButtons = (props) => {
  return (
    <View style={{ position: 'absolute', bottom: 0,  width: props.style.width }}>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Button 
          rounded
          onPress={props.handleLeftButtonPress} 
          icon={{ type: 'ionicon', name: 'ios-arrow-dropleft', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
          backgroundColor='rgba(0,0,0,0)' 
        />
        <Button
          rounded
          onPress={props.handleRightButtonPress} 
          icon={{ type: 'ionicon', name: 'ios-arrow-dropright', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
          backgroundColor='rgba(0,0,0,0)'
        />
      </View>
    </View>
  );
}