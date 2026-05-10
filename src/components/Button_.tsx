import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIGN_IN_COLORS } from '@/constants/colors'
import { Feather } from '@expo/vector-icons'

const Button_ = ({text}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.innerContainer]}>
      <Text style={[styles.text]}>{text}</Text>
      <Feather
      name='arrow-right'
      size={20}
      color="white"
      />
      </View>
    </View>
  )
}

export default Button_

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    backgroundColor:SIGN_IN_COLORS.primary,
    width:"90%",
    alignSelf:"center",
    borderRadius:19,

  },
  innerContainer:{
    flexDirection:"row",
    padding:20,
    justifyContent:"center",
    alignItems:"center",
    gap:10,
  },
  "text":{
    color:"#fff",
    fontWeight:700,
    

  }

})