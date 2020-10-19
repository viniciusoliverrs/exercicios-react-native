import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default ({ usuario = {} }) => {
    return (
        <>
            <If test={usuario && usuario.nome && usuario.email}>
                <Text style={estilo.grande}>Usuário Logado:</Text>
                <Text style={estilo.grande}>{usuario.nome}-{usuario.email}</Text>
            </If>
        </>
    )
}