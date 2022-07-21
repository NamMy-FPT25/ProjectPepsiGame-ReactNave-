import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import GuideScreen from '../screens/GuideScreen';
import AllNavigationScreen from '../screens/AllNavigationScreen/GameFree';
import Exchange from '../screens/AllNavigationScreen/Exchange';
import GameFree1 from '../screens/AllNavigationScreen/GameFree1';
import scansCode from '../screens/AllNavigationScreen/scansCode';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
        <Stack.Screen name="HomePage" component={HomeScreen}/>
        <Stack.Screen name="Guide" component={GuideScreen}/>
        <Stack.Screen name="GameFree" component={AllNavigationScreen}/>
        <Stack.Screen name="Exchange" component={Exchange}/>
        <Stack.Screen name="GameFree1" component={GameFree1}/>
        <Stack.Screen name="ScansCode" component={scansCode}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;