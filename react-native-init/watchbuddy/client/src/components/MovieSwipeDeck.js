import MovieSwipeDeckButtons from './MovieSwipeDeckButtons';
import React from 'react';

import {
  Animated,
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

export default MovieSwipeDeck = (props) => {
  this.liked = [];
  this.disliked = [];
  this.unwatched = [];

  this._renderPoster = (card) => {
    return (
      <CardItem cardBody>
        <Image 
          style={{ 
            height: props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck,
            width: props.style.width * COMPONENT_WIDTH_RATIOS.cardWidth
          }}
          source={{ 
            uri: card.posterUrl 
          }} 
        />
      </CardItem>
    );
  }

  this.renderCard = (card) => {
    return (
      <Card
        style={{
          height: props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck,
          width: props.style.width * COMPONENT_WIDTH_RATIOS.cardWidth,
          alignSelf: 'center'
        }}
      >
        {this._renderPoster(card)}
      </Card>
    )
  }

  this.onSwipeRight = (card) => {
    console.log("Movie liked: " + card.title);
    this.liked.push(card);
  }

  this.onSwipeLeft = (card) => {
    console.log("Movie disliked: " + card.title);
    this.disliked.push(card);
  }

  this.onUnwatched = (card) => {
    console.log("Movie unwatched: " + card.title);
    this.unwatched.push(card);
  }

  this.triggerSwipeRight = () => {
    let card = this._deckSwiper._root.state.selectedItem;
    this._deckSwiper._root.swipeRight();
    this.onSwipeRight(card);
  }

  this.triggerSwipeLeft = () => {
    let card = this._deckSwiper._root.state.selectedItem;
    this._deckSwiper._root.swipeLeft();
    this.onSwipeLeft(card);
  }

  this.triggerUnwatched = () => {
    let card = this._deckSwiper._root.state.selectedItem;
    this._deckSwiper._root.swipeLeft();
    this.onUnwatched(card);
  }

  renderEmpty = () => {
    return (
      <View
        style={{
          height: props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck,
          width: props.style.width * COMPONENT_WIDTH_RATIOS.cardWidth,
          alignSelf: 'center',
          backgroundColor: '#29b6f6',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Text style={{
          color: '#FFF',
          textAlign: 'center'
        }}>
          Building your recommendations...
        </Text>
      </View>
    )
  }

  return (
    <View style={{ height: props.style.height, flexDirection: 'column' }}>
      <View style={{ height: props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck }}> 
        <DeckSwiper
          ref={(c) => this._deckSwiper = c}
          dataSource={props.data}
          renderItem={this.renderCard.bind(this)}
          renderEmpty={this.renderEmpty.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          looping={false}
        />
      </View>
      <MovieSwipeDeckButtons
        style={{
          height: props.style.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeckButtons
        }}
        handleRightButtonPress={this.triggerSwipeRight.bind(this)}
        handleUnwatchedButtonPress={this.triggerUnwatched.bind(this)}
        handleLeftButtonPress={this.triggerSwipeLeft.bind(this)}
      />
    </View>
  );
}