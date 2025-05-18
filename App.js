// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, StyleSheet } from 'react-native';
import ReactMemo from './screens/reactMemo';
import useCallback from './screens/useCallback';
import UseMemo from './screens/useMemo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="React.memo" component={ReactMemo} />
        <Stack.Screen name="useCallback" component={useCallback} />
        <Stack.Screen name="useMemo" component={UseMemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="React.memo Example" onPress={() => navigation.navigate('React.memo')} />
      <Button title="useCallback Example" onPress={() => navigation.navigate('useCallback')} />
      <Button title="useMemo Example" onPress={() => navigation.navigate('useMemo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: 20, padding: 20 }
});

// //USING REACT MEMO
// import React, { useState, memo } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// // Child component wrapped with React.memo
// // React.memo helps this component "remember" itself if props haven't changed
// const Hello = memo(({ name }) => {
//   console.log("🔁 Hello component re-rendered");
//   return <Text style={styles.text}>Hello, {name}!</Text>;
// });

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       {/* Even when count changes, Hello won't re-render unless `name` changes */}
//       <Hello name="Frances" />
//       <Text style={styles.text}>Count: {count}</Text>
//       <Button title="Increment" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 20, marginVertical: 10 }
// });

// /////////////////////////////////////////////////////

// // USING USECALLBACK
// import React, { useState, useCallback, memo } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';

// // Child button component with memo
// // React.memo avoids unnecessary re-render
// const ChildButton = memo(({ onPress }) => {
//   console.log('🔁 ChildButton rendered');
//   return <Button title="Child Button" onPress={onPress} />;
// });

// export default function App() {
//   const [count, setCount] = useState(0);

//   // useCallback ensures the same function is passed unless dependencies change
//   const handleClick = useCallback(() => {
//     console.log('Child Button Clicked');
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Count: {count}</Text>
//       <Button title="Increment" onPress={() => setCount(count + 1)} />
//       {/* ChildButton will not re-render unless handleClick changes */}
//       <ChildButton onPress={handleClick} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 20, marginVertical: 10 }
// });

////////////////////////////////////////////////////////////

// //USING USE MEMO 
// import React, { useState, useMemo } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [showEven, setShowEven] = useState(false);

//   // useMemo caches the filtered list unless count or showEven changes
//   const numbers = useMemo(() => {
//     console.log('🔄 Recalculating numbers...');
//     const list = Array.from({ length: 10 }, (_, i) => i + count);
//     return showEven ? list.filter(n => n % 2 === 0) : list;
//   }, [count, showEven]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Count: {count}</Text>
//       <Button title="Increment" onPress={() => setCount(count + 1)} />
//       <Button
//         title={showEven ? 'Show All' : 'Show Even Only'}
//         onPress={() => setShowEven(prev => !prev)}
//       />
      
//       {numbers.map(num => (
//         <Text style={styles.text} key={num}>{num}</Text>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center' },
//   title: { fontSize: 24, marginBottom: 10 },
//   text: { fontSize: 18, textAlign: 'center' }
// });






// import React, { useState, useCallback, memo } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const Child = memo(({ onPress }) => {
//   console.log('🔁 Child rendered');
//   return <Button title="Click Me" onPress={onPress} />;
// });

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [multiplier, setMultiplier] = useState(2);

//   // This function depends on "multiplier"
//   const handlePress = useCallback(() => {
//     console.log("Result:", count * multiplier);
//   }, [multiplier]); // <- dependency

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Count: {count}</Text>
//       <Text style={styles.text}>Multiplier: {multiplier}</Text>

//       <Button title="Increase Count" onPress={() => setCount(count + 1)} />
//       <Button title="Change Multiplier" onPress={() => setMultiplier(multiplier + 1)} />

//       <Child onPress={handlePress} />
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 18, marginVertical: 8 }
// });
// import React, { useState, useMemo } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

// const data = [
//   'Apple', 'Banana', 'Cherry', 'Durian', 'Grapes', 'Orange', 'Pineapple'
// ];

// export default function App() {
//   const [search, setSearch] = useState('');

//   // 🔁 useMemo recalculates only when `search` changes
//   const filteredData = useMemo(() => {
//     console.log('🔄 Filtering data...');
//     return data.filter(item =>
//       item.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search]); // <-- this is the dependency

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search fruit..."
//         value={search}
//         onChangeText={setSearch}
//       />
//       <FlatList
//         data={filteredData}
//         keyExtractor={(item) => item}
//         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, marginTop: 50 },
//   input: { borderWidth: 1, padding: 10, marginBottom: 20 },
//   item: { fontSize: 18, marginVertical: 5 },
// });


