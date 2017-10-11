import MovieSwipeDeck from './components/MovieSwipeDeck';
import React, { Component } from 'react';

import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const DATA = [
  {
    id: 1,
    genre: 'sci-fi',
    title: 'Blade Runner 2049',
    uri: 'https://pbs.twimg.com/media/DH9QvgAUQAAZANa.jpg:large'
  },
  {
    id: 2,
    genre: 'action',
    title: 'Inception',
    uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
  },
  {
    id: 3,
    genre: 'sci-fi',
    title: 'Interstellar',
    uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_UY1200_CR69,0,630,1200_AL_.jpg'
  }
];

export default class MoviePreferenceSurvey extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <MovieSwipeDeck data={DATA} />
      </View>
    );
  }
}