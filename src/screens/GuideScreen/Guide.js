import { View, Text, StyleSheet, Image, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import Banner  from '../../asset/images/image1.png';
import { useNavigation } from '@react-navigation/native';

const Guide = () => {
    const navigation = useNavigation();

    const onBackPressed = () =>{
        // console.warn("Hướng dẫn");
        navigation.navigate('HomePage');
      }

    const twoOptionAlert = () =>{
        Alert.alert(
          // Title
          'Bạn có muốn Đăng xuất không?',
          // Body
          'Choose option',
          [
            {
              text: 'Đăng xuất', 
              onPress: () => {
                // console.warn("SignIn")
                navigation.navigate('SignIn');
              }
            },
            {
              text: 'Hủy',
              onPress: () => {
                console.log('Hủy');
              }
            }
          ]
        )
      }

  return (
    <View style={styles.root}>
      <Ionicons style = {styles.icon} name="exit" size={40} color="#6699CC" onPress={twoOptionAlert}/>
      <Ionicons style = {styles.icon_back} name="arrow-back" size={32} color="#6699CC" onPress={onBackPressed}/>
      <Text style={styles.text}>Hướng dẫn</Text>
      <Image    
        source={Banner} 
        style={{width: '80%', height: null, aspectRatio: 750/460, resizeMode: 'cover', top: 32}}/>
      <Text style= {{top:36, fontSize:20}}>Bước 1: Lorem ipsum dolor sit...</Text>
      <Image    
        source={Banner} 
        style={{width: '80%', height: null, aspectRatio: 750/460, resizeMode: 'cover', top: 40}}/>
      <Text style= {{top:44, fontSize:20}}>Bước 2: Lorem ipsum dolor sit...</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        top: 64,
        alignItems: 'center',
    },
    text:{
        color: '#000',
        fontSize: 22,
        alignItems: 'center',
    },
    logo:{
        width: '70%',
        maxWidth: 300,
        height:200,
    },
    icon:{
      position: 'absolute',
      right: 30,
    },
    icon_back:{
        position: 'absolute',
        left: 30,
    },
});

export default Guide