import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

// TODO: PASS WATCHNOW LINK - SHOULD BE INSIDE GRIDLIST (CURRENLTY DOESNT WORK WHEN CLICKING FROM FAVS)

export default Favorites = (props) => {
  return (
      <List containerStyle={{marginBottom: 20}}>
        {
          props.data ? props.data.map((movie, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:'https://image.tmdb.org/t/p/w500/'+ movie.poster_path}}
              key={i}
              title={movie.title}
              onPress={() => props.changeView('MovieGridList', movie)}
            />
          )) : <Text> You Don't Have Any Favorited Movies! </Text>
        }
      </List>
  )
}

// with state below:

// export default class Favorites extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }

//   render() {
//     console.log('inside Favs', this.props.data)
//     return (
//       <List containerStyle={{marginBottom: 20}}>
//         {
//           this.props.data ? this.props.data.map((movie, i) => (
//             <ListItem
//               roundAvatar
//               avatar={{uri:'https://image.tmdb.org/t/p/w500/'+ movie.poster_path}}
//               key={i}
//               title={movie.title}
//               onPress={() => this.props.changeView('MovieGridList', movie)}
//             />
//           )) : <Text> You Don't Have Any Favorited Movies! </Text>
//         }
//       </List>
//     )
//   }
// }

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