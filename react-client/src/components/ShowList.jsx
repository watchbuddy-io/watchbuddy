import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Image, List, Segment, Icon } from 'semantic-ui-react'
import ShowEntry from './ShowEntry.jsx';

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.setState({shows: data});
        console.log(data);
      }
    });
  }

  render() {
    return (<Segment inverted>
   <List divided inverted verticalAlign='middle' size='medium'>
    
    {this.state.shows.map((show, i) => <ShowEntry show={show} key={i}/>)}
    
   
   
  </List>
  
</Segment>)
  }
} 

export default ShowList;