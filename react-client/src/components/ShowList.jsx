import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Image, List, Segment, Icon, Loader, Dimmer, Grid } from 'semantic-ui-react'
import ShowEntry from './ShowEntry.jsx';

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: 'false',
      showList: [{
        firstAirDate: '2000-01-01',
        genres: ['Daniel'],
        image: '',
        summary: 'Default summary'
      }]
    };
  }

  componentDidMount() {
    this.setState({showList: this.props.showList}, () => console.log('setting state in show list'));

    $.ajax({
      url: '/recommend',
      method: 'GET',
      contentType: 'application/json',
      success: data => {
        this.setState({showList: data, loaded: 'true'});
      }
    });
  }

  componentWillReceiveProps({showList}) {
    this.setState({showList});
  }

  getShowInfo(show) {
    console.log(show);
    // $.ajax({
    //   url: '/add',
    //   method: 'POST',
    //   contentType: 'application/json',
    //   data: JSON.stringify({show}),
    //   success: data => console.log('data from get show info', data)
    // });
  }

  render() { 
    return (<div>
    {this.state.loaded === 'true' 
    ? 
      <Segment inverted>
    <Grid celled>
          { this.state.showList.map((show, i) => <ShowEntry show={show} key={i} getShow={this.props.getShow}/>) }
    </Grid>
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