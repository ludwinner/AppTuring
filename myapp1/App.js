import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import TasksForm from "./screens/TaskFormScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} 
      options={({navigation}) =>({
        title:'Welcome',
        headerStyle:{backgroundColor:'#BB8FCE'},
        headerTitleStyle:{color:'#ffffff'},
        
        headerRight: () => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}>
            <Text style={{color: '#ffffff', marginRight: 20, fontSize: 20}}>
            sign in
            </Text>
          </TouchableOpacity>
        )
      })}/>

      <Stack.Screen name="Home" component={HomeScreen} 
      options={({navigation}) =>({
        title:'Tareas',
        headerStyle:{backgroundColor:'#BB8FCE'},
        headerTitleStyle:{color:'#ffffff'},
        headerTintColor:'#ffffff',
        headerRight: () => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('TaskForm')}>
            <Text style={{color: '#ffffff', marginRight: 20, fontSize: 40}}>
              +
            </Text>
          </TouchableOpacity>
        )
        })}/>
      <Stack.Screen name="TaskForm" component={TasksForm}
        options={{
          title:'Nueva Tarea',
          headerStyle:{
            backgroundColor:'#BB8FCE'
          },
          headerTitleStyle:{color:'#ffffff'},
          headerTintColor:'#ffffff'
        }}
      />

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App