import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance() {
 return (
   <View style={styled.container}>
        <View style={styled.item}>
            <Text style={styled.itemTitle}>Saldo</Text>
            <View style={styled.content}>
                <Text style={styled.simbolo}>R$</Text>
                <Text style={styled.balance}>15.000,00</Text>
            </View>
        </View>

        <View style={styled.item}>
            <Text style={styled.itemTitle}>Gastos</Text>
            <View style={styled.content}>
                <Text style={styled.simbolo}>R$</Text>
                <Text style={styled.gasto}>390,00</Text>
            </View>
        </View>
   </View>
  );
}

const styled = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingEnd: 18,
        paddingStart: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    itemTitle:{
        fontSize: 20,
        color: '#DADADA'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    simbolo: {
        color: '#DADADA',
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    gasto:{
        fontSize: 22,
        color: '#e74c3c'
    }
})
