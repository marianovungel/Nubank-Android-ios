import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesign } from '@expo/vector-icons'
export default function Action() {
 return (
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styled.container}>
        <TouchableOpacity style={styled.actionButtom}>
            <View style={styled.areaButtom}>
                <AntDesign name='addfolder' size={26} color="#000" />
            </View>
            <Text style={styled.labelButtom}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styled.actionButtom}>
            <View style={styled.areaButtom}>
                <AntDesign name='tagso' size={26} color="#000" />
            </View>
            <Text style={styled.labelButtom}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styled.actionButtom}>
            <View style={styled.areaButtom}>
                <AntDesign name='creditcard' size={26} color="#000" />
            </View>
            <Text style={styled.labelButtom}>Carteira</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styled.actionButtom}>
            <View style={styled.areaButtom}>
                <AntDesign name='barcode' size={26} color="#000" />
            </View>
            <Text style={styled.labelButtom}>Boletos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styled.actionButtom}>
            <View style={styled.areaButtom}>
                <AntDesign name='setting' size={26} color="#000" />
            </View>
            <Text style={styled.labelButtom}>Conta</Text>
        </TouchableOpacity>
   </ScrollView>
  );
}

const styled = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingStart: 14,
        paddingEnd: 14
    },
    actionButtom:{
        alignItems: 'center',
        marginRight: 32
    },
    areaButtom:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButtom:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})