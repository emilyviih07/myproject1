import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';


export default function login() {
  return (
    <View style={styles.container}>
    
    <Avatar
  rounded
  size="large"
  source={{
    uri:
      'https://gravatar.com/avatar/1dbdb3f15c17c2c33e4a9b8c134ae355?s=400&d=robohash&r=x',
  }}
/>

<Input
  placeholder='Email'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/>

<Input placeholder="Senha" secureTextEntry={true} />
      <StatusBar style="auto" />

      <Button
  title="Logar"
/>

<Button
  title="Cadastre-se"
  type="outline"
/>

<Text>Esqueceu a senha</Text>
    </View>
    
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
