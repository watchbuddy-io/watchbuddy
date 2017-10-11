import MovieSwipeDeck from './components/MovieSwipeDeck';
import React, { Component } from 'react';

import {
  View
} from 'react-native';

export default class MoviePreferenceSurvey extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MovieSwipeDeck 
        data={this.props.data} 
        style={{ 
          height: this.props.style.height, 
          width: this.props.style.width
        }}
      />
    );
  }
}