import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default props => {
    const delta =  (props.min-props.max) + 1
    const aleatorio = parseInt(Math.random() * delta) + props.max
    return(
    <Text style={estilo.grande}>{aleatorio}</Text>
    )
}