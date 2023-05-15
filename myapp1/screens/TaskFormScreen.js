import React, {useState} from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity
} from "react-native";

import Layout from "../components/Layout";
import { saveTask } from "../api";

//const navigation = useNavigation();

const TasksForm = () => {

    const [task, setTask] = useState({
        title:'',
        description:''
    })

    const handleChange = (name, value) => setTask({...task, [name]:value})

    const handleSubmit = () => {
        saveTask(task)
        //navigation.navigate('HomeScreen');
        setTask({
            title:'',
            description:''
        })
    }

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Escribe un Titulo"
                placeholderTextColor='#808B96'
                value={task.title}
                onChangeText={(text)=> handleChange('title', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Escribe una Descripcion"
                placeholderTextColor='#808B96'
                value={task.description}
                onChangeText={(text)=> handleChange('description', text)}
            />
            
            <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit} >
                <Text style={styles.buttonText}>Guardar Tarea</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        marginBottom:15,
        fontSize: 20,
        borderWidth:1,
        borderColor:'#ffffff',
        height:45,
        color:'#ffffff',
        padding:5,
        textAlign:'center',
        borderRadius:5
    },
    buttonSave:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:3,
        backgroundColor:'#CCD1D1',
        width:'90%',       
    },
    buttonText:{
        color:'#BB8FCE',
        textAlign:'center'
    }

})

export default TasksForm;