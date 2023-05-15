import React, {useState} from "react";
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import Layout from "../components/Layout";


export default function LoginScreen() {
  
  const [task, setTask] = useState({
    usuario:'',
    contraseña:''
  })

  const handleChange = (name, value) => setTask({...task, [name]:value})
  
  const handleSubmit = () => {
    setTask({
      usuario:'',
      contraseña:''
  })
}
  return (
    <Layout>
        <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor='#808B96'
            value={task.usuario}
            onChangeText={(text)=> handleChange('usuario', text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor='#808B96'
            value={task.contraseña}
            onChangeText={(text)=> handleChange('contraseña', text)}
        />
        
        {/* <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit} >
            <Text style={styles.buttonText}>Iniciar Session</Text>
        </TouchableOpacity> */}
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

});