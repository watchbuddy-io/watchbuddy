import dummyRottenTomatoesData from '../data/dummyRottenTomatoesData';
import React from 'react';
import moviedb from '../../../helper/moviedb.js';

import {
  AlertIOS,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import {
  button
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
  styles = {
    button: {
      width: dimensions.width * .45,
      height: dimensions.height * .075,
      backgroundColor: '#29b6f6',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    boldText: {
      fontWeight: 'bold',
      fontSize: 16,
      paddingLeft: dimensions.width * .0333,
      paddingRight: dimensions.width * .0333,
      paddingBottom: dimensions.width * .02,
    },
    plainText: {
      fontSize: 16,
      paddingLeft: dimensions.width * .0333,
      paddingRight: dimensions.width * .0333,
    },
    divider: {
      height: dimensions.height * .05,
      width: dimensions.width,
    },
    separator: {
      height: dimensions.height * .05,
      width: dimensions.width,
      backgroundColor: 'rgba(180, 180, 180, .2)',
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
      height: dimensions.height * .31,
      width: dimensions.width,
      backgroundColor: 'white'
    },
    scrollview: {
      width: dimensions.width,
    },
    buttonBox: {
      width: dimensions.width,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingLeft: dimensions.width * .0333,
      paddingRight: dimensions.width * .0333,
      paddingTop: dimensions.width * .0333,
      paddingBottom: dimensions.width * .0333,
    },
    rating: {
      height: dimensions.height * .075,
      width: dimensions.width * .2,
      backgroundColor: '#29b6f6',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  
  this.getMoviePoster = (movie) => {
    return (
      movie ?
        <Image
          source={{ height: dimensions.height * .5, width: dimensions.width, uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        />
        : null
    );    
  };

  this.getNormalizedRating = (data) => {
    return Math.min(Number((10 - data.vote_average) * 4 + data.vote_average * 10).toFixed(0), 98);
  };

  return (
    <View style={styles.main} bounces={false}>
      <View style={styles.poster}>
        {this.getMoviePoster(data)}
      </View>
      <View style={styles.divider}>
        <Separator style={styles.separator}>
            <Text style={styles.titleText}>{data.title} | Rating: {getNormalizedRating(data)}%</Text>
        </Separator>
      </View>
      <View style={styles.buttonBox}>
        {/* <TouchableHighlight
          style={styles.rating}
          activeOpacity={1}
          underlayColor={'white'}
        >
          <View style={styles.rating}>
            <Text style={styles.buttonText}>{getNormalizedRating(data)}%</Text>
          </View>
        </TouchableHighlight> */}
        <TouchableHighlight 
          onPress={() => { data.movieUrl ? web(data.movieUrl) : alert(`We're working on linking this movie right now! Stay tuned!`) }} 
          style={styles.button}
          activeOpacity={.8}
          underlayColor={'white'}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Watch Now</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            console.log('Save button Pressed')
            if (fbToken) {
              axios.post('http://13.57.94.147:8080/favorites', {fbToken: fbToken, favoriteMovies: JSON.stringify(data), movies: data})
                .then(data => console.log('clicked Saved GET success: ', data))
                .catch(err => console.log('clicked Saved GET ERROR: ', err))
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
          style={styles.button} 
          activeOpacity={.8}
          underlayColor={'white'}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </TouchableHighlight>
      </View>
      <ScrollView style={this.scrollview} bounces={false}>
        <View style={styles.overview}>
          <Text style={styles.boldText}>
            Synopsis
          </Text>
          <Text style={styles.plainText}>
            {data.overview}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}