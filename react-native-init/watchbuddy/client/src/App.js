import axios from 'axios';
import content from './utils/content';
import dummyRequestData from './data/dummyRequestData';
import Nav from './components/Nav';
import React from 'react';
import screen from './utils/screen';
import views from './utils/views';

import FBSDK, { 
  AccessToken,
  LoginButton,
  LoginManager 
 } from 'react-native-fbsdk';

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
      view: 'WelcomeFB',
      data: dummyRequestData.data,
      screenDimensions: screen.getScreenDimensions(),
      fbToken: null,
      moviePrefs: null,
    }

    // AccessToken.getCurrentAccessToken()
    //   .then(data => {
    //     if (data) {
    //       this.setState({ fbToken: data });
    //     }
    //   })
    //   .catch(err => console.log('Error in App.js FB Access Token', err));

    this.changeView = this.changeView.bind(this);
  }

  changeView(view, data, fbToken, moviePrefs) {
    if (!data) {
      this.setState({ 
        view: view,
        fbToken: fbToken || this.state.fbToken,
        // fbToken: (fbToken !== undefined) ? fbToken || this.state.fbToken,
      });
    } else {
      this.setState({
        view: view,
        data: data,
        fbToken: fbToken || this.state.fbToken,
        moviePrefs: moviePrefs,
        // fbToken: (fbToken !== undefined) ? fbToken || this.state.fbToken,
      });
    }
  }

  // componentWillMount() {
  //   AccessToken.getCurrentAccessToken().then(data => {
  //     if (data) {
  //       console.log('Data on logged in', data)
  //       this.setState({ view: 'MovieGridList' });
  //       console.log('This user is opening the app again, logged in.')
  //     } 
  //   }).catch(err => {
  //     console.log('Error in App.js FB Access Token (open app again)', err)
  //   })
  // }

  renderView() {
    var Content = views[this.state.view];

    return (
      <Content
        data={this.state.data}
        dimensions={(this.state.view !== 'WelcomeFB') ? content.getContentDimensions(this.state.screenDimensions, this.state.view) : this.state.screenDimensions}
        changeView={this.changeView}
        fbToken={this.state.fbToken}
        moviePrefs={this.state.moviePrefs}
      />
    );
  }

  renderNav() {
    console.log('DATA', this.state.data);

    return (
      <Nav 
        view={this.state.view}
        data={this.state.data}
        dimensions={content.getNavDimensions(this.state.screenDimensions, this.state.view)}
        changeView={this.changeView}
        fbToken={this.state.fbToken}
      />
    );
  }

  render() {
    console.log('TOKEN', this.state.fbToken);
    
    return (
      <Container style={{ flexDirection: "column" }} bounces={(this.state.view === 'Favorites') ? true : false}>
        {(this.state.view === 'WelcomeFB') ? null : this.renderNav()}
        {this.renderView()}
      </Container>
    );
  }
}