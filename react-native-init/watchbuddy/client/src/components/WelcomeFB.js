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


export default class WelcomeFB extends Component<{}> {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    AccessToken.getCurrentAccessToken().then(data => {
      if (data) {
        this.props.changeView('MovieSwipeDeck')
      }
    }).catch(err => console.log('err', err))
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
            top: this.props.dimensions.height * .25,
            width: this.props.dimensions.width,
            textAlign: "center",
            backgroundColor: "transparent",
            fontSize: 55,
            zIndex: 2
          }}
        >
          watchbuddy
        </Text>
        <Text style={{
          color: "rgba(255,255,255,1)",
          position: "absolute",
          width: this.props.dimensions.width * .8,
          backgroundColor: "transparent",
          fontSize: 20,
          zIndex: 2,
        }}>
          Pick the movies you like and let our AI build recommendations according to your tastes!
        </Text>
        <Image style={styles.image} source={require('../../assets/welcome2.jpg')} />
        <View style={{
          position: 'absolute',
          bottom: this.props.dimensions.height * .1,
          zIndex: 2
        }}>
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
                      if (data) {
                        this.props.changeView('MovieSwipeDeck')
                        console.log('teststtt', AccessToken.getCurrentAccessToken())
                      }
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
    opacity: 0.25,
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