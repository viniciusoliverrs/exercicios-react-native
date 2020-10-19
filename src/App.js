import React from 'react'
import { SafeAreaView } from 'react-native'
import estilo from './components/estilo'
import Mega from './components/mega/Mega'
export default () => (
    <SafeAreaView style={estilo.App}>
        <Mega qtdeNumeros={5}/>
        {/*
        <Flexbox/>
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <ListaProdutos/>
        <UsuarioLogado usuario={{nome:"Vinicus",email:"vinicius@teste.com"}}/>
        <Familia>
            <Membro nome="João" sobrenome="Silva" />
            <Membro nome="Renata" sobrenome="Silva" />
        </Familia>
        <Familia>
            <Membro nome="Carlos" sobrenome="Costa" />
            <Membro nome="Bianca" sobrenome="Costa" />
        </Familia>        
        <ParImpar num={3}/>
        <Diferenciar/>>
        <ContadorV2 />
        <Pai />
        <Contador inicial={0} passo={10}/>
        <Contador/>
        <Botao />
        <Titulo principal="Cadastro" segundario="Tela de Cadastro de Produto"/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        */}
    </SafeAreaView>
)