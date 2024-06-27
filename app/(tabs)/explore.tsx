import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import ReactLogo from '../assets/images/react-logo.png'; // Verifique o caminho

const Explore = () => {
  return (
    <View style={styles.container}>
      <Image source={ReactLogo} style={styles.logo} />
      <Text>Explore Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Explore;
