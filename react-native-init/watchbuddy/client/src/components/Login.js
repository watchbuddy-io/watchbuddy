import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import loginStyles from '../styles/login';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';

export default class Login extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      renderErrorMessage: false
    }

    this.styles = loginStyles.getStyles(props.dimensions);
  }

  render() {
    return (
      <ScrollView>
        <Text>{'username'}</Text>
        <View>
          <TextInput
            style={this.styles.TextInput}
          />
        </View>
        <Text>{'login'}</Text>
        <View>
          <TextInput
            secureTextEntry={true}
            style={this.styles.TextInput}
          />
        </View>
        <TouchableHighlight
          underlayColor={'#EEE'}
          onPress={() => this.props.changeView('MovieSwipeDeck')} 
          style={this.styles.Button}
        >
          <Text style={this.styles.Text}>{'login'}</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
