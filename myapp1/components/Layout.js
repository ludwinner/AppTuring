import React from "react";
import { View , StyleSheet, StatusBar} from "react-native";

const Layout = ({children}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#BB8FCE'/>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:'#566573',
        padding:20,
        flex:1,
        alignItems: "center"
    }
})

export default Layout;





