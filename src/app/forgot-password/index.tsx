import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import Card from '@/components/Card'
import Button_ from '@/components/Button_'

const headerProps = {
    "showLogo":false,
    "heading":"Forgot Password",
    "subHeading":"Select which method you'd like to reset"
}
const cardList = [
  {
    "id":1,
    "heading":"Email Address",
    "text":"Send via email address securely",
    "icon":"mail"
  },
  {
    "id":2,
    "heading":"2 Factor Authentication",
    "text":"Send via 2FA securely",
    "icon":"smartphone"
  },
  {
    "id":3,
    "heading":"Google Authentication",
    "text":"Send via authenticator securely",
    "icon":"lock",
  }
]

const buttonProps = {
    "text":"Reset Password"
}
const index = () => {
  const [isSelected,setIsSelected] = useState(null)
  return (
    <SafeAreaView>
      <Header
      {...headerProps}
      />
      <FlatList
      data={cardList}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={({item})=>
      <Card {...item} 
      isSelected={isSelected}
      setIsSelected={setIsSelected}
      />}
      />
      <Button_
      {...buttonProps}
      
      />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})