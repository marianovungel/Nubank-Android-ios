import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
  return (
    <View style={styled.container}>
        <View style={styled.content}>
            <Text style={styled.userName}>Mariano A. Vunge</Text>
            <TouchableOpacity activeOpacity={0.9} style={styled.botoon}>
                <Feather name='user' size={27} color="#fff" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styled = StyleSheet.create({
    container:{
      backgroundColor: '#8000ff',
      paddingTop: statusBarHeight,
      flexDirection: 'row',
      paddingEnd: 16,
      paddingStart: 16,
      paddingBottom: 44

    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    userName:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    botoon: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,

    }
  })
