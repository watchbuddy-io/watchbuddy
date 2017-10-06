import React from 'react';
import { Container, Image, List, Button, Icon } from 'semantic-ui-react';

const ShowEntry = ({ show, getShow }) => (<List.Item>
      <List.Content floated='right'>
        <Button icon size='medium' inverted color='green' onClick={() => getShow(show.name)}>
          <Icon name='add to calendar'/>
        </Button>
      </List.Content>
      <Image src={show.image} size='small' />
      <List.Content>
        <ul>
        <li>{show.name}</li>
        <ul>{show.genres.map((genre, i) => <li key={i}>{genre}</li>)}</ul>
        <li>{show.summary}</li>
        <li>First aired: {show.firstAirDate}</li>
      </ul>
      </List.Content>
    </List.Item>);

export default ShowEntry;