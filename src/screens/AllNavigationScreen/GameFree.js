import { View, Text, StyleSheet, Image, SafeAreaView, Alert, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/Logo_Lionhead.png';
import {Ionicons, Feather} from "@expo/vector-icons";
import Banner  from '../../asset/images/gamefree.png';
import { useNavigation } from '@react-navigation/native';

const GameFree = () => {
    // const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onBackPressed = () =>{
        // console.warn("Hướng dẫn");
        navigation.navigate('HomePage');
    }
    const onLogoPressed = () =>{
        // console.warn("chuyển màn hình");
        navigation.navigate('GameFree1');
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
      <Text style={styles.text}>Vuốt lên để chơi</Text>
      <Text style={styles.text1}>Bạn còn{' '}<Text style={styles.number}>3</Text> lượt chơi miễn phí</Text>
      <Image    
        source={Banner} 
        style={{width: '80%', height: null, aspectRatio: 750/660, resizeMode: 'cover', top: 88}}/>
      <Feather style = {styles.icon_up} name="chevrons-up" size={100} color="#FF9900" onPress={onLogoPressed}/>
      <Image    
        source={Logo} onPress={onLogoPressed}
        style={{width: '44%', height: null, aspectRatio: 750/660, resizeMode: 'cover', top: 300}}/>
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
    text1:{
        color: '#000',
        fontSize: 11,
        alignItems: 'center',
    },
    number:{
        fontSize: 14,
        color:'#FF3333',
        fontStyle: 'bold',
    },
    logo:{
        width: '70%',
        maxWidth: 300,
        height:100,
    },
    icon:{
      position: 'absolute',
      right: 30,
    },
    icon_back:{
        position: 'absolute',
        left: 30,
    },
    icon_up:{
        position: 'absolute',
        alignItems: 'center',
        marginTop: 530
    },
});

export default GameFree