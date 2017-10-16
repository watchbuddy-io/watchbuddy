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
        <Text style={{ position: 'absolute', width: dimensions.width, bottom: 0, fontSize: 24, color: '#FFF', backgroundColor: 'rgba(0,0,0,.5)' }}>
          {movie.title}
        </Text>
        </View>
      </View>
      <Separator bordered>
        <Text>{movie.title} | Rating: 7.5 </Text>
      </Separator>
      <View style={{ display: 'flex', alignItems: 'stretch', flexDirection: 'row', paddingTop: 5, width: dimensions.width}}>
        <Button 
          onPress={() => {}} 
          title={'Watch Now'}
          buttonStyle={styles.Button}
        />
        <Button
          onPress={() => {}} 
          title={'Save'}
          buttonStyle={styles.Button} 
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
  Button: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#29b6f6'
  }
}