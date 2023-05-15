import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {deleteTask} from "../api"

const Tasksitem = (task) => {
    const tasks = task?.task
    return (
        <>
        {
            tasks && tasks?.map(tsk =>(
                <View style={styles.itemContainer} key={tsk.id}>
                <TouchableOpacity>
                <Text style={styles.itemTitle}>{tsk.title}</Text>
                <Text style={styles.itemTitle}>{tsk.description}</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={{ 
                    backgroundColor:'#ee5253', 
                    padding:10, 
                    borderRadius:5 
                    }}
                    onPress={() => deleteTask(tsk.id)}
                    >
                    <Text style={{color: '#ffffff'}}>Borrar</Text>
                </TouchableOpacity>
            </View>
            ))
        }
        </>
  
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:'#CCD1D1',
        padding: 20,
        marginVertical:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    itemTitle:{
        color:'#BB8FCE',
        width: 200
    }
});

export default Tasksitem;






