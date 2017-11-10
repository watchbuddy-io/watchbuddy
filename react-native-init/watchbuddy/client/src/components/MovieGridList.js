import axios from 'axios';
import MovieGridListButtons from './MovieGridListButtons';
import MovieInfo from './MovieInfo';
import React, { Component } from 'react';

import {
  Content
} from 'native-base';

import {
  Image,
  Linking,
  ScrollView,
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
      selectedMovie: null,
      movieUrl: 'https://www.amazon.com/Object-Beauty-John-Malkovic…camp=2025&creative=165953&creativeASIN=B003DZAZFE'
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

    axios.post('http://localhost:1391/click', 
    {
      movie_title: this.movie.title
    }).then(data =>
      console.log(data)
    ).catch(error => 
      console.log(error)
    );

    this.context.setState({selectedMovie: this.movie});
    // axios.post('http://localhost:1391/selectMovie', {movie: this.movie})
    // .then(data => this.setState({movieUrl:data.data.movieUrl})) // data.data.movieUrl 
  }

  getMoviePoster(movie, key) {
    return (
      movie ?
        <TouchableHighlight onPress={this.onPosterPress.bind({context: this, movie: movie})} key={key}>
          <Image
            source={{ height: this.props.dimensions.height / 2, width: this.props.dimensions.width / 2, uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
          />
        </TouchableHighlight>
        : null
    );    
  }

  componentWillUpdate() {
    if (this.state.selectedMovie) {
      this.setState({ selectedMovie: null });
    }
  }

  render() {
    return (
      (!this.state.selectedMovie) ?
        <Content>
          <ScrollView horizontal={true} snapToInterval={this.props.dimensions.width / 2}>
            <Grid>
              <Row>
                {this.props.data.slice(0, Math.floor(this.props.data.length / 2)).map((movie, i) => (
                  this.getMoviePoster(movie, i)
                ))}
              </Row>
              <Row>
                {this.props.data.slice(Math.floor(this.props.data.length / 2)).map((movie, i) => (
                  this.getMoviePoster(movie, i)
                ))}
              </Row>
            </Grid>
          </ScrollView>
        </Content>
      :
        <Content>
          <MovieInfo fbToken={this.props.fbToken} movieUrl={this.state.movieUrl} dimensions={this.props.dimensions} movie={this.state.selectedMovie} />
        </Content>
    );
  }
}