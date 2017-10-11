import React, { Component } from 'react';

import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { 
  Card,
  SwipeDeck 
} from 'react-native-elements';


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

const SCREEN_RATIOS = {
  CONTAINER_HEIGHT: .75,
  CONTAINER_WIDTH: .92,
  IMAGE_HEIGHT: .92,
  IMAGE_WIDTH: .915,
  MARGIN_TOP: .05
}

export default class HomeCarousel extends Component {
  constructor() {
    super()

    this.state = {
      SCREEN_HEIGHT: Dimensions.get('window').height,
      SCREEN_WIDTH : Dimensions.get('window').width     
    }

    this.liked = [];
    this.disliked = [];
    this.unwatched = [];
  }

  renderCard(card) {
    let SCREEN_HEIGHT = this.state.SCREEN_HEIGHT;
    let SCREEN_WIDTH = this.state.SCREEN_WIDTH;

    return (
      <Card
        key={card.id}
        containerStyle={{
          height: SCREEN_HEIGHT * SCREEN_RATIOS.CONTAINER_HEIGHT,
          width: SCREEN_WIDTH * SCREEN_RATIOS.CONTAINER_WIDTH,
          marginTop: SCREEN_HEIGHT * SCREEN_RATIOS.MARGIN_TOP
        }}
        featuredTitle={`${card.title}`}
        featuredTitleStyle={{position: 'absolute', left: 15, bottom: 10, fontSize: 30 }}
        image={{ uri: card.uri }}
        imageStyle={{
          height: SCREEN_HEIGHT * SCREEN_RATIOS.CONTAINER_HEIGHT,
          width: SCREEN_WIDTH * SCREEN_RATIOS.IMAGE_WIDTH
        }}
      />
    )
  }

  onSwipeRight(card) {
    console.log("Movie liked: " + card.title);
    this.liked.push(card);
  }

  onSwipeLeft(card) {
    console.log("Movie disliked: " + card.title);
    this.disliked.push(card);
  }

  renderNoMoreCards() {
    let SCREEN_HEIGHT = this.state.SCREEN_HEIGHT;
    let SCREEN_WIDTH = this.state.SCREEN_WIDTH;

    return (
      <Card
        containerStyle={{
          height: SCREEN_HEIGHT * SCREEN_RATIOS.CONTAINER_HEIGHT,
          width: SCREEN_WIDTH * SCREEN_RATIOS.CONTAINER_WIDTH,
          marginTop: SCREEN_HEIGHT * SCREEN_RATIOS.MARGIN_TOP,
          backgroundColor: 'aqua'
        }}
        featuredTitle="You're all set!"
        featuredTitleStyle={{fontSize: 25}}
        image={{}}
        imageStyle={{
          height: SCREEN_HEIGHT * SCREEN_RATIOS.CONTAINER_HEIGHT,
          width: SCREEN_WIDTH * SCREEN_RATIOS.IMAGE_WIDTH,
        }}
      />
    )
  }

  render() {
    let SCREEN_HEIGHT = this.state.SCREEN_HEIGHT;

    return (
      <SwipeDeck
        data={DATA}
        renderCard={this.renderCard.bind(this)}
        renderNoMoreCards={this.renderNoMoreCards.bind(this)}
        onSwipeRight={this.onSwipeRight.bind(this)}
        onSwipeLeft={this.onSwipeLeft.bind(this)}
      />
    )
  }
}