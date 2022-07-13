import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState(''); 
  const [newPassword, setNewPassword] = useState(''); 

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    // console.warn("onSubmitPressed");
    navigation.navigate('HomePage');
  };
  const onSignInPress = () => {
    // console.warn('onSignInPress');
    navigation.navigate('SignIn');
  };

  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
      <Text style={styles.title}>Reset your password</Text>
     {/* <Image source={Logo} style = {[styles.logo, {height: height * 0.3}]} resizeMode = "contain" /> */}
     <CustomInput placeholder="Code" value={code} setValue={setCode}/>
     <CustomInput placeholder="Enter your new Password" value={newPassword} setValue={setNewPassword}/>
     
     <CustomButton text="Submit" onPress={onSubmitPressed} />
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

export default NewPasswordScreen;