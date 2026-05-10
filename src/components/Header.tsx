import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SIGN_IN_COLORS } from '@/constants/colors'
import Feather from '@expo/vector-icons/build/Feather'
import { Link } from 'expo-router'

const Header = ({heading,subHeading,showLogo}) => {
  return (
    <View style={[styles.view]}>
        {showLogo == false?
        
        <View style={[styles.iconContainer]}>
        <Link href={"/sign-in"}>
        <Feather name="chevron-left" size={35} color="#444444" />
        </Link>
        </View>
        
            :
            null

        }
        {showLogo &&
            <Image
            source={require("@/assets/logo.png")}
            style={[styles.image]}
            />
        }
        <Text style={[styles.heading]}>{heading}</Text>
        <Text style={[styles.subHeading]}>{subHeading}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    "image":{
        "width":110,
        "height":110,
    },
    "view":{
        alignItems:"center",
        width:"100%",
        marginTop:30,
        
    },
    "heading":{
        textAlign:"center",
        color:SIGN_IN_COLORS.heading,
        fontSize:30,
        fontWeight:"700",
        marginBottom:10,

    },
    "subHeading":{
        textAlign:"center",
        color:SIGN_IN_COLORS.subText,
        fontSize:15
    },
    "iconContainer":{
        alignSelf:"baseline",
        backgroundColor:"#d8d8d8",
        padding:7,
        marginBottom:50,
        marginLeft:20,
        borderRadius:20,
    }
})



