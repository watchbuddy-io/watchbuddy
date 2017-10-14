import dummyRottenTomatoesData from '../data/dummyRottenTomatoesData';
import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

const COMPONENT_WIDTH_RATIOS = {
  cardWidth: .92
}

export default MovieSwipeDeckButtons = ({ dimensions, changeView, movie }) => {
  this.getMoviePoster = (movie) => {
    return (
      movie ?
        <Image
          source={{ height: dimensions.height / 2, width: dimensions.width, uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        />
        : null
    );    
  }

  return (
    <View>
      <View style={{height: dimensions.height / 2, width: dimensions.width}}>
        {this.getMoviePoster(movie)}
        <Text style={{ position: 'absolute', bottom: 0, fontSize: 24, color: '#FFF', backgroundColor: 'rgba(0,0,0,.5)' }}>
          {movie.title}
        </Text>
      </View>
      <Text style={{ fontSize: 16 }}>
        {movie.overview}
      </Text>
    </View>
  );
}