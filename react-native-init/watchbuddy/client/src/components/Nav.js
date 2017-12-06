import React from 'react';

import {
  Button,
  Header
} from 'react-native-elements';

import {
  ActionSheetIOS,
  AlertIOS,
  Linking,
  View,
  Text,
} from 'react-native';

// import Mailer from 'react-native-mail';
import { textWithoutEncoding, email } from 'react-native-communications'

import axios from 'axios';

import { LoginManager } from 'react-native-fbsdk';

// added to see if pull works
const ICON_STYLES = {
  size: 25,
  color: '#444'
}

const BUTTON_STYLES = {
  backgroundColor: 'none'
}

var BUTTONS = [
  'View Favorites',
  'Share',
  'Send Feedback',
  'Logout',
  'Cancel',
];

var BUTTONS_NO_LOGIN = [
  'View Favorites',
  'Share',
  'Send Feedback',
  'Cancel',
];

var CANCEL_INDEX = 4;

var CANCEL_INDEX_NO_LOGIN = 3;

export default class Nav extends React.Component {
  constructor({ view, data, dimensions, changeView, fbToken }) {
    super();

    this.state = {
      data: (['MovieSwipeDeck', 'MovieGridList'].includes(view)) ? data : null,
    };

    this.view = view;
    this.dimensions = dimensions;
    this.changeView = changeView;
    this.fbToken = fbToken;
  }

  componentWillReceiveProps({ view, data, dimensions, changeView, fbToken }) {
    this.setState({ data: (['MovieSwipeDeck', 'MovieGridList'].includes(view)) ? data : this.state.data });

    this.view = view;
    this.dimensions = dimensions;
    this.changeView = changeView;
    this.fbToken = fbToken;
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: (this.fbToken) ? BUTTONS : BUTTONS_NO_LOGIN,
      cancelButtonIndex: (this.fbToken) ? CANCEL_INDEX : CANCEL_INDEX_NO_LOGIN
    },
    (buttonIndex) => {
      if (buttonIndex === 0 && this.fbToken) {
        axios.get(`http://13.57.94.147:8080/favorites`, { params: { fbToken: this.fbToken } }) // change to just this.fbToken since its deconstructed
          .then(data => this.changeView('Favorites', (Array.isArray(data.data.movies)) ? data.data.movies : []))
          .catch(err => alert('You Have No Favorites!'))
      } else if (buttonIndex === 0) {
        AlertIOS.alert(
         'Login to save favorites',
         'Our AI gets smarter with each movie you save, but you have to be logged in!',
         [
           { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
           { text: 'Login', onPress: () => {
             this.changeView('WelcomeFB');
             console.log('Login Pressed');
           } },
         ],
        )
      } else if (buttonIndex === 1) {
        // this.handleHelp();
        // Linking.openURL('mailto:somethingemail@gmail.com?subject=abcdefg&body=body')
        textWithoutEncoding(null, 'Hey! Check out watchbuddy.io/app on the App Store for great AI based movie recommendations!')
      } else if (buttonIndex === 2) {
        email(['support@watchbuddy.io'], null, null, null, 'Thanks for reaching out! We promise to take care of you. Let us know your issue below:')
      } else if (buttonIndex === 3 && this.fbToken) {
        LoginManager.logOut();
        this.changeView('WelcomeFB');
      }
    });
  }

  handleHelp() {
    Mailer.mail({
      subject: 'need help',
      recipients: 'support@example.com',
      body: 'asdf',
      isHTML: true,
    }, (error, event) => {
        if(error) {
          console.log(error, 'Error', 'Could not send mail. Please send us an email to support@example.com');
        }
    });
  }

  render() {
    return (
      <Header style={{ width: this.dimensions.width, height: this.dimensions.height, flexDirection: "row", justifyContent: 'space-between' }}
        leftComponent={
          <Button icon={{ name: 'more-horiz', size: ICON_STYLES.size, color: ICON_STYLES.color }} 
                  buttonStyle={{ backgroundColor: '#FFF'}} 
                  onPress={() => this.showActionSheet()}
                  disabledStyle={{backgroundColor: '#FFF'}}
          />
        }
        centerComponent={
          <Button title={'watchbuddy.io'}
                  buttonStyle={{ backgroundColor: '#FFF' }}
                  textStyle={{ color: '#444', fontSize: 20 }}
                  disabled={(this.view === 'MovieSwipeDeck') ? true : false}
                  disabledStyle={{backgroundColor: '#FFF'}}
          />
        }
        rightComponent={
          <Button icon={{ name: 'home', size: ICON_STYLES.size, color: ICON_STYLES.color }}
                  buttonStyle={{ backgroundColor: '#FFF' }}
                  onPress={() => this.changeView('MovieGridList', this.state.data)} 
                  disabled={(this.view === 'MovieSwipeDeck') ? true : false}
                  disabledStyle={{backgroundColor: '#FFF'}}
          />
        }
      />
    );
  }
}