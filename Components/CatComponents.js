import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CatComponents = (props) => {
    const name = "Maru";
    const [check,setCheck] = useState(false);
    const getFullName = (name,age,color)=>{
        return "Name: "+name+"-Age: "+age+"-Color: "+color;
    }
  return (
    <View style={{padding:10}}>
      <Text>Hello ,I am your cat: {name}</Text>
      <Text>{getFullName("Mèo",12,"Vàng")}</Text>
      <View>
        <Text>Nhập tên</Text>
        <TextInput
        style={{height:40,borderColor:'black',borderWidth:1}}
        placeholder='Nhap vao ho ten'
        />
      </View>
      <View>
        <Text>Data props: {props.Name}</Text>
      </View>
      <View>
        <Image
        source={{
            uri:'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={{width:200,height:200}}
        />
      </View>
      <View>
        {!check ?(
        <Text>Bạn tên là gì?</Text>
        ):
        (
        <Text>Bạn tên là {props.Name}</Text>
        )
        }
        <TouchableOpacity
        style={{height:30,backgroundColor:"blue",justifyContent:'center',alignItems:'center'}}
        disabled={check}
        onPress={()=>setCheck(true)}
        >
            <Text style={{color:'white'}}>Xác nhận</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default CatComponents

const styles = StyleSheet.create({})