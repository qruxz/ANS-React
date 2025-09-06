import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function PostDetailScreen({ route, navigation }) {
  const { post } = route.params;

  return (
    <ScrollView style={styles.detailContainer} contentContainerStyle={{ padding: 20 }}>
      {/* Post title */}
      <Text style={styles.detailTitle}>{post.title}</Text>

      {/* Post body */}
      <Text style={styles.detailBody}>{post.body}</Text>

      {/* Extra details */}
      <View style={{ marginTop: 20, padding: 15, backgroundColor: '#f8f8f8', borderRadius: 10 }}>
        <Text style={{ fontSize: 14, color: '#666', marginBottom: 5 }}>
          📌 Post ID: {post.id}
        </Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          👤 User ID: {post.userId}
        </Text>
      </View>

      {/* Navigation button */}
      <TouchableOpacity 
        style={[styles.navigationButton, { marginTop: 30 }]}
        onPress={() => navigation.navigate('Counter')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Go to Counter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
