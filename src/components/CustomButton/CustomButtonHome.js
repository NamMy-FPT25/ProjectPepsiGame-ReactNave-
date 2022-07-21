import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButtonHome = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor:bgColor} : {},
      ]}>
      <Text style={[
        styles.text, styles[`text_${type}`], 
        fgColor ? {color: fgColor} : {},
        ]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        width:'65%',
        padding: 16,
        marginVertical: 16,
        alignItems:'center',
        borderRadius: 12, 
    },

    container_PRIMARY:{
        backgroundColor: '#FF0000',
    },
  
    container_SECONDARY:{
      borderColor: '#3B71F3',
      borderWidth:3,
    },

    container_TERTIARY:{},

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'white',
    },

    text_TERTIARY:{
        color: 'gray'
    },
    text_SECONDARY:{
      color: '#3B71F3'
    }
});

export default CustomButtonHome