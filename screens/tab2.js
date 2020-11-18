import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Button, Animated, Easing } from 'react-native';

export default function Tab2() {
  const fadeAnim = useRef(new Animated.Value(1)).current
  const spinAnim = useRef(new Animated.Value(0)).current

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  })

  const doThis = () => {
    Animated.sequence([
      // fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true
      }),
      // fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true
      }),
      // spin right to left
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 5000,
      }),
      // spin left to right
      Animated.timing(spinAnim, {
        toValue: 0,
        duration: 5000,
      }),
    ]).start()
  }

  return (
    <View style={styles.container}>
      <View style={styles.ContainerImage}>
        <Animated.Image style={[styles.img, {opacity: fadeAnim, transform: [{ rotate: spin }] }]} source={require('../assets/logo.png')} />
      </View>
      <View style={{flex: 1, width: '100%', justifyContent: 'flex-end', padding: 5}}>
        <Button
          title="RUN SEQUENCE"
          style={styles.btn}
          onPress={doThis}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainerImage: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  img: {
    width: 200,
    height: 180,
  },
});