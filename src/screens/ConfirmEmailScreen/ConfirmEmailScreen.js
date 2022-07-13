import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState(''); 

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    // console.warn("onConfirmPressed");
    navigation.navigate('HomePage');
  };
  const onSignInPress = () => {
    // console.warn('onSignInPress');
    navigation.navigate('SignIn');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };

  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
      <Text style={styles.title}>Confirm your email</Text>
     {/* <Image source={Logo} style = {[styles.logo, {height: height * 0.3}]} resizeMode = "contain" /> */}
     <CustomInput placeholder="Enter your confirm Code" value={code} setValue={setCode}/>
     
     <CustomButton text="Confirm" onPress={onConfirmPressed} />
    
     <CustomButton text="Resend code" onPress={onResendPress} type="SECONDARY" />
    <CustomButton text="Back to Sign In" onPress={onSignInPress} type="TERTIARY" />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text:{
    color: 'gray',
    marginVertical:10,
  },
  link:{
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;