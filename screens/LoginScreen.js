import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login successful, navigating...');
    // Here you can also add validation if needed
    navigation.navigate('PostList');
  };

  // Alternative: Direct navigation for testing
  const goDirectlyToPostList = () => {
    console.log('Going directly to PostList');
    navigation.navigate('PostList');
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>Welcome Back</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Debug button to test navigation */}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#FF6B6B', marginTop: 15 }]} 
        onPress={goDirectlyToPostList}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Test: Go to Posts</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#03DAC6', marginTop: 15 }]} 
        onPress={() => navigation.navigate('Counter')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Go to Counter</Text>
      </TouchableOpacity>
    </View>
  );
}
