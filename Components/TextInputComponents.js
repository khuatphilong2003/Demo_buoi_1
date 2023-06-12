import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import FlatListComponents from './FlatListComponents';

const TextInputComponents = () => {
  const [count, setCount] = useState('');
  return (
    <View>
      <View style={{borderWidth: 1, margin: 10}}>
        <TextInput
          placeholder="Nhap vao ten"
          onChangeText={Text => setCount(Text)}
        />
      </View>
      <View>
        <Text style={{fontSize:42}}>
        {count.split(' ').map((item)=>{return item &&'🍕'})} 
        </Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30,color:'blue'}}>Flat list</Text>
      </View>
      <FlatListComponents/>

    </View>
  );
};

export default TextInputComponents;

const styles = StyleSheet.create({});
