import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/task';

export default function App() {
  const [task,setTask] = useState();
  //array that stores all the task
  const [taskItems,setTaskItems] = useState([]);

  //function to handle add task
  const handleAddTask = () => {
    //dismiss the keyboard
    Keyboard.dismiss();
    //console.log(task);
    //adding the new task with all the previous task
    setTaskItems([...taskItems,task]);
    //to empty the input area
    setTask(null);

  }
  const completeTask = (index) =>{
    //get the copy of the task and delete the one specified by the index and return the remaining array
    let itemsCopy = [...taskItems];
    //index and how many are passed as attributes to splice
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/*todays tasks*/}
      {/*the main heading of the app */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        {/*the container to contains all the tasks */}
        <View style={styles.items}>
          {/* this is where the tasks will go*/}
          {/* display the task items, iterate over the taskItems array and display each */}
          {/* {/* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: */}
          {
            taskItems.map((item,index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)} >
                 <Task  text={item} />

                </TouchableOpacity>
              )
              
            })
          }
          
        </View>
      </View>
      
      {/* Write a task section */}
      {/**It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. 
       * It can automatically adjust either its height, position, or bottom padding based on the keyboard height. */}
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style = {styles.writeTaskWrapper}   
      >
        <TextInput style = {styles.input} placeholder={"Write a task"} value={task} onChangeText={text =>setTask(text)}/>
        {/*as the add button */}
        <TouchableOpacity onPress={() => handleAddTask()} >
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
