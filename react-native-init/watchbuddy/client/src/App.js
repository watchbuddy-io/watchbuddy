import axios from 'axios';
import MoviePreferenceSurvey from './MoviePreferenceSurvey';
import React, { Component } from 'react';

import { 
  Container, 
} from 'native-base';

import { 
  Spinner
} from 'nachos-ui';

import {
  Dimensions,
  View
} from 'react-native';

import {
  Button,
  Header
} from 'react-native-elements';

const COMPONENT_HEIGHT_PROPORTIONS = {
  header: .1,
  moviePreferenceSurvey: .9
}

const DATA = [
  {
    id: 1,
    genre: 'sci-fi',
    title: 'Blade Runner 2049',
    posterUrl: 'https://pbs.twimg.com/media/DH9QvgAUQAAZANa.jpg:large'
  },
  {
    id: 2,
    genre: 'action',
    title: 'Inception',
    posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
  },
  {
    id: 3,
    genre: 'sci-fi',
    title: 'Interstellar',
    posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_UY1200_CR69,0,630,1200_AL_.jpg'
  }
];

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      view: 'MoviePreferenceSurvey',
      screenHeight: Dimensions.get('window').height,
      screenWidth : Dimensions.get('window').width    
    }
    this.getMovieData();
  }

  getMovieData() {
    axios.get('http://127.0.0.1:1338').then(data => {
      this.setState({swipeDeckImages: data});
    })
    .catch(err => console.log(err));
  }

  render() {
    let screenHeight = this.state.screenHeight;
    let screenWidth = this.state.screenWidth;

    return (
      <Container style={{ flexDirection: "column" }}>
        <Header style={{ height: screenHeight * COMPONENT_HEIGHT_PROPORTIONS.header, flexDirection: "row", justifyContent: 'space-between' }}
          leftComponent={<Button icon={{ name: 'menu', size: 25, color: '#444' }} buttonStyle={{ backgroundColor: '#FFF' }} />}
          centerComponent={<Button title={'watchbuddy.io'} buttonStyle={{ backgroundColor: '#FFF' }} textStyle={{ color: '#444', fontSize: 20 }} />}
          rightComponent={<Button icon={{ name: 'home', size: 25, color: '#444' }} buttonStyle={{ backgroundColor: '#FFF', paddingRight: 0 }} />}
        />
        <MoviePreferenceSurvey
          data={DATA}
          style={{ 
            height: screenHeight * COMPONENT_HEIGHT_PROPORTIONS.moviePreferenceSurvey, 
            width: screenWidth 
          }} 
        />
      </Container>
    );
  }
}
