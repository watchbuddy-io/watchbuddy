import googleApiRequests from '../utils/googleApiRequests';
import MovieSwipeDeckButtons from './MovieSwipeDeckButtons';
import movieSwipeDeckStyles from '../styles/movieSwipeDeck';
import React from 'react';
import _ from 'underscore';
import BrainPNG from '../../assets/thinking256.png';

import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
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

export default class MovieSwipeDeck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      changeView: this.props.changeView,
      dimensions: this.props.dimensions,
      liked: [],
      disliked: [],
      unwatched: [],
    };

    // Animations
    this.springValue = new Animated.Value(0.1)
    this.spring = () => {
      Animated.spring(
        this.springValue,
        {
          toValue: .5,
          friction: 0,
          tension: 0,
        }
      ).start();
    }

    // Number Empty Calls (triggers once on last card, then again on renderEmpty)
    this.numRenderEmptyCalls = 0;

    // Styles
    this.styles = movieSwipeDeckStyles.getStyles(this.props.dimensions);

    // Bindings
    this.renderCard = this.renderCard.bind(this);
    this.renderEmpty = this.renderEmpty.bind(this);
    this.onSwipeRight = this.onSwipeRight.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.onUnwatched = this.onUnwatched.bind(this);
    this.triggerSwipeRight = this.triggerSwipeRight.bind(this);
    this.triggerSwipeLeft = this.triggerSwipeLeft.bind(this);
    this.triggerUnwatched = this.triggerUnwatched.bind(this);
    this.throttleButtonPresses = this.throttleButtonPresses.bind(this)();
  }

  onSwipeRight(card) {
    console.log("Movie liked: " + card.title);
    this.state.liked.push(card);
    this.setState({ liked: this.state.liked });
  }

  onSwipeLeft(card) {
    console.log("Movie disliked: " + card.title);
    this.state.disliked.push(card);
    this.setState({ disliked: this.state.disliked });
  }

  onUnwatched(card) {
    console.log("Movie unwatched: " + card.title);
    this.state.unwatched.push(card);
    this.setState({ unwatched: this.state.unwatched });
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

  triggerUnwatched() {
    let card = this._deckSwiper._root.state.selectedItem;
    this._deckSwiper._root.swipeLeft();
    this.onUnwatched(card);
  }

  renderCard(card) {
    return (
      <Card style={this.styles.Card}>
        <CardItem cardBody>
          <Image 
            style={this.styles.Image}
            source={{ uri: card.posterUrl }} 
          />
        </CardItem>
      </Card>
    )
  }

  isEmptySwipeDeck() {
    return this.state.liked.length + this.state.disliked.length + this.state.unwatched.length === this.state.data.length;
  }

  prefetchImages(movies) {
    for (let i = 0; i < movies.length; i += 1) {
      const movie = movies[i];
      Image.prefetch(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
    }
  }

  renderEmpty() {
    const {
      data,
      changeView,
      dimensions
    } = this.state;

    if (this.numRenderEmptyCalls === 1) {
      googleApiRequests.queryGoogleApi(this.state.liked)
      .then(data => {
        data = JSON.parse(data.data).results;
        console.log(data);
        this.prefetchImages(data);
        setTimeout(() => changeView('MovieGridList', data), 2000);
      })
      .catch(err => {
        console.log(err);
        changeView('MovieGridList')
      });
    }

    this.numRenderEmptyCalls += 1;

    this.spring();

    return (
    <View style={{flexDirection: "column", height: dimensions.height, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.Image
        style={{
          transform: [{scale: this.springValue}],
          alignItems: 'center',
          justifyContent:'center',
       }}
        source={BrainPNG}/>
      <Text style={this.styles.Text}>
        Our AI is building your recommendations...
      </Text>
    </View>
    )
  }

  throttleButtonPresses() {
    return _.throttle((event) => event(), 650);
  }

  render() {
    const {
      data,
      dimensions,
    } = this.state;

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
            renderItem={this.renderCard}
            renderEmpty={this.renderEmpty}
            onSwipeRight={this.onSwipeRight}
            onSwipeLeft={this.onSwipeLeft}
            looping={false}
          />
        </View>
        {
          (!this.isEmptySwipeDeck()) ?
            <MovieSwipeDeckButtons
              dimensions={{ height: dimensions.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeckButtons, width: dimensions.width * COMPONENT_WIDTH_RATIOS.cardWidth }}
              handleRightButtonPress={() => this.throttleButtonPresses(this.triggerSwipeRight)}
              handleUnwatchedButtonPress={() => this.throttleButtonPresses(this.triggerUnwatched)}
              handleLeftButtonPress={() => this.throttleButtonPresses(this.triggerSwipeLeft)}
            />
          : null
        }
      </View>
    );
  }
}
