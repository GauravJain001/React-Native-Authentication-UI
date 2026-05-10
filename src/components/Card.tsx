import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { SIGN_IN_COLORS } from '@/constants/colors'

const Card = ({ isSelected,id,setIsSelected,heading,text,icon}) => {
    // const [isFocused,setIsFocused] = useState(false)
    const focusedStyle = StyleSheet.compose(
        styles.container,
        isSelected === id?{
            borderColor: SIGN_IN_COLORS.primary,
            shadowColor: SIGN_IN_COLORS.primary,
            shadowOpacity: 0.25,
            shadowRadius: 6,
            elevation: 6,
        }:
        null

    )
    const onPress = ()=>{
       if (isSelected === id) {
      setIsSelected(null);
    } else {
      setIsSelected(id);
    }
       
    }
  return (    
    <Pressable onPress={onPress}>
    <View style={focusedStyle}>
      <View style={[styles.innerContainer]}>
        <View style={[styles.iconContainer]}>
        <Feather
        name={icon}
        size={30}
        color={"black"}
        />
       
        </View>
        <View>
         <Text style={[styles.heading]}>{heading}</Text>
         <Text style={[styles.text]}>{text}</Text>
        </View>

      </View>
    </View>
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({
    "container":{
        marginTop:20,
        padding:30,
        backgroundColor:SIGN_IN_COLORS.card,
        borderRadius:40,
        width:"90%",
        alignSelf:"center",
        shadowOpacity:0.08,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation:3,
        shadowColor:"#cccccc",
        borderWidth:2,
        borderColor:"#fff"
        

    },
    "innerContainer":{
        flexDirection:"row",
        alignItems:"center",
        gap:20,
    },
    "iconContainer":{
        backgroundColor:"#e0dfdf",
        padding:10,
        borderRadius:20,
    },
    "heading":{
        fontWeight:700,
        fontSize:17,

    },
    "text":{
        color:"#6e6e6e"
    }
})