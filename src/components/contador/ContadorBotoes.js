import React from 'react'
import {Button} from 'react-native'
import estilo from '../estilo'

export default props => {
return (
<>
<Button title="+" onPress={props.inc} ></Button>
<Button title="-" onPress={props.dec} ></Button>
</>
)
}