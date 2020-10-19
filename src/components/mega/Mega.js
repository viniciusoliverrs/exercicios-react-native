import React,{Component} from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import estilo from '../estilo'
import Numero from '../mega/Numero'

export default class Mega  extends Component{
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }
    alterarQtNumero = (qtde) => {
        this.setState({qtdeNumeros: qtde})
    }
    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }
    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num =>{
            return <Numero key={num} num={num}></Numero>
        })
    }
    gerarNumero = () => {
        const numeros = Array(this.state.qtdeNumeros).fill()
        .reduce(n => [...n, this.gerarNumeroNaoContido(n)],[])
        .sort((a , b) => a - b)
        this.setState({numeros})
    }
    render(){
        return (
            <>
                <Text style={estilo.grande}>Gerador de Mega-Sena</Text>
                <TextInput 
                keyboardType={'numeric'}
                style={{borderBottomWidth:1}}
                placeholder="Quantidade de números" 
                value={`${this.state.qtdeNumeros}`} 
                onChangeText={qtde => this.alterarQtNumero(qtde)}/>
                <Button title="Gerar" onPress={this.gerarNumero} />
                <View style={{flexDirection: 'row', flexWrap:'wrap', justifyContent:'center'}}>
                    <Text> {this.exibirNumeros()}</Text>
                </View>
            </>
        )
    }
}
