import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Action from '../../Components/Action'
import Balance from '../../Components/Balance'
import Header from '../../Components/Header'
import Moviments from '../../Components/Moviments'

const list = [
  {
    id:1,
    label: 'Boleto conta Luz',
    valor: '125,85',
    data: '17/05/2023',
    type: 0
  },
  {
    id:2,
    label: 'Pix client x',
    valor: '2225,85',
    data: '17/05/2023',
    type: 1
  },
  {
    id:3,
    label: 'Salário',
    valor: '725,85',
    data: '17/05/2023',
    type: 0
  }
]

export default function Home() {
  return (
    <View style={styled.container}>
        <Header />
        <Balance />
        <Action/>

        <Text style={styled.title}>Útimas movimentações</Text>
        <FlatList
         style={styled.list}
         data={list}
         keyExtractor={(item)=> String(item.id)}
         showsVerticalScrollIndicator={false}
         renderItem={ ({ item })=> <Moviments data={item} />}
          />
    </View>
  )
}

const styled = StyleSheet.create({
  container:{
    backgroundColor: '#fafafa'
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginLeft: 14,
    marginRight: 14,
  }
})
