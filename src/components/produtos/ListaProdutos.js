import React from 'react'
import {Text} from 'react-native'
import estilo from '../estilo'
import produtos from './produtos'

export default props => {
    function obterLista(){
        return produtos.map(p => {
            return (<Text key={p.id}>{p.id}) {p.nome} tem R$ {p.preco}</Text>)
        })
    }
    return (
        <>
        <Text style={estilo.grande}>Lista de produtos</Text>
        {
            obterLista()
        }
        </>
    )
}