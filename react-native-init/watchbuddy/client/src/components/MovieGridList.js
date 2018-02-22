import axios from 'axios';
import MovieGridListButtons from './MovieGridListButtons';
import MovieInfo from './MovieInfo';
import React, { Component } from 'react';

import {
  Content
} from 'native-base';

import {
  FlatList,
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
  // this.onLeftButtonPress = () => {
  //   console.log('left button clicked');
  //   this.setState({currentIndex: Math.abs(this.state.currentIndex - 4) % props.data.length});
  // };

  // onRightButtonPress = () => {
  //   console.log('right button clicked');
  //   this.setState({currentIndex: (this.state.currentIndex + 4) % props.data.length});
  // };

  onPosterPress = (movie) => {
    console.log('MOVIE', movie);
    props.changeView('MovieInfo', movie);
    // axios.post('http://13.57.94.147:8080/selectMovie', { movie: movie.title })
    //   .then(data => {
    //     console.log('response from AMAZON API', data);
    //     movie.movieUrl = data.data.movieUrl;
    //     props.changeView('MovieInfo', movie);
    //   })
    //   .catch(err => {
    //     console.log('Error from Amazon: ', err);
    //   })
  };

  this.getMoviePoster = (movie) => {
    return (
      movie ?
        <TouchableHighlight onPress={() => this.onPosterPress(movie)}>
          <Image
            source={{ height: props.dimensions.height / 2, width: props.dimensions.width / 2, uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          />
        </TouchableHighlight>
        : null
    );    
  };

  // this.pageNumber = 1; // do we need to make state for this component?

  // this.nextMovieDBPage = () => {
  //   this.pageNumber++ // increase page number
  //   // need to get movieprefs string
  //   // api call to /userprefs with: moviestring, fbToken, pageNumber
  //   axios.post(`http://13.57.94.147:8080/userprefs`,
  //   {
  //     prefs: props.prefs, // movie prefs string
  //     fbToken: props.fbToken,
  //     pageNumber: this.pageNumber;
  //   })
  // };

  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (this.getMoviePoster(item))}
      style={{flexDirection: 'column'}}
      horizontal={false}
      numColumns={2}
      onEndReached={props.data.push({poster_path: '/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg'})}
    />
  );
}