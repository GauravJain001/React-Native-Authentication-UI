import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from "@expo/vector-icons";
import { SIGN_IN_COLORS } from '@/constants/colors';


const InputBox = ({placeholderText,icon,hidden,heading}) => {
    const [input,setInput] = useState("")
    const [hiddenPassword,setHiddenPassword] = useState(hidden)
    const [isFocused,setIsFocused] = useState(false)


    const focusedStyle = StyleSheet.compose(styles.inputContainer,
       isFocused
    ? {
        borderColor: SIGN_IN_COLORS.primary,
        shadowColor: SIGN_IN_COLORS.primary,
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 6,
      }
    : {}
    )
  return (
   
    <View style={[styles.container]}>
      <Text style={[styles.heading]}>{heading}</Text>
      <View style={[focusedStyle]}>
       <View style={[styles.innerInputContainer]}>
            <Feather
            name={icon}
            size={20}
            color={SIGN_IN_COLORS.icon}
            />
        <TextInput
        placeholder={placeholderText}
        value={input}
        onChangeText={setInput}
        secureTextEntry={hiddenPassword}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
       
        />
       </View>
       {hidden && 
       <Pressable onPress={()=>setHiddenPassword(prev =>!prev)}>
        <Feather
        name={hiddenPassword? "eye-off":"eye"}
        size={20}
        color={SIGN_IN_COLORS.icon}
        />
        </Pressable>
       }

      </View>
    </View>
   
  )
}

export default InputBox

const styles = StyleSheet.create({
    "container":{
        paddingTop:30,
        alignSelf:"center",
        width:"90%",
       
        

    },
    "inputContainer":{
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:2,
        borderRadius:15,
        padding:10,
        alignItems:"center",
        gap:7,
        backgroundColor: "white",

  borderColor: "#E5E7EB",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.08,
  shadowRadius: 4,
  elevation: 3,
  shadowColor: "#88D317",

       
    },
    "innerInputContainer":{
        flexDirection:"row",
        alignItems:"center",
        gap:5,
    },
    "heading":{
        fontWeight:700,
    },
    
   

})