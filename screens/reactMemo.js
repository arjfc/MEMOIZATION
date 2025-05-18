import React, { useState, memo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Hello = memo(({ name }) => {
  console.log("🔁 Hello component re-rendered");
  return <Text style={styles.text}>Hello, {name}!</Text>;
});

export default function MemoExample() {
  const [count, setCount] = useState(0);
  
// React.memo helps this component "remember" itself if props haven't changed
  return (
    <View style={styles.container}>
      <Hello name="Frances" />
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginVertical: 10 }
});
