import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'
import { Fragment } from 'react'

export default props => {
    return (
        <Fragment>
                <Text style={estilo.grande}>{props.principal}</Text>
                <Text>{props.segundario}</Text>
        </Fragment>
    )   
}