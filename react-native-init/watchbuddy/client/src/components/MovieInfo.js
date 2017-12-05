import dummyRottenTomatoesData from '../data/dummyRottenTomatoesData';
import React from 'react';
import moviedb from '../../../helper/moviedb.js';

import {
  AlertIOS,
  Image,
  ScrollView,
  Text,
  View,
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

export default MovieInfo = ({ dimensions, data, fbToken }) => {
  this.styles = {
    Button: {
      width: dimensions.width * .3,
      backgroundColor: '#29b6f6',
    },
    boldText: {
      fontWeight: 'bold',
      fontSize: 16,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
    },
    plainText: {
      fontSize: 16,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
    },
    divider: {
      height: dimensions.height * .05,
      width: dimensions.width,
    },
    separator: {
      height: dimensions.height * .05,
      width: dimensions.width,
      backgroundColor: 'rgba(150, 150, 150, .8)',
    },
    main: {
      height: dimensions.height,
      width: dimensions.width,
    },
    poster: {
      height: dimensions.height * .5,
      width: dimensions.width,
    },
    overview: {
      height: dimensions.height * .35,
      width: dimensions.width,
      backgroundColor: 'rgba(200, 200, 200, .8)'
    },
    scrollview: {
      height: dimensions.height * .35, 
      width: dimensions.width,
    },
    buttonBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between', 
      backgroundColor: 'rgba(200, 200, 200, .8)'
    },
    buttonView: {
      width: dimensions.width * .3,
    },
  }
  
  this.getMoviePoster = (movie) => {
    return (
      movie ?
        <Image
          source={{ height: dimensions.height * .5, width: dimensions.width, uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        />
        : null
    );    
  }

  return (
    <View style={this.styles.main} bounces={false}>
      <View style={this.styles.poster}>
        {this.getMoviePoster(data)}
      </View>
      <View style={this.styles.divider}>
        <Separator style={this.styles.separator}>
            <Text>{data.title} | Rating: {Math.min(Number(data.vote_average * 13.5).toFixed(0), 98)}%</Text>
        </Separator>
      </View>
      <View style={this.styles.overview}>
        <Text style={this.styles.boldText}>
          Synopsis:
        </Text>
        <ScrollView style={this.scrollview} bounces={false}>
          <Text style={this.styles.plainText}>
            {data.overview}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.buttonBox}>
        <View style={styles.buttonView}>
          <Button 
            onPress={() => { data.movieUrl ? web(data.movieUrl) : alert(`We're working on linking this movie right now! Stay tuned!`) }} 
            title={'Watch Now'}
            buttonStyle={this.styles.Button}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={() => {

            }} 
            title={'Rate'}
            buttonStyle={this.styles.Button} 
          />
        </View>
        <View style={styles.buttonView}>
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
            buttonStyle={this.styles.Button} 
          />
        </View>
      </View>
    </View>
  );
}