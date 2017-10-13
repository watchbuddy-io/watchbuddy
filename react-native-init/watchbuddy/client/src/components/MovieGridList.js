import MovieGridListButtons from './MovieGridListButtons';
import React, { Component } from 'react';

import {
  Content
} from 'native-base';

import {
  Image,
  View
} from 'react-native';

import {
  Col,
  Row,
  Grid
} from 'react-native-easy-grid';

import {
  Button
} from 'react-native-elements';

export default class MovieGridList extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
  }

  onLeftButtonPress() {
    console.log('left button clicked');
    this.setState({currentIndex: Math.abs(this.state.currentIndex - 4) % this.props.data.length});
  }

  onRightButtonPress () {
    console.log('right button clicked');
    this.setState({currentIndex: (this.state.currentIndex + 4) % this.props.data.length});
  }

  getMoviePoster(movie) {
    return (
      movie ?
        <Image
          source={{ height: this.props.dimensions.height / 2, width: this.props.dimensions.width / 2, uri: movie.posterUrl }}
        />
        : null
    );    
  }

  render() {
    return (
      <Content>
        <Grid>
          <Col style={{ height: this.props.dimensions.height }}>
            <Row>
              {this.getMoviePoster(this.props.data[this.state.currentIndex])}
            </Row>
            <Row>
              {this.getMoviePoster(this.props.data[this.state.currentIndex + 1])}
            </Row>
          </Col>
          <Col style={{ height: this.props.dimensions.height }}>
            <Row>
              {this.getMoviePoster(this.props.data[this.state.currentIndex + 2])}
            </Row>
            <Row>
              {this.getMoviePoster(this.props.data[this.state.currentIndex + 3])}
            </Row>
          </Col>
        </Grid>
        <MovieGridListButtons 
          style={{ height: this.props.dimensions.height, width: this.props.dimensions.width }} 
          handleLeftButtonPress={this.onLeftButtonPress.bind(this)} 
          handleRightButtonPress={this.onRightButtonPress.bind(this)}
        />
      </Content>
    );
  }
}