import React, { Component } from 'react';
import { Container, Image, List, Button, Icon, Grid } from 'semantic-ui-react';

class ShowEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Grid.Row>
          <Grid.Column width={3}>
            <Container>
            <Image src={this.props.show.image} size='big' />
            {this.props.loggedIn === 'true' 
              ? <Button fluid icon size='big' inverted color='red' 
              onClick={() => {
                let showObj = {};
                showObj.id = this.props.show.id;
                showObj.name = this.props.show.name;
                this.props.getShow(showObj);
              }}>
                Add show <Icon name='add to calendar'/>
              </Button>
              : null
            }
            </Container>
          </Grid.Column>

          <Grid.Column width={13}>
            <ul>
              <li><h4>{this.props.show.name}</h4></li>
              <ul>{this.props.show.genres.map((genre, i) => <li key={i}>{genre}</li>)}</ul>
              <li>{this.props.show.summary}</li>
              <li>First aired: {this.props.show.firstAirDate}</li>
            </ul>
       </Grid.Column>
      </Grid.Row>
    )
  }
}

export default ShowEntry;