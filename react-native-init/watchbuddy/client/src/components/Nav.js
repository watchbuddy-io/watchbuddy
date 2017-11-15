import React from 'react';

import {
  Button,
  Header
} from 'react-native-elements';

import {
  ActionSheetIOS,
  Linking,
  View,
  Text
} from 'react-native';

// import Mailer from 'react-native-mail';
import { textWithoutEncoding, email } from 'react-native-communications'

import axios from 'axios';

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
  'Cancel',
];

var CANCEL_INDEX = 3;

export default class Nav extends React.Component {
  constructor({
    view,
    dimensions,
    changeView,
    fbToken
  }) {
    super();

    this.state = {
      clicked: 'none'
    };
  }

  showActionSheet() {
    const {
      changeView,
      fbToken
    } = this.props;

    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX
    },
    (buttonIndex) => {
      if (buttonIndex === 1) {
        textWithoutEncoding(null, 'Hey! Check out watchbuddy.io on the App Store for great AI based movie recommendations!')
      } else if (buttonIndex === 2) {
        email(['support@watchbuddy.io'], null, null, null, 'Thanks for reaching out! We promise to take care of you. Let us know your issue below:')
      } else if (buttonIndex === 0) {
        axios.get(`http://13.57.94.147:8080/favorites`, {params:{fbToken:fbToken.userID}})
          .then(data => {
            changeView('Favorites', data.data.movies);
          })
          .catch(err => {
            alert('You Have No Favorites!');
          })
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
    const {
      view,
      dimensions,
      changeView,
      fbToken
    } = this.props;
    
    return (
      <Header style={{ width: dimensions.width, height: dimensions.height, flexDirection: "row", justifyContent: 'space-between' }}
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
                  disabled={(view === 'MovieSwipeDeck') ? true : false}
                  disabledStyle={{backgroundColor: '#FFF'}}
          />
        }
        rightComponent={
          <Button icon={{ name: 'home', size: ICON_STYLES.size, color: ICON_STYLES.color }}
                  buttonStyle={{ backgroundColor: '#FFF' }}
                  onPress={() => changeView('MovieGridList')} 
                  disabled={(view === 'MovieSwipeDeck') ? true : false}
                  disabledStyle={{backgroundColor: '#FFF'}}
          />
        }
      />
    );
  }
}