import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native' 
import { SafeAreaView } from 'react-native-web';

import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={styles.root}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',

  },
});


