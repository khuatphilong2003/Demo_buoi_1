import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Item = (props) => {
    const {name,age} = props.Data;
  return (
    <View style={{padding:10,borderWidth:1,borderColor:'black',margin:10}}>
      <Text style={{color:'black'}}>{name}</Text>
      <Text style={{color:'red'}}>{age}</Text>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({})