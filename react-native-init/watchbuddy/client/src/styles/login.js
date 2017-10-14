import { StyleSheet } from 'react-native';

export default loginStyles = {
  getStyles: function(dimensions) {
    return StyleSheet.create({
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