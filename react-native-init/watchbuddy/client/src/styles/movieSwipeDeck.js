import { StyleSheet } from 'react-native';

const COMPONENT_WIDTH_RATIOS = {
  cardWidth: .92
}

const COMPONENT_HEIGHT_RATIOS = {
  movieSwipeDeck: .85,
  movieSwipeDeckButtons: .15
}

export default movieSwipeDeckStyles = {
  getStyles: function(dimensions) {
    return StyleSheet.create({
      Card: {
        alignSelf: 'center',
        height: dimensions.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck,
        width: dimensions.width * COMPONENT_WIDTH_RATIOS.cardWidth
      },
      Content: {
        height: dimensions.height, 
        flexDirection: 'column'
      },
      DeckSwiper: {
        height: dimensions.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck
      },
      MovieSwipeDeckButtons: {
        height: dimensions.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeckButtons
      },
      Image: {
        height: dimensions.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck,
        width: dimensions.width * COMPONENT_WIDTH_RATIOS.cardWidth
      },
      Text: {
        color: '#FFF',
        textAlign: 'center'
      },
      View: {
        alignSelf: 'center',
        height: dimensions.height * COMPONENT_HEIGHT_RATIOS.movieSwipeDeck,
        backgroundColor: '#29b6f6',
        flexDirection: 'column',
        justifyContent: 'center',
        width: dimensions.width * COMPONENT_WIDTH_RATIOS.cardWidth
      }
    });
  }
};