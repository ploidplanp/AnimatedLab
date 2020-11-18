import React, { useRef} from 'react';
import { StyleSheet, Text, View, Image, Button, Animated } from 'react-native';

export default function Tab1() {
  const springVal = useRef(new Animated.Value(0.5)).current
  const spring = () => {
    Animated.spring(springVal, {
      toValue: 2,
      friction: 1,
    }).start(()=> { springVal.setValue(0.5)})
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 3, justifyContent: "center", alignItems: "center", textAlign: "center"}}>
        <Animated.Image style={{width: 100, height: 80, transform: [{scale: springVal}]}} source={require('../assets/logo.png')} />
      </View>
      <View style={{flex: 1, width: '100%', justifyContent: 'flex-end', padding: 5}}>
        <Button
          title="SPRING"
          style={styles.btn}
          onPress={spring}
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
});