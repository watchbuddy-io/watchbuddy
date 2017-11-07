import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { List, ListItem } from 'react-native-elements';


const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

export default class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    //`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  }

  render() {
    console.log('inside Favs', this.props.data)
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          this.props.data ? this.props.data.map((movie, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:'https://image.tmdb.org/t/p/w500/'+ movie.poster_path}}
              key={i}
              title={movie.title}
              onPress={() => this.props.changeView('MovieGridList', movie)}
            />
          )) : <Text> You Don't Have Any Favorited Movies! </Text>
        }
      </List>
    )
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})