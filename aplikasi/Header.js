import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Aplikasi RSDS</Text>
    </View>
  );
};

const styles = {
  header: {
    height: 60,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
};

export default Header;
