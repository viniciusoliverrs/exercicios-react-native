import React from 'react'
import {Text, FlatList} from 'react-native'
import estilo from '../estilo'
import produtos from './produtos'

export default props => {
const produtoRender = ({item}) =>{return <Text>{item.id} {item.nome} - R$ {item.preco}</Text>}
    return (
        <>
        <Text style={estilo.grande}>Lista de produtos</Text>
        <FlatList data={produtos} keyExtractor={i => `${i.id}`} renderItem={produtoRender}></FlatList>
        </>
    )
}