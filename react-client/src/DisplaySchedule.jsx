import React, { Component } from 'react';
import $ from 'jquery';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import AddShow from './components/AddShow.jsx';
import { Container, Header, Message, Segment, Icon, Grid, Image } from 'semantic-ui-react'

class DisplaySchedule extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      PostAddShowData: {}
    };
  }

  render () {
    return (<div>
      <Navbar
      loggedIn='true' 
      changeView = { this.props.changeView } 
      getShowList = { this.props.getShowList } />

      <Header as='h3' icon textAlign='center' inverted color='red'>
        <Header.Content>
          You are watching
          <Header textAlign='center'>
            { this.props.showName }
          </Header>
        </Header.Content>
      </Header>

      <Header as='h3' icon textAlign='center' inverted color='red'>
          <Icon name='checked calendar' circular />
          <Header.Content>
            { this.props.PostAddShowData.episodesLeft } days left!
          </Header.Content>
        </Header>

      <Segment inverted>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Container>
              
              <Image src = { this.props.PostAddShowData.first[5] } size='huge' shape='rounded' verticalAlign='middle' />
              </Container>
            </Grid.Column>

            <Grid.Column width={13}>
              <ul style={{listStyle: 'none'}}>
                <li>
                  <Header as='h4' icon textAlign='left' inverted color='red'>
                    <Header.Content textAlign='left'>
                      Current episode: { this.props.PostAddShowData.first[3] }
                    </Header.Content>
                  </Header>
                </li>
                <li> { this.props.PostAddShowData.first[4] } </li>
              </ul>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Container>
              
              <Image src = { this.props.PostAddShowData.second[5] } size='huge' shape='rounded' verticalAlign='middle' />
              </Container>
            </Grid.Column>

            <Grid.Column width={13}>
              <ul style={{listStyle: 'none'}}>
                <li>
                  <Header as='h4' icon textAlign='left' inverted color='red'>
                    <Header.Content textAlign='left'>
                      Next episode: { this.props.PostAddShowData.second[3] }
                    </Header.Content>
                  </Header>
                </li>
                <li> { this.props.PostAddShowData.second[4] } </li>
              </ul>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Segment> 

      </div>);
    }
}

export default DisplaySchedule;