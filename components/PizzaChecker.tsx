import React, {useState} from 'react'
import {Text, TextInput, View} from 'react-native';

const PizzaChecker = () => {
    const [text, setText] = useState('');
    
    return (
        <View style={{padding: 10}}>
            <TextInput style={{height:40}} placeholder="Type a pizza to test!" onChangeText={text => setText(text)} defaultValue={text}>
            </TextInput>
            <Text style={{padding:8, fontSize:42}}>
                    {text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
        </View>
    )
}

export default PizzaChecker
