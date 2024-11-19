import React from "react";
import { Text, View, Button, StyleSheet, Alert } from "react-native";

export default function Index() {
  return (
    <View
      style={ styles.buttonContainer
        
      }
    >
      <Text>Login</Text>

      <Button
    title='Entrar'
    onPress={()=>Alert.alert('☻')}
    />
{'\n'}
<Button
color={'red'}
    title='Login'
    onPress={()=>Alert.alert('☻')}
    />
    
    </View>
    
  );

}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 200,
        height: 50,
        justifyContent:'center',
        backgroundColor: 'purple'
    }
})