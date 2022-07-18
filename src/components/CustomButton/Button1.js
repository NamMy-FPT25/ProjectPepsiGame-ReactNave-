import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton1 = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
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
        padding: 12,
        marginVertical: 12,
        alignItems:'center',
        borderRadius: 12, 
    },

    container_PRIMARY:{
        backgroundColor: '#6699CC',
    },
  
    container_SECONDARY:{
      borderColor: '#3B71F3',
      borderWidth:2,
    },

    container_TERTIARY:{},

    text: {
        fontSize: 14,
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

export default CustomButton1