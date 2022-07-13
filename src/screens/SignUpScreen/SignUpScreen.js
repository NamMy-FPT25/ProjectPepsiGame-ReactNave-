import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'!@$%^&*()_]/;

const SignUpScreen = () => {
  // const [username, setUsername] = useState(''); 
  // const [email, setEmail] = useState(''); 
  // const [password, setPassword] = useState(''); 
  // const [passwordRepeat, setPasswordRepeat] = useState(''); 
  const{control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  // câu lệnh chuyển màn hình
  const navigation = useNavigation();
 
  const onRegisterPressed = () => {
    // console.warn("onRegisterPressed");
    navigation.navigate('ConfirmEmail');
  };
  const onSignInPress = () => {
    // console.warn('onSignInPress');
    navigation.navigate('SignIn');
  };

  const onTermOfUsePressed = () => {
    console.warn('onTermOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
      <Text style={styles.title}>Create an account</Text>
     {/* <Image source={Logo} style = {[styles.logo, {height: height * 0.3}]} resizeMode = "contain" /> */}
     <CustomInput 
        name="username" 
        control={control} 
        placeholder="Username" 
        rules={{
          required: 'Username is required', 
          minLength: {value: 3, message: 'Username should be at least 3 characters long',},
          maxLength: {value: 24, message: 'Username should be at least 24 characters long',},
        }}
      />
     <CustomInput 
        name="email" 
        control={control} 
        placeholder="Email" 
        rules={{
          required: 'Email is required', 
          pattern: {value: EMAIL_REGEX, message:'Email is invalid'},
          }}
      />
     <CustomInput name="password" control={control} placeholder="Password" secureTextEntry
                  rules={{
                    required: 'Password is required', 
                    minLength: {value: 3, message: 'Username should be at least 3 characters long',},
                  }}/>
     <CustomInput name="password-repeat" control={control} placeholder="Repeat Password" secureTextEntry
                  rules={{
                    validate: value => value == pwd || 'Password do not match',
                  }}/>
     <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
     <Text style={styles.text}> 
          By register, you confirm that you account{' '}
          <Text style={styles.link} onPress={onTermOfUsePressed}>Team of user</Text> and {' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
     </Text>
    {/* phần đăng kí  */}
    <SocialSignInButtons/>
    {/* <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
    <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4d44"/>
    <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#e3e3e3" fgColor="#363636"/> */}
    <CustomButton text="Have an account? Sign In" onPress={onSignInPress} type="TERTIARY" />
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

export default SignUpScreen;