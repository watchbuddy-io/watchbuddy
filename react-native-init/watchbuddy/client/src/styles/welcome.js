import { StyleSheet } from 'react-native';

export default welcomeStyles = {
  getStyles: function(dimensions) {
    return StyleSheet.create({
      Button: {
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#29b6f6',
        borderWidth: 2
      },

      Text: {
        fontSize: 24,
        color: '#29b6f6'
      },

      Col: {
        height: dimensions.height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
      },

      Row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
      }
    });
  }
};