import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const Food = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Food</Text>
      <Button title="Go to About Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'green',
  },
});

export default Food;
