import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IMode } from "../interfaces";


export function MainMenu() {
  const navigation = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
        title = "Начать игру 3x3"
        onPress = {()=> navigation.navigate('Game',{
         
        })}
        />
       
        <Button
        title = "Начать игру 9x9"
        onPress = {()=> navigation.navigate('Game')}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
      marginBottom: 2
    }
  })
