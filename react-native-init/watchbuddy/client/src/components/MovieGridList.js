import MovieGridListButtons from './MovieGridListButtons';
import MovieInfo from './MovieInfo';
import React, { Component } from 'react';

import {
  Content
} from 'native-base';

import {
  Image,
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

export default class MovieGridList extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      selectedMovie: null
    };
  }

  onLeftButtonPress() {
    console.log('left button clicked');
    this.setState({currentIndex: Math.abs(this.state.currentIndex - 4) % this.props.data.length});
  }

  onRightButtonPress() {
    console.log('right button clicked');
    this.setState({currentIndex: (this.state.currentIndex + 4) % this.props.data.length});
  }

  onPosterPress(event) {
    console.log(this.movie);
    this.context.setState({selectedMovie: this.movie});
  }

  getMoviePoster(movie) {
    return (
      movie ?
        <TouchableHighlight onPress={this.onPosterPress.bind({context: this, movie: movie})}>
          <Image
            source={{ height: this.props.dimensions.height / 2, width: this.props.dimensions.width / 2, uri: movie.posterUrl }}
          />
        </TouchableHighlight>
        : null
    );    
  }

  render() {
    return (
      (!this.state.selectedMovie) ?
        <Content>
          <Grid>
            <Col style={{ height: this.props.dimensions.height }}>
              <Row>
                {this.getMoviePoster(this.props.data[this.state.currentIndex % this.props.data.length])}
              </Row>
              <Row>
                {this.getMoviePoster(this.props.data[(this.state.currentIndex + 1) % this.props.data.length])}
              </Row>
            </Col>
            <Col style={{ height: this.props.dimensions.height }}>
              <Row>
                {this.getMoviePoster(this.props.data[(this.state.currentIndex + 2) % this.props.data.length])}
              </Row>
              <Row>
                {this.getMoviePoster(this.props.data[(this.state.currentIndex + 3) % this.props.data.length])}
              </Row>
            </Col>
          </Grid>
          <MovieGridListButtons 
            style={{ height: this.props.dimensions.height, width: this.props.dimensions.width }} 
            handleLeftButtonPress={this.onLeftButtonPress.bind(this)} 
            handleRightButtonPress={this.onRightButtonPress.bind(this)}
          />
        </Content>
      :
        <Content>
          <MovieInfo dimensions={this.props.dimensions} movie={this.state.selectedMovie} />
        </Content>
    );
  }
}