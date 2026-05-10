import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/build/FontAwesome'
import Feather from '@expo/vector-icons/build/Feather'
import { SIGN_IN_COLORS } from '@/constants/colors'

const IconTray = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.innerContainer]}>
        <View style={[styles.iconContainer]}>
        <Feather name="facebook" size={25} color="#444" />
        </View>
        <View style={[styles.iconContainer]}>
        <FontAwesome name="google" size={25} color="#444" />
        </View>
        <View style={[styles.iconContainer]}>
        <Feather name="instagram" size={25} color="#444" />
        </View>
      </View>
    </View>
  )
}

export default IconTray

const styles = StyleSheet.create({
    "container":{
        marginTop:30,

    },
    "innerContainer":{
        flexDirection:"row",
        justifyContent:"center",
        gap:20,
    },
    iconContainer:{
        borderWidth:2,
        padding:15,
        borderRadius:20,
        borderColor:SIGN_IN_COLORS.icon
    }
})