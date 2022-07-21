import { View, Text,Image, StyleSheet, Button, Alert } from 'react-native'
import Image_pepsi  from '../../asset/images/scanscode.png';
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const scansCode = () => {
    const navigation = useNavigation();

    const onBackPressed = () =>{
        // console.warn("Hướng dẫn");
        navigation.navigate('HomePage');
    }

    const buttonConfirm =  () => {
        Alert.alert(
            // Title
            'Bạn nhận được 5 lượt chơi',
            // Body
            'Bạn đang có 8 lượt chơi',
            [
              {
                text: 'Scan tiếp', 
                onPress: () => {
                  // console.warn("SignIn")
                  navigation.navigate('ScansCode');
                }
              },
              {
                text: 'Chơi ngay',
                onPress: () => {
                //   console.log('Hủy');
                  navigation.navigate('GameFree');
                }
              }
            ]
          )
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
      <Text style={styles.text}>Quét Mã</Text>
      <Image    
        source={Image_pepsi} 
        style={{width: '80%', height: null, aspectRatio: 650/960, resizeMode: 'cover', top: 64}}/>
      {/* <Text style={styles.text}>Chúc mừng bạn đã nhận được{' '}<Text style={styles.number}>1 lon Pepsi</Text> ứng với{' '}<Text style={styles.number}>100 coins</Text></Text> */}
      
      <View style={styles.button}>
        <Button 
            borderRadius='16'
            color='#FF3333' 
            title='Quét Mã' 
            onPress={buttonConfirm}>
        </Button>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        top: 100,
        alignItems: 'center',
    },
    text:{
        color: '#000',
        fontSize: 22,
        alignItems: 'center',
    },
    number:{
        fontSize: 16,
        color:'#FF3333',
        fontStyle: 'bold',
    },
    button:{
        size: "lg",
        marginTop: 88,
        width: '55%',
        marginVertical: 16,
        borderRadius: 24,
    },
    icon_back:{
        position: 'absolute',
        left: 30,
    },

    icon:{
      position: 'absolute',
      right: 30,
  },
});

export default scansCode