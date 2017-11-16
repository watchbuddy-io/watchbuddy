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
} from 'native-base';

// Code from Seva, you can delete this or modularize as needed (also adding get request on click of SAVE button)
import axios from 'axios';
import { AccessToken } from 'react-native-fbsdk'
// finish from Seva

import { web } from 'react-native-communications';

const COMPONENT_WIDTH_RATIOS = {
  cardWidth: .92
}

export default MovieInfo = ({ dimensions, data, fbToken }) => {
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
    <View bounces={false}>
      <View style={{height: dimensions.height / 2, width: dimensions.width}}>
        {this.getMoviePoster(data)}
      </View>
      <Separator bordered>
        <Text>{data.title} | Rating: {data.vote_average} </Text>
      </Separator>
      <View style={{ display: 'flex', flexDirection: 'row', paddingTop: dimensions.height * .02, width: dimensions.width, justifyContent: 'space-between' }}>
        <Button 
          onPress={() => { data.movieUrl ? web(data.movieUrl) : alert(`We're working on linking this movie right now! Stay tuned!`) }} 
          title={'Watch Now'}
          buttonStyle={styles.Button}
        />
        <Button
          onPress={() => {
            console.log('FBTOKEN', fbToken)
            axios.post('http://13.57.94.147:8080/favorites', { fbToken: fbToken.userID, favoriteMovies: JSON.stringify(data), movies: data })
                .then(data => console.log('clicked Saved GET success: ', data))
                .catch(err => console.log('clicked Saved GET ERROR: ',err))
          }} 
          title={'Save'}
          buttonStyle={styles.Button} 
        />
      </View>
      <Text style={styles.description}>
        Critics Description:
      </Text>
      <Text style={styles.overview}>
        {data.overview}
      </Text>
    </View>
  );
}

const styles = {
  Button: {
    width: 160,
    backgroundColor: '#29b6f6',
  },
  description: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  },
  overview: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  }
}