import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'; // Verifique o caminho

const Layout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Layout Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  text: {
    color: Colors.text,
  },
});

export default Layout;
