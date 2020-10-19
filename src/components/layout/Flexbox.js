import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'
export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor='#d3d'/>
            <Quadrado cor='#f00'/>
            <Quadrado cor='#0f0'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='#900'/>
        </View>
    )
}
const style = StyleSheet.create({
    FlexV1: {
        width: '100%',
        height: 350,
        flexDirection: "row",
        backgroundColor: '#333'
    }
})