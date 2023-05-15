import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";

import Tasksitem from "./Tasksitem";
import { getTasks, deleteTask } from "../api";

const Taskslist = () =>{

    const [tasks , setTasks] = useState([])

    const loadTasks = async () =>{    
        const dato = await getTasks();
        setTasks(dato);        
    };

    useEffect(()=>{
        loadTasks()
    }, [])
        
    const renderItem = ({item}) =>{
        console.log(item,"lista de tareas");
        return <Tasksitem task={item}
        />
    }
    return(
        <FlatList
        style={{width:'100%'}}
                data={tasks}
                keyExtractor={(item) => item.id + ''}
                renderItem={ renderItem }
                
            />        
    )
}

export default Taskslist;