import React, { Fragment,useState } from 'react'
import { Text, Button } from 'react-native'
import estilo from './estilo'

export default ({inicial = 0,passo = 1}) => {
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)
    return (
        <Fragment>
            <Text style={estilo.grande}>{numero}</Text>
                <Button title="+" onPress={inc}/>
                <Button title="-" onPress={dec}/>
        </Fragment>
    )
}