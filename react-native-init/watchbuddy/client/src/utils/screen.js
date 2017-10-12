import React from 'react';
import { Dimensions } from 'react-native';

export default screen = {
  getScreenDimensions: function() {
    return {
      height: Dimensions.get('window').height,
      width : Dimensions.get('window').width      
    };
  }
};