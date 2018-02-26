import React from 'react'
import {Image,View,Text,TouchableHighlight} from 'react-native'

export default Tutorial = (props) => {
  return (
    <TouchableHighlight style={{flex:1}} onPress={()=> props.changeView('MovieSwipeDeck')}>
      <Image resizeMode="stretch" style={{flex: 1, height:undefined, width:undefined}} source={require('../data/static_poster_images/tutorial.jpg')} />
    </TouchableHighlight>
  )
}


/*
      <Text style={{color: 'white'}} onPress={() => props.changeView('MovieSwipeDeck')}>
        Got it, let's go!
      </Text>
*/