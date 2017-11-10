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

export default MovieSwipeDeckButtons = ({ dimensions, movie, movieUrl, fbToken }) => {
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
        <Text>{movie.title} | Rating: {movie.vote_average} </Text>
      </Separator>
      <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 5, width: 400}}>
        <Button 
          onPress={() => {movieUrl ? web(movieUrl) : alert(`We're working on adding this feature as we speak! Stay tuned!`)}} 
          title={'Watch Now'}
          buttonStyle={styles.Button1}
        />
        <Button
          onPress={() => {
            console.log('insideasdfsdaf', fbToken)
<<<<<<< HEAD
            axios.post('http://13.57.94.147/favorites', {fbToken: fbToken.userID, favoriteMovies: JSON.stringify(movie)})
=======
            axios.post('http://13.57.94.147:8080/favorites', {fbToken: fbToken.userID, favoriteMovies: JSON.stringify(movie), movies: movie})
>>>>>>> c16c7c751d5e9606b17dee26dfd7a0441c52fd64
                .then(data => console.log('clicked Saved GET success: ',data))
                .catch(err => console.log('clicked Saved GET ERROR: ',err))
          }} 
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