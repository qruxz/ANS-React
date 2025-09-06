import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PostListScreen from './screens/PostListScreen';
import PostDetailScreen from './screens/PostDetailScreen';
import CounterScreen from './screens/CounterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="PostList" 
          component={PostListScreen} 
          options={{ title: 'Posts' }}
        />
        <Stack.Screen 
          name="PostDetail" 
          component={PostDetailScreen} 
          options={{ title: 'Post Details' }}
        />
        <Stack.Screen 
          name="Counter" 
          component={CounterScreen} 
          options={{ title: 'Counter App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}