import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Image, List, Segment, Icon, Loader, Dimmer } from 'semantic-ui-react'
import ShowEntry from './ShowEntry.jsx';

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: 'false',
      shows: [{
        firstAirDate: '2000-01-01',
        genres: ['Daniel'],
        image: '',
        summary: 'Default summary'
      }]
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/recommend',
      method: 'GET',
      contentType: 'application/json',
      success: data => {
        this.setState({shows: data, loaded: 'true'});
      }
    });
  }

  render() { 
    return (<div>
    {this.state.loaded === 'true' 
    ? <Segment inverted>
        <List divided inverted verticalAlign='middle' size='medium'>
          { this.state.shows.map((show, i) => <ShowEntry show={show} key={i} getShow={this.props.getShow}/>)}
        </List>
      </Segment> 
  : <Segment>
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>
    </Segment>}
    </div>)
  }
} 

export default ShowList;