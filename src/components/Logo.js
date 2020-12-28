import React, { memo } from 'react';
import { Image, StyleSheet,View } from 'react-native';

const Logo = () => (
  <View style={styles.container}>
    <Image source={require('../assets/LOG.jpg')} style={styles.image} />
  </View>);

const styles = StyleSheet.create({
  container:{
    paddingTop: 0,
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
});

export default memo(Logo);
