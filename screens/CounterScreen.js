import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>{count}</Text>
      
      <View style={styles.counterButtonsContainer}>
        <TouchableOpacity style={styles.counterButton} onPress={decrement}>
          <Text style={styles.counterButtonText}>−</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.counterButton} onPress={increment}>
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}