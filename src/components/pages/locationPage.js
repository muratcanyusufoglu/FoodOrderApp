import { View, Text, Image, StyleSheet, Button } from 'react-native';
import React, {useEffect,useState} from 'react'
import * as Location from 'expo-location';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { onUpdateLocation } from '../../redux/action/userAction';

export default function locationPage() {
    const dispatch = useDispatch();
    const userReducer = useSelector((state)=>state.userReducer);
 
    const [errorMsg,setErrorMsg ] = useState("");
    const [displayAdress,setDisplayAdress] = useState();
    const navigation = useNavigation();

  useEffect(()=>{
    (async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if(status !== 'granted') {
            setErrorMsg('Permision denied');
            return;
        }

        let location =await Location.getCurrentPositionAsync({});
        console.log('loc',location);

        const {coords} = location;

        if(coords.latitude) {
            const {latitude,longitude} = coords

            let adressResponse = await Location.reverseGeocodeAsync({latitude,longitude});

            setDisplayAdress(`${adressResponse[0].name},${adressResponse[0].street}`,
            `${adressResponse[0].city}`,`${adressResponse[0].country}`);

            console.log('adress',adressResponse);
        }

    })
  })
  return (
    <View style={styles.container}>
      <View style={styles.body}>
      <Image source={require('../../images/delivery_icon.png')} style={styles.delivery_icon}/>

      <Text style={styles.font}>{displayAdress}</Text>
      </View>

      <Button title="Ana Sayfa" onPress={()=>{dispatch(onUpdateLocation(displayAdress)); navigation.navigate('Home')}}/>

    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white'
    },
    delivery_icon:{
        width:120,
        height:120,
    },
    body:{
        flex:9,
        alignItems:'center',
        justifyContent: 'center',
    },
    font:{
        fontSize:25,
        fontWeight:'700',
        color:'#4f4f4f'
    }
})