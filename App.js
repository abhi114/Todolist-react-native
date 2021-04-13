import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
      
      {/* Write a task section */}
      {/**It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. 
       * It can automatically adjust either its height, position, or bottom padding based on the keyboard height. */}
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style = {styles.writeTaskWrapper}   
      >
        <TextInput style = {styles.input} placeholder={"Write a task"}/>
        {/*as the add button */}
        <TouchableOpacity >
          <View style={styles.addWrapper}>
            <Text style ={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
      
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
  writeTaskWrapper: {
    // 	The element is positioned relative to its first positioned (not static) ancestor element
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    // using space-around will result in space being distributed to the beginning of the first child and end of the last child
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius : 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    //Align children of a container in the center of the container's cross axis.
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addText: {},
});
