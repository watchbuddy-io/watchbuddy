import React from 'react';

import {
  Button,
  Header
} from 'react-native-elements';

const ICON_STYLES = {
  size: 25,
  color: '#444'
}

const BUTTON_STYLES = {
  backgroundColor: 'none'
}

export default Nav = ({ dimensions }) => {
  return (
    <Header style={{ height: dimensions.height, flexDirection: "row", justifyContent: 'space-between' }}
      leftComponent={<Button icon={{ name: 'menu', size: ICON_STYLES.size, color: ICON_STYLES.color }} buttonStyle={{ backgroundColor: '#FFF' }} />}
      centerComponent={<Button title={'watchbuddy.io'} buttonStyle={{ backgroundColor: '#FFF' }} textStyle={{ color: '#444', fontSize: 20 }} />}
      rightComponent={<Button icon={{ name: 'home', size: ICON_STYLES.size, color: ICON_STYLES.color }} buttonStyle={{ backgroundColor: '#FFF' }} />}
    />
  );
}