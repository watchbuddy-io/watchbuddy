import dummyRottenTomatoesData from '../data/dummyRottenTomatoesData';
import React from 'react';

import {
  Image,
  Text,
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

import {
  Separator
} from 'native-base'

const COMPONENT_WIDTH_RATIOS = {
  cardWidth: .92
}

export default MovieSwipeDeckButtons = ({ dimensions, movie }) => {
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
        <View>
        </View>
      </View>
      <Separator bordered>
        <Text>{movie.title} | Rating: 7.5 </Text>
      </Separator>
      <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 5, width: 400}}>
        <Button 
          onPress={() => {}} 
          title={'Watch Now'}
          buttonStyle={styles.Button1}
        />
        <Button
          onPress={() => {}} 
          title={'Save'}
          buttonStyle={styles.Button2} 
        />
      </View>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5
      }}>
        Critics Description:
      </Text>
      <Text style={{ 
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5
       }}>
        {movie.overview}
      </Text>
    </View>
  );
}

const styles = {
  Button1: {
    width: 160,
    backgroundColor: '#29b6f6',
  },
  Button2: {
    width: 160,
    backgroundColor: '#29b6f6',
  }

}