import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Moviments({ data }) {
    const [showValue, setShowValue] = useState(false)

 return (
   <TouchableOpacity style={styled.container} onPress={()=> setShowValue(!showValue)}>
        <Text style={styled.data}>{data.data}</Text>
        <View style={styled.content}>
            <Text style={styled.label}>{data.label}</Text>
            {showValue ? (
                <Text style={data.type === 1 ? styled.value : styled.gasto}>
                    {data.type === 1 ? `R$ ${data.valor}` : `R$ -${data.valor}`}
                </Text>
            ):(
                <View style={styled.skeleton}>

                </View>
            )}
        </View>
   </TouchableOpacity>
  );
}

const styled = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 24,
        borderBottomColor: '#DADADA',
        borderBottomWidth: 0.5
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 4,
    },
    data:{
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    gasto:{
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8,
    }
})