import { StyleSheet } from 'react-native';

export default loginStyles = {
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

      TextInput: {
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#29b6f6',
        borderWidth: 2
      }
    });
  }
};