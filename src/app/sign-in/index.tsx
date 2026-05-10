import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import {StatusBar} from "expo-status-bar"
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { SIGN_IN_COLORS } from '@/constants/colors'
import InputBox from '@/components/InputBox'
import Button_ from '@/components/Button_'
import IconTray from '@/components/IconTray'
import Footer from '@/components/Footer'

const headerProps = {
    "showLogo":true,
    "heading":"Sign In",
    "subHeading":"Lets's experience the joy of telecare AI"
}
const usernameProps = {
    "placeholderText":"Enter your email...",
    "heading":"Email Address",
    "icon":"mail",
    "hidden":false
}
const passwordProps = {
    "placeholderText":"Enter your password...",
    "heading":"Password",
    "icon":"lock",
    "hidden":true
}

const buttonProps = {
    "text":"Sign In"
}
const footerProps = {
    "text":"Don't have an acount? ",
    "textLink":"Sign Up",
    "footerNote":"Forgot your Password"
}

const Index = () => {
  return (
    <SafeAreaView style={[styles.container]}>
        <StatusBar style='light'/>
        <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding" : "height"} >
            <Header 
            {...headerProps}
            />
            <InputBox
            {...usernameProps}
            />
            <InputBox
            {...passwordProps}
            />
            <Button_ 
            {...buttonProps}
            />
            <IconTray/>
            <Footer
            {...footerProps}
            />
        </KeyboardAvoidingView>
           
     
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
    "container":{
        flex:1,
        backgroundColor:SIGN_IN_COLORS.background,
    },

})