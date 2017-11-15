import dummyRottenTomatoesData from '../data/dummyRottenTomatoesData';
import React from 'react';

import {
  Image,
  Text,
  View,
  AlertIOS
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
            console.log('Save Button Pressed')
            if (fbToken) {
              axios.post('http://13.57.94.147:8080/favorites', {fbToken: fbToken.userID, favoriteMovies: JSON.stringify(movie), movies: movie})
                .then(data => console.log('clicked Saved GET success: ',data))
                .catch(err => console.log('clicked Saved GET ERROR: ',err))
            } else {
              AlertIOS.alert(
               'Login to save favorites',
               'Our AI gets smarter each movie you save - that means even better recommendations for you',
               [
                 {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                 {text: 'Login', onPress: () => {
                   this.props.changeView('WelcomeFB')
                   console.log('Login Pressed')
                 }},
               ],
              )
            }
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