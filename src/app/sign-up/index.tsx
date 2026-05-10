import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { StatusBar } from 'expo-status-bar'
import InputBox from '@/components/InputBox'
import Button_ from '@/components/Button_'
import Footer from '@/components/Footer'

const headerProps = {
    "showLogo":true,
    "heading":"Sign Up For Free",
    "subHeading":"Sign up in 1 minute for free"
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
const passwordConfirmProps = {
    "placeholderText":"Confirm your password...",
    "heading":"Confirm Password",
    "icon":"lock",
    "hidden":true
}
const buttonProps = {
    "text":"Sign Up"
}
const footerProps = {
    "text":"Already have an account? ",
    "textLink":"Sign In",
    "footerNote": null
}

const index = () => {
  return (
   <SafeAreaView>
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
            <InputBox
            {...passwordConfirmProps}
            />
            <Button_ 
            {...buttonProps}
            />
            <Footer
            {...footerProps}
            />

    </KeyboardAvoidingView>
   </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})