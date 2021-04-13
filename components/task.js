import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';



const Task = (props) =>{
    return (
        <View style={styles.item}>
            <View style = {styles.itemLeft}>
                {/* A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it. */}
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            {/*hold view for the small dot ar right */}
            <View style={styles.circular}></View>
            
        </View>
    )
}
//A StyleSheet is an abstraction similar to CSS StyleSheets
//Creates a StyleSheet style reference from the given object.
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        //Evenly space off children across the container's main axis, distributing the remaining space between the children.
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft:{
        //Default value. The flexible items are displayed horizontally, as a row
        flexDirection: 'row',
        alignItems : 'center',
        //if it gets to long it will wrap it to the next line
        flexWrap: 'wrap'
    },
    square:{
        width:24,
        height:24,
        backgroundColor: '55BCF6',
        opacity: 0.4,
        borderRadius:5,
        marginRight: 15,
    },
    itemText:{
        //else it will push the remaining child view off the screen
        maxWidth:'80%',

    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

//But a default export can be imported with any name for example
export default Task;