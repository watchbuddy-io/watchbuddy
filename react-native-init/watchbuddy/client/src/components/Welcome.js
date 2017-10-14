import React, { Component } from 'react';
import welcomeStyles from '../styles/welcome';

import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native'

export default Welcome = ({ dimensions, changeView }) => {
  let styles = welcomeStyles.getStyles(dimensions);

  return (
    <View style={styles.Col}>
      <View style={styles.Row}>
        <TouchableHighlight
          underlayColor={'#EEE'}
          onPress={() => changeView('Login')} 
          style={styles.Button}
        >
          <Text style={styles.Text}>{'let\'s get started'}</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
