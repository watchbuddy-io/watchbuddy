/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';
import { 
  Button, 
  Carousel,
  Spinner
} from 'nachos-ui';
import MovieSwipeDeck from './MovieSwipeDeck';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      carouselImages: []
    }
    this.getDataFromServer();
  }

  getDataFromServer() {
    axios.get('http://127.0.0.1:1338').then(data => {
      console.log(data.data.movies)
      return data.data.movies
    })
    .then(jsonData => this.setState({carouselImages:jsonData}))
    .catch(err => console.log('errOR!!', err))
  }

  render() {
    return (
        <View >
          <MovieSwipeDeck />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
