import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Button, Animated, Easing } from 'react-native';


export default function Tab3() {
  const parallelVal1 = useRef(new Animated.Value(0.5)).current
  const parallelVal2 = useRef(new Animated.Value(0)).current

  const spin = parallelVal2.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, -200, 0, 200, 0]
  })

  const doThis = () => {
    Animated.parallel([
      Animated.spring(parallelVal1, {
        toValue: 1.5,
        friction: 1,
      }),
      Animated.timing(parallelVal2, {
        toValue: 1,
        duration: 5000,
        easing: Easing.bounce
      })
    ]).start( ()=> {parallelVal1.setValue(0.5), parallelVal2.setValue(0)})
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 3, justifyContent: "center", alignItems: "center", textAlign: "center"}}>
        <Animated.Image style={[styles.img, {transform: [{ scale: parallelVal1 }]}]} source={require('../assets/logo.png')} />
        <Animated.Text style={[styles.text, { transform:[{translateX: spin}] }]}>Welcome to Faculty of IT!!</Animated.Text>
      </View>
      <View style={{flex: 1, width: '100%', justifyContent: 'flex-end', padding: 5}}>
        <Button title="RUN PARALLEL" style={styles.btn} onPress={doThis}/>
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
  img: {
    width: 100,
    height: 80,
  },
  text: {
    marginTop: 50,
    fontSize: 24,
    color: '#db6400',
    fontWeight: 'bold'
  },
});
