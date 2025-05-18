import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MemoHookExample() {
  const [count, setCount] = useState(0);
  const [showEven, setShowEven] = useState(false);

  // useMemo caches the filtered list unless count or showEven changes
  const numbers = useMemo(() => {
    console.log('🔄 Recalculating numbers...');
    const list = Array.from({ length: 10 }, (_, i) => i + count);
    return showEven ? list.filter(n => n % 2 === 0) : list;
  }, [count, showEven]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title={showEven ? 'Show All' : 'Show Even Only'} onPress={() => setShowEven(prev => !prev)} />
      {numbers.map(num => (
        <Text style={styles.text} key={num}>{num}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 10 },
  text: { fontSize: 18, textAlign: 'center' }
});
