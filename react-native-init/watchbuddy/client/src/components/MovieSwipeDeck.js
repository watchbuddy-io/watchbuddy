import googleApiRequests from '../utils/googleApiRequests';
import MovieSwipeDeckButtons from './MovieSwipeDeckButtons';
import movieSwipeDeckStyles from '../styles/movieSwipeDeck';
import React from 'react';
import _ from 'underscore';

import {
  Animated,
  Dimensions,
  Image,
  Text
} from 'react-native';

import {
  Card,
  CardItem,
  DeckSwiper,
  View
} from 'native-base';

const COMPONENT_WIDTH_RATIOS = {
  cardWidth: .92
}

const COMPONENT_HEIGHT_RATIOS = {
  movieSwipeDeck: .85,
  movieSwipeDeckButtons: .15
}

export default MovieSwipeDeck = ({ data, changeView, dimensions }) => {
  this.liked = [];
  this.disliked = [];
  this.unwatched = [];
  this.styles = movieSwipeDeckStyles.getStyles(dimensions);
  this.numRenderEmptyCalls = 0;

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

  this.renderCardPoster = (card) => {
    return (
      <CardItem cardBody>
        <Image 
          style={this.styles.Image}
          source={{ uri: card.posterUrl }} 
        />
      </CardItem>
    );
  }

  this.renderCard = (card) => {
    return (
      <Card style={this.styles.Card}>
        {this.renderCardPoster(card)}
      </Card>
    )
  }

  this.renderEmpty = () => {
    if (this.numRenderEmptyCalls > 1) {
      googleApiRequests.queryGoogleApi(this.liked)
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
      setTimeout(() => changeView('MovieGridList'), 2000);
    }

    this.numRenderEmptyCalls++;

    return (
      <View style={this.styles.View}>
        <Text style={this.styles.Text}>
          Building your recommendations...
        </Text>
      </View>
    )
  }

  this.throttleButtonPresses = _.throttle((event) => {
    event();
  }, 500).bind(this);

  return (
    <View 
      style={{
        height: dimensions.height, 
        flexDirection: 'column'
      }}>
      <View 
        style={{ height: dimensions.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck }}> 
        <DeckSwiper
          ref={(c) => this._deckSwiper = c}
          dataSource={data}
          renderItem={this.renderCard.bind(this)}
          renderEmpty={this.renderEmpty.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          looping={false}
        />
      </View>
      <MovieSwipeDeckButtons
        dimensions={{ height: dimensions.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeckButtons }}
        handleRightButtonPress={() => this.throttleButtonPresses(this.triggerSwipeRight)}
        handleUnwatchedButtonPress={() => this.throttleButtonPresses(this.triggerUnwatched)}
        handleLeftButtonPress={() => this.throttleButtonPresses(this.triggerSwipeLeft)}
      />
    </View>
  );
}