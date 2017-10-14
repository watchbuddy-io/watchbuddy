import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import loginStyles from '../styles/login';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
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
        <View>
          <TextInput
            style={this.styles.TextInput}
          />
        </View>
        <View>
          <TextInput
            secureTextEntry={true}
            style={this.styles.TextInput}
          />
        </View>
      </ScrollView>
    );
  }
}