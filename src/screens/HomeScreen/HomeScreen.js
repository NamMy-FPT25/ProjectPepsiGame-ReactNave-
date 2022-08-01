import { View, Text,StyleSheet, Image, useWindowDimensions, TextInput, Button, Alert } from 'react-native'
import Logo from '../../../assets/images/Logo_Lionhead.png';
import React from 'react'
import { useForm, useWatch } from 'react-hook-form';
import { useNavigation } from '@react-navigation/core';
import CustomButton from '../../components/CustomButton';
import CustomButtonHome from '../../components/CustomButton/CustomButtonHome';
import Button1 from '../../components/CustomButton/Button1'
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {

    const {height} = useWindowDimensions();
    const {handleSubmit} = useForm();
    // chuyen man hinh
    const navigation = useNavigation();
    // const onSignInPress = () => {
    //   // console.warn('onSignInPress');
    //   navigation.navigate('SignIn');
    // };
    
    const onGuidePressed = () =>{
      // console.warn("Hướng dẫn");
      navigation.navigate('Guide');
    } 
    const onPlaygammePressed = () =>{
        console.warn("Chơi Ngay");
        Alert.alert(
          // Title
          'Bạn muốn sử dụng lượt chơi nào?',
          // Body
          'Choose option',
          [
            {
              text: 'Lượt chơi miễn phí', 
              onPress: () => {
                // console.warn("Lượt chơi miễn phí");
                navigation.navigate('GameFree');
              }
            },
            {
              text: 'Lượt chơi quy đổi',
              onPress: () => {
                // console.warn('Lượt chơi quy đổi');
                navigation.navigate('GameFree');
              }
            }
          ]
        )
    } 
    const onCodeQRPressed = () =>{
      // console.warn("Quét Mã");
      navigation.navigate('ScansCode');
    } 
    const onCollectionPressed = () =>{
      // console.warn("Bộ Sưu Tập");
      navigation.navigate('Collection');
    } 
    const onGiftPressed = () =>{
      // console.warn("Chi tiết quà tặng");
      navigation.navigate('DetailGift');
    } 
    // const onLogOutPressed = () =>{
    //   navigation.navigate('SignIn');
    // }
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
    <View style = {styles.root}>
      <Ionicons style = {styles.icon} name="exit" size={40} color="#6699CC" onPress={twoOptionAlert}/>
      <Image source={Logo} style = {[styles.logo, {height:height * 0.4}]} resizeMode = "contain"/>
      <Text style = {styles.text} onPress={onGuidePressed}> Hướng dẫn</Text>
      
      <CustomButtonHome text="Chơi Ngay" onPress={handleSubmit(onPlaygammePressed)}/>
      <Button1 text= "Quét Mã" onPress={onCodeQRPressed}/>
      <Button1 text= "Bộ Sưu Tập" onPress={onCollectionPressed}/>
      <Button1 text= "Chi tiết quà tặng" onPress={onGiftPressed}/>
    </View>
  );
};

const styles = StyleSheet.create({
    root:{
        top: 100,
        alignItems: 'center',
    },
    text:{
        color: '#FFCC33',
        fontSize: 18,
        alignItems: 'center',
    },
    image:{
        width: '70%',
        maxWidth: 300,
        height:200,
    },
    icon:{
      position: 'absolute',
      right: 30,
  },
});

export default HomeScreen;