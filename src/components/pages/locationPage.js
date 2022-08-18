import { View, Text } from 'react-native';
import React, {useEffect,useState} from 'react'
import * as Location from 'expo-location';
import {useNavigation} from '@react-navigation/native';



export default function locationPage() {


  useEffect(()=>{
    (async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted') {
            setErrorMsg('Permision denied');
            return;
        }

        let location =await Location.getCurrentPositionAsync({});
        console.log('loc',location);


    })
  })
  return (
    <View>
      <Text>locationPage</Text>

    </View>
  )
}