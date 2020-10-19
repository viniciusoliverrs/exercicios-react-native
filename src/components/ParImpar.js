import React from 'react'
import { View, Text } from 'react-native'
import estilo from './estilo'

export default ({ num = 0 }) => {
    return (
        <View>
            <Text style={estilo.grande}>O resultado é:</Text>
            {num % 2 === 0 ? <Text style={estilo.grande}>Par</Text> : <Text style={estilo.grande}>ímpar</Text>}
        </View>
    )
}