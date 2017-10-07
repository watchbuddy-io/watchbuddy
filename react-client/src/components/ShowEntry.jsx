import React from 'react';
import { Container, Image, List, Button, Icon, Grid } from 'semantic-ui-react';

const ShowEntry = ({ show, getShow }) => (
  <Grid.Row>
      <Grid.Column width={3}>
        <Container>
        <Image src={show.image} size='big' />
        <Button fluid icon size='big' inverted color='green' onClick={() => getShow(show.id)}>
          Add show <Icon name='add to calendar'/>
        </Button>
        </Container>
      </Grid.Column>

      <Grid.Column width={13}>
        <ul>
          <li><h4>{show.name}</h4></li>
          <ul>{show.genres.map((genre, i) => <li key={i}>{genre}</li>)}</ul>
          <li>{show.summary}</li>
          <li>First aired: {show.firstAirDate}</li>
        </ul>
   </Grid.Column>
  </Grid.Row>
  );

export default ShowEntry;