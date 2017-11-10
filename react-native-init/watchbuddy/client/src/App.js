import axios from 'axios';
import content from './utils/content';
import dummyData from './data/dummyData';
import dummyRequestData from './data/dummyRequestData';
import Nav from './components/Nav';
import React from 'react';
import screen from './utils/screen';
import views from './utils/views';

import FBSDK, { LoginManager, LoginButton, AccessToken } from 'react-native-fbsdk';

import { 
  Spinner
} from 'nachos-ui';

import { 
  Container, 
} from 'native-base';

import {
  Component
} from 'react';

import {
  Dimensions,
  View
} from 'react-native';

export default class App extends Component<{}> {
  constructor() {
    super();

    this.state = {
      view: 'MovieSwipeDeck',
      data: dummyRequestData.data,
      screenDimensions: screen.getScreenDimensions()
    }
    this.fbToken = AccessToken.getCurrentAccessToken().then(data => {
      if (data) {
        this.fbToken = data;
      }
    }).catch(err => console.log('Error in App.js FB Access Token', err))
  }

  changeView(view, data, favorites) {
    if (!data) {
      this.setState({ view: view });
    } else {
      this.setState({
        view: view,
        data: data
      });
    }
  }

  renderView(data) {
    var Content = views[this.state.view];

    return (
      <Content
        data={data}
        dimensions={(this.state.view !== 'WelcomeFB') ? content.getContentDimensions(this.state.screenDimensions) : this.state.screenDimensions}
        changeView={this.changeView.bind(this)}
        fbToken={this.fbToken}
      />
    );
  }

  renderNav() {
    return (
      <Nav 
        dimensions={content.getNavDimensions(this.state.screenDimensions)}
        currentView={this.state.view}
        changeView={this.changeView.bind(this)}
        fbToken={this.fbToken}
      />
    );
  }

  render() {
    console.log('FB Token: ', this.fbToken)
    console.log(this.state.view);
    return (
      <Container style={{ flexDirection: "column" }}>
        {(this.state.view !== 'WelcomeFB') ? this.renderNav() : null}
        {this.renderView(this.state.data)}
      </Container>
    );
  }
}
