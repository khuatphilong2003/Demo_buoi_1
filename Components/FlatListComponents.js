import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from './Item'

const FlatListComponents = () => {
    const mang = [
        {
            "name":"Long",
            "age":20
        },
        {
            "name":"Hung",
            "age":23
        }
    ]
  return (
    <View>
      <FlatList
      data={mang}
      renderItem={({item})=>
    <Item Data={item}/>
    }
      />
    </View>
  )
}

export default FlatListComponents

const styles = StyleSheet.create({})