import axios from 'axios';
import dummyData from './data/dummyData'
import MovieGridList from './components/MovieGridList';
import MovieSwipeDeck from './components/MovieSwipeDeck';
import Nav from './components/Nav';
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

const COMPONENT_HEIGHT_PROPORTIONS = {
  header: .1,
  content: .9
}

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      view: 'MovieGridList',
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

  changeView(option) {
    this.setState({ view: option });
  }

  getView() {
    let screenHeight = this.state.screenHeight;
    let screenWidth = this.state.screenWidth;
    let view = this.state.view;

    if (view === 'MovieSwipeDeck') {
      return (
        <MovieSwipeDeck 
          data={dummyData.data}
          style={{ 
            height: screenHeight * COMPONENT_HEIGHT_PROPORTIONS.content,
            width: screenWidth
          }} 
        />
      );
    } else if (view === 'MovieGridList') {
      return (
        <MovieGridList
          data={dummyData.data}
          style={{ 
            height: screenHeight * COMPONENT_HEIGHT_PROPORTIONS.content,
            width: screenWidth
          }}
        />
      );
    }
  }

  render() {
    let screenHeight = this.state.screenHeight;
    let screenWidth = this.state.screenWidth;

    return (
      <Container style={{ flexDirection: "column" }}>
        <Nav height={screenHeight * COMPONENT_HEIGHT_PROPORTIONS.header} />
        {this.getView()}
      </Container>
    );
  }
}
