import React, {useState} from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import estilo from '../estilo'

export default props => {
    const [num, setNum] = useState(0)
    const [text, setText] = useState('')

    function exibirValor(numero,text) {
        setNum(numero)
        setText(text)
    }
    return (
        <>
        <Text style={estilo.grande}>{text}{num}</Text>
        <Filho min={1} max={60} funcao={exibirValor}/>
        </>
    )
}