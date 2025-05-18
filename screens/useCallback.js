import React, { useState, useCallback, memo } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

 // Child button component with memo
// React.memo avoids unnecessary re-render
const ChildButton = memo(({ onPress }) => {
  console.log('🔁 ChildButton rendered');
  return <Button title="Child Button" onPress={onPress} />;
});

export default function CallbackExample() {
  const [count, setCount] = useState(0);


// useCallback ensures the same function is passed unless dependencies change
  const handleClick = useCallback(() => {
    console.log('Child Button Clicked');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <ChildButton onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginVertical: 10 }
});
