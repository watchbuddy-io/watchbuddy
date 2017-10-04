import React from 'react';
import { Container, Image, Reveal } from 'semantic-ui-react';

const ShowEntry = props => (<Container>
	<Reveal animated='move right'>
    <Reveal.Content visible>
      <Image src='https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <ul>
        <li>Game of Thrones</li>
        <li>TV-MA</li>
        <li>57min</li>
        <li>Drama, Fantasy</li>
        <li>TV Series (2011- )</li>
      </ul>
    </Reveal.Content>
  </Reveal>
</Container>);

export default ShowEntry;