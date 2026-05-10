import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SIGN_IN_COLORS } from '@/constants/colors'

const Footer = ({text,textLink,footerNote}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.innerContainer]}>
        <Text>
            {text}
            <Text style={[styles.textColor]}>
                <Link href={textLink==="Sign In"?"/sign-in":"/sign-up"}>{textLink}</Link>
            </Text>
        </Text>
        {footerNote &&
        <Link
        href={"/forgot-password"}
        >
        <Text style={[styles.textColor]}>
            {footerNote}
        </Text>
        </Link>
        }
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        alignItems:"center",

    },
    innerContainer:{
        alignItems:"center",
        gap:10,

    },
    "textColor":{
        color:SIGN_IN_COLORS.primary,
        textDecorationLine:"underline"
    }
})