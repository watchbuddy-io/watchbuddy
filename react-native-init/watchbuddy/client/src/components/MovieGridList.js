import axios from 'axios';
import MovieGridListButtons from './MovieGridListButtons';
import MovieInfo from './MovieInfo';
import React, { Component } from 'react';

import {
  Content
} from 'native-base';

import {
  Image,
  Linking,
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native';

import {
  Col,
  Grid,
  Row
} from 'react-native-easy-grid';

import {
  Button
} from 'react-native-elements';

export default MovieGridList = (props) => {
  this.onLeftButtonPress = () => {
    console.log('left button clicked');
    this.setState({currentIndex: Math.abs(this.state.currentIndex - 4) % props.data.length});
  };

  onRightButtonPress = () => {
    console.log('right button clicked');
    this.setState({currentIndex: (this.state.currentIndex + 4) % props.data.length});
  };

  onPosterPress = (movie) => {
    console.log('MOVIE', movie);

    axios.post('http://13.57.94.147:8080/selectMovie', { movie: movie.title })
      .then(data => {
        console.log('response from AMAZON API', data);
        movie.movieUrl = data.data.movieUrl;
        props.changeView('MovieInfo', movie);
      })
      .catch(err => {
        console.log('Error from Amazon: ', err);
      })
  };

  this.getMoviePoster = (movie, key) => {
    return (
      movie ?
        <TouchableHighlight onPress={() => this.onPosterPress(movie)} key={key}>
          <Image
            source={{ height: props.dimensions.height / 2, width: props.dimensions.width / 2, uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          />
        </TouchableHighlight>
        : null
    );    
  };

  return (
    <Content bounces={false}>
      <ScrollView horizontal={true} overScrollMode="never" pagingEnabled={true} bounces={false} automaticallyAdjustContentInsets={false}>
        <Grid>
          <Row>
            {props.data.slice(0, Math.floor(props.data.length / 2)).map((movie, i) => (
              this.getMoviePoster(movie, i)
            ))}
          </Row>
          <Row>
            {props.data.slice(Math.floor(props.data.length / 2)).map((movie, i) => (
              this.getMoviePoster(movie, i)
            ))}
          </Row>
        </Grid>
      </ScrollView>
    </Content>
  );
}