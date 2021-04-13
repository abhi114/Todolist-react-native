import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Task from './components/task';


const Task = () =>{
    return (
        <View>
            <Text>This is a task</Text>
        </View>
    )
}
//A StyleSheet is an abstraction similar to CSS StyleSheets
//Creates a StyleSheet style reference from the given object.
const styles = StyleSheet.create({})

//But a default export can be imported with any name for example
export default Task;