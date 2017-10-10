import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { 
  Card,
  SwipeDeck 
} from 'react-native-elements';

const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 500;

// test data
const DATA = [
  { id: 1, text: 'Joe', age: 25, uri: 'https://ca.slack-edge.com/T6EQHDY58-U6R9RCMRB-3cc279101242-1024' },
  { id: 2, text: 'Joe', age: 25, uri: 'https://ca.slack-edge.com/T6EQHDY58-U6R9RCMRB-3cc279101242-1024' },
  { id: 3, text: 'Joe', age: 25, uri: 'https://ca.slack-edge.com/T6EQHDY58-U6R9RCMRB-3cc279101242-1024' },
  { id: 4, text: 'Joe', age: 25, uri: 'https://ca.slack-edge.com/T6EQHDY58-U6R9RCMRB-3cc279101242-1024' },
  { id: 5, text: 'Joe', age: 25, uri: 'https://ca.slack-edge.com/T6EQHDY58-U6R9RCMRB-3cc279101242-1024' },
  { id: 6, text: 'Joe', age: 25, uri: 'https://ca.slack-edge.com/T6EQHDY58-U6R9RCMRB-3cc279101242-1024' },
  { id: 7, text: 'Joe', age: 25, uri: 'https://ca.slack-edge.com/T6EQHDY58-U6R9RCMRB-3cc279101242-1024' }
];

export default class HomeCarousel extends Component {
  constructor() {
    super()

  }

  renderCard(card) {
    return (
      <Card
        key={card.id}
        containerStyle={{borderRadius: 10, flex: 1}}
        featuredTitle={`${card.text}, ${card.age}`}
        featuredTitleStyle={{position: 'absolute', left: 15, bottom: 10, fontSize: 30 }}
        image={{ uri: card.uri }}
        imageStyle={{borderRadius: 10, flex: 1}}
      />
    )
  }

  onSwipeRight(card) {
    console.log("Card liked: " + card.text);
  }

  onSwipeLeft(card) {
    console.log("Card disliked: " + card.text);
  }

  renderNoMoreCards() {
    return (
      <Card
        containerStyle={{borderRadius: 10, flex: 1}}
        featuredTitle="No more cards"
        featuredTitleStyle={{fontSize: 25}}
        image={{ uri: 'https://i.imgflip.com/1j2oed.jpg' }}
        imageStyle={{borderRadius: 10, flex: 1}}
      />
    )
  }

  render() {
    return (
      <SwipeDeck
        data={DATA}
        renderCard={this.renderCard}
        renderNoMoreCards={this.renderNoMoreCards}
        onSwipeRight={this.onSwipeRight}
        onSwipeLeft={this.onSwipeLeft}
      />
    )
  }
}