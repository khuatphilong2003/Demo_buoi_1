import {  ScrollView, StyleSheet, Text, TextInputComponent, View } from 'react-native'
import React, { useState } from 'react'
import CatComponents from './Components/CatComponents'
import TextInputComponents from './Components/TextInputComponents'

const App = () => {
  return (
    <ScrollView>
      <CatComponents Name="Longmg"/>
      <TextInputComponents/>
      <CatComponents Name="Longmg"/>
      <TextInputComponents/>
      <CatComponents Name="Longmg"/>
      <TextInputComponents/>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})