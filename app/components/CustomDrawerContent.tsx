import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Custom Header</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => alert('Link to help')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
