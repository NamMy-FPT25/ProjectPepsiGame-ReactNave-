import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native'
import Image_pepsi  from '../../asset/images/cans_pepsi.png';
import React, { useState } from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Collection = () => {
    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    const onPressAdd = () => setCount(prevCount => prevCount + 1);
    const onPressRemove = () => setCount(prevCount => prevCount - 1);

    const buttonGiftExchange =  () => {
        Alert.alert(
            // Title
            'Bạn có chắc chắn muốn đổi 2 combo hay không?',
            // Body
            'Choose option',
            [
              {
                text: 'Đổi quà', 
                onPress: () => {
                  console.warn("Đã đổi được quà")
                //   navigation.navigate('Collection');
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
      <Text style={styles.text}>Bộ sưu tập</Text>
      <Text style={styles.number}>700</Text>
      <Text style={styles.text1}>Số coins hiện tại của bạn</Text>
      
      <Image    
        source={Image_pepsi} 
        style={{width: '80%', height: null, aspectRatio: 750/663, resizeMode: 'cover', top: 44}}/>

      <Text style={styles.text2}>Số coins hiện tại của bạn{' '} 
      <Text style={styles.number1}>AN-LỘC-PHÚC{' '}</Text>để có cơ hội nhận ngay{' '}
      <Text style={styles.number1}>300 coins{' '}</Text>hoặc một{' '}
      <Text style={styles.number1}>phần quà may mắn</Text></Text>

      <View style={styles.countContainer}>
        <Ionicons name="ios-remove-circle" size={32} color="black" onPress={onPressRemove} />
        <Text style={styles.countText}>{count}</Text>
        <Ionicons style={styles.countContainer1} onPress={onPressAdd} name="add-circle-sharp" size={32} color="black" />
      </View>

      <View style={styles.button}>
        <Button 
            borderRadius='16'
            color='#FF3333' 
            title='Đổi ngay' 
            onPress={buttonGiftExchange}>
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
    text1:{
        color: '#000',
        fontSize: 14,
        alignItems: 'center',
    },
    text2:{
        marginTop: 44,
        padding: 16,
        color: '#000',
        fontSize: 18,
        alignItems: 'center',
    },
    number:{
        marginTop: 16,
        fontSize: 36,
        color:'#FF3333',
        fontStyle: 'bold',
    },
    number1:{
        padding: 16,
        fontSize: 18,
        color:'#FF9900',
    },
    button:{
        size: "lg",
        marginTop: 64,
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
    countContainer: {
        marginTop: 16,
        marginEnd: 88,
        marginLeft: 88,
        flexDirection: 'row',
    },
    countContainer1: {
        marginStart: 88,
        
    },
    countText: {
        marginLeft: 64,
        fontSize: 20,
        fontStyle: 'bold',
        color: "#001100",
        position: 'absolute',
    }
  });

export default Collection