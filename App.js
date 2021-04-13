import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/task';

export default function App() {
  return (
    <View style={styles.container}>
      {/*todays tasks*/}
      {/*the main heading of the app */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        {/*the container to contains all the tasks */}
        <View style={styles.items}>
          {/* this is where the tasks will go*/}
          <Task text ={'Task 1'}/>
          <Task text = {"Task 2"}/>
        </View>
      </View>
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',  
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'

  },
  items: {
    marginTop:30
  },
});
