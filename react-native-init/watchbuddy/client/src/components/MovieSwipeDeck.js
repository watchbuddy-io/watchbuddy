import MovieSwipeDeckButtons from './MovieSwipeDeckButtons';
import React, { Component } from 'react';

import {
  Dimensions,
  Image,
  Text
} from 'react-native';

import {
  View, 
  DeckSwiper,
  Card,
  CardItem,
} from 'native-base';

const COMPONENT_WIDTH_RATIOS = {
  cardWidth: .92
}

const COMPONENT_HEIGHT_RATIOS = {
  movieSwipeDeck: .85,
  movieSwipeDeckButtons: .15
}

export default class MovieSwipeDeck extends Component {
  constructor() {
    super()

    this.liked = [];
    this.disliked = [];
    this.unwatched = [];
  }

  _renderPoster(card) {
    return (
      <CardItem cardBody>
        <Image 
          style={{ 
            height: this.props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck,
            width: this.props.style.width * COMPONENT_WIDTH_RATIOS.cardWidth
          }}
          source={{ 
            uri: card.posterUrl 
          }} 
        />
      </CardItem>
    );
  }

  renderCard(card) {
    return (
      <Card
        style={{
          height: this.props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck,
          width: this.props.style.width * COMPONENT_WIDTH_RATIOS.cardWidth,
          alignSelf: "center"
        }}
      >
        {this._renderPoster(card)}
      </Card>
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

  triggerSwipeRight() {
    let card = this._deckSwiper._root.state.selectedItem;
    this._deckSwiper._root.swipeRight();
    this.onSwipeRight(card);
  }

  triggerSwipeLeft() {
    let card = this._deckSwiper._root.state.selectedItem;
    this._deckSwiper._root.swipeLeft();
    this.onSwipeLeft(card);
  }

  renderEmpty() {
    return (
      <View style={{ 
        height: this.props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck, 
        width: this.props.style.width * COMPONENT_WIDTH_RATIOS.cardWidth,
        alignSelf: "center", backgroundColor: "#fdd835" 
      }}>
        <Text>Building your recommendations...</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{ height: this.props.style.height, flexDirection: 'column' }}>
        <View style={{ height: this.props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck }}> 
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={this.props.data}
            renderItem={this.renderCard.bind(this)}
            renderEmpty={this.renderEmpty.bind(this)}
            onSwipeRight={this.onSwipeRight.bind(this)}
            onSwipeLeft={this.onSwipeLeft.bind(this)}
            looping={false}
          />
        </View>
        <MovieSwipeDeckButtons 
          style={{
            height: this.props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeckButtons
          }}
          handleRightButtonPress={this.triggerSwipeRight.bind(this)}
          handleLeftButtonPress={this.triggerSwipeLeft.bind(this)}
        />
      </View>
    );
  }
}