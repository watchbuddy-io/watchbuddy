// fb
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import FBSDK, { LoginManager, LoginButton, AccessToken } from 'react-native-fbsdk';


export default class fbAuthComponent extends Component<{}> {

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
      if (result.isCancelled) {
        console.log('Login Cancelled', result);
      } else {
        console.log('login success: ', result)
      }
    }, function(error) {
      console.log('An error occured: ', error)
    })
  }

  render() {
    console.log(AccessToken)
    console.log(AccessToken.getCurrentAccessToken().then(data => console.log('data', data)).catch(err => console.log('err', err)))
    return (
      <View style={styles.container}>
      <View style={styles.overlay} />
        <Text
          style={{
            color: "rgba(255,255,255,1)",
            position: "absolute",
            top: 138.79,
            left: 6.79,
            width: 359.88,
            height: 74.53,
            backgroundColor: "transparent",
            fontSize: 55,
            zIndex: 2
          }}
        >
          watchbuddy.io
        </Text>
        <Text style={{
          zIndex: 10,
          color: "rgba(255,255,255,1)",
          position: "absolute",
          top: 300,
          left: 6.79,
          width: 359.88,
          height: 200.53,
          backgroundColor: "transparent",
          fontSize: 20,
        }}>
          We use complex machine learning algorithms to help you watch the best movie, for your mood at the time. {"\n\n"}

          You'll start by simply choosing the movies you like, dislike or haven't watched yet. Let our AI do the rest of the work!
        </Text>
        <Image style={styles.image} source={require('./client/assets/welcome2.jpg')} />
        <View style={styles.button}>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log(data)
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    zIndex: 2,
    opacity: 0.2,
    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  button: {
    position: 'absolute',
    bottom: 90,
    zIndex: 2
  },
  text: {
    position: 'absolute',
    top: 140,
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  image: {
    height: 800, 
    width: 450
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// fb