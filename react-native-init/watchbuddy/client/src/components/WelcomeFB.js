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

// CAN WE MAKE THIS STATELESS?
// we should be rendering null until we get back data from FB so its a white screen vs a transition from welcome page to grid list once the response comes back

export default WelcomeFB = (props) => {
  this.componentWillMount = () => {
    AccessToken.getCurrentAccessToken().then(data => {
      if (data) {
        console.log('You are already logged in!')
        props.changeView('MovieSwipeDeck')
      } else {
        console.log('You are not logged in!')
      }
    }).catch(err => console.log('Error on componentWillMount in WelcomeFB: ', err))
  };
  componentWillMount();
  console.log(FBSDK)
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
        <Text
          style={{
            color: "rgba(255,255,255,1)",
            position: "absolute",
            top: props.dimensions.height * .25,
            width: props.dimensions.width,
            textAlign: "center",
            backgroundColor: "transparent",
            fontSize: props.dimensions.width / 6.8,
            zIndex: 2
          }}
        >
          watchbuddy
        </Text>
        <Text style={{
          color: "rgba(255,255,255,1)",
          position: "absolute",
          width: props.dimensions.width * .8,
          backgroundColor: "transparent",
          fontSize: props.dimensions.width / 18.75,
          zIndex: 2,
        }}>
          Pick the movies you like and let our AI build recommendations according to your tastes!
        </Text>
        <Image style={styles.image} source={require('../../assets/welcome2.jpg')} />
        <View style={{
          position: 'absolute',
          bottom: props.dimensions.height * .1,
          zIndex: 2
        }}>
          <LoginButton
            readPermissions={["email","public_profile"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("There was an error logging in! " + result.error);
                } else if (result.isCancelled) {
                  console.log("Login cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      if (data) {
                        props.changeView('MovieSwipeDeck')
                      }
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("Logged out.")}/>
          <Text style={{
            zIndex: 1,
            backgroundColor: 'transparent',
            position: 'relative',
            top: '30%',
            alignSelf: 'center',
            textDecorationLine: 'underline',
            color: "rgba(255,255,255,1)"
          }} onPress={() => props.changeView('MovieSwipeDeck')}> Not Now </Text>
        </View>
      </View>
    );
}

// export default class WelcomeFB extends Component<{}> {
//   constructor(props) {
//     super(props)
//   }

//   componentWillMount() {
//     AccessToken.getCurrentAccessToken().then(data => {
//       if (data) {
//         this.props.changeView('MovieSwipeDeck')
//       }
//     }).catch(err => console.log('err', err))
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//       <View style={styles.overlay} />
//         <Text
//           style={{
//             color: "rgba(255,255,255,1)",
//             position: "absolute",
//             top: this.props.dimensions.height * .25,
//             width: this.props.dimensions.width,
//             textAlign: "center",
//             backgroundColor: "transparent",
//             fontSize: this.props.dimensions.width / 6.8,
//             zIndex: 2
//           }}
//         >
//           watchbuddy
//         </Text>
//         <Text style={{
//           color: "rgba(255,255,255,1)",
//           position: "absolute",
//           width: this.props.dimensions.width * .8,
//           backgroundColor: "transparent",
//           fontSize: this.props.dimensions.width / 18.75,
//           zIndex: 2,
//         }}>
//           Pick the movies you like and let our AI build recommendations according to your tastes!
//         </Text>
//         <Image style={styles.image} source={require('../../assets/welcome2.jpg')} />
//         <View style={{
//           position: 'absolute',
//           bottom: this.props.dimensions.height * .1,
//           zIndex: 2
//         }}>
//           <LoginButton
//             publishPermissions={["publish_actions"]}
//             onLoginFinished={
//               (error, result) => {
//                 if (error) {
//                   alert("login has error: " + result.error);
//                 } else if (result.isCancelled) {
//                   alert("login is cancelled.");
//                 } else {
//                   AccessToken.getCurrentAccessToken().then(
//                     (data) => {
//                       if (data) {
//                         this.props.changeView('MovieSwipeDeck')
//                       }
//                     }
//                   )
//                 }
//               }
//             }
//             onLogoutFinished={() => alert("logout.")}/>
//           </View>
//       </View>
//     );
//   }
// }

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