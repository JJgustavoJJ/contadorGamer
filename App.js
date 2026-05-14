//Importa o React e o useState
//UseState serve para criar valores que podem mudar na tela
import React, { useState } from "react";
//Importa componentes nativos do react nati
import {
  View, //caixa / área da tela 
  Text, //textos
  Button, //Botão
  StyleSheet, //estilos
  TouchableOpacity //Botão Customizavel
} from "react-native-web";

// Componente principal App
export default function app(){
  // Cria uma estado (variavel php) chamado "pontos"
  // Pontos = valor atual
  // SetPontos = Função para alterar o valor
  // 0 = valor inicial
const[pontos, setPontos] = useState(0);
  // Função para aumentar 1 ponto
function aumentar(){
  // Pegar o valor auto e soma +1
setPontos(pontos+1);
}
  
  // Função para diminuir 1 ponto
function diminuir(){
  // pega o valor atual e subtrai -1
setPontos(pontos-1);
}
  // Função para resetar o contador
function resetar(){
  // Voltar o valor para 0
  setPontos(0);
}

  // Tudo que está no RETURN aparece na tela
return(
  // View principal do APP
<View style={styles.container}>
  {/* titulo do app */}
<Text style={styles.titulo}>
🎮 Contador Gamer
</Text>
  {/* Mostra o valor dos pontos */}
<Text style={styles.pontos}>
  {/* Área dos botões +1 e -1 */}
{pontos}
</Text>
<View style={styles.areaBotoes}>

<TouchableOpacity onPress={aumentar} style={styles.botao}>
  <Text style={styles.textoBotao}>+1</Text>
</TouchableOpacity>


<TouchableOpacity onPress={diminuir} style={styles.botao}>
  <Text style={styles.textoBotao}>-1</Text>
</TouchableOpacity>
 
</View>
<TouchableOpacity onPress={resetar} style={styles.botaoReset}>
  <Text style={styles.textoBotao}>Resetar</Text>
</TouchableOpacity>
</View> 


);

}
 // Área de estilo do app
const styles = StyleSheet.create({
  // ESTILO DA TELA PRINCIPAL
  container: {
  // OCUPA A TELA TODA
    flex: 1,
  // COR DE FUNDO  
    backgroundColor: '#121212',
  // CENTRALIZA HORIZONTAMENTE 
    alignItems: 'center',
  // CENTRALIZA VERTICALMENTE
    justifyContent: 'center',
  // ESPAÇAMENTO INTERNO
    padding: 20,
  },

  // ESTILO DO TITULO
  titulo: {
  // TAMANHO DA FONTE
    fontSize: 32,
  // COR DO TEXTO
    color: '#00ff88',
  // TEXTO EM NEGRITO
    fontWeight: 'bold',
  // ESPAÇO ABAIXO
    marginBottom: 30,
  },

  // ESTILO DOS PONTOS
  pontos: {
  // TAMANHO GIGANTE
    fontSize: 80,
  // COR BRANCA
    color: '#ffffff',
  // ESPAÇO ABAIXO
    marginBottom: 40,
  // NEGRITO
    fontWeight: 'bold',
  },

  // ÁREA DOS BOTÕES
  areaBotoes: {
  // DEIXA UM BOTÃO DO LADO DO OUTRO
    flexDirection: 'row',
  // ESPAÇO ABAIXO
    marginBottom: 20,
  
  },

  // ESTILO DOS BOTÕES +1 E -1
  button: {
  // COR DO BOTÃO 
    backgroundColor: '#00ff88',
  // ESPAÇAMENTO VERTICAL
    paddingVertical: 15,
  // ESPAÇAMENTO HORIZONTAL
    paddingHorizontal: 30,
  // ARREDONDA AS BORDAS
    borderRadius: 12,
  // ESPAÇO ENTRE BOTÕES
    marginHorizontal: 10,
  },


  // ESTILO DO BOTÃO DE RESETAR
  botao: {
  // COR VERMELHA
    backgroundColor: '#00ff88',
  //ESPAÇAMENTO VERTICAL
    paddingVertical: 15,
  // ESPAÇAMENTO HORIZONTAL
    paddingHorizontal: 30,
  // ARREDONDAMENTO DE BORDAS
    borderRadius: 12,
  // ESPAÇO ENTRE BOTÕES
    marginHorizontal: 10,
  },
  
  // ESTILO DO BOTÃO DE RESET
  botaoReset: {
  // COR VERMELHA
    backgroundColor: '#ff3b30',
  // ESPAÇAMENTO VERTICAL
    paddingVertical: 15,
  // ESPAÇAMENTO HORIZONTAL
    paddingHorizontal: 40,
  // ARREDONDAMENTO DE BORDA
    borderRadius: 12,
  },

  // ESTILO DO TEXTO DOS BOTÕES
  textoBotao: {
  // TAMANHO DA LETRA
    fontSize: 22,
  // COR DO TEXTO
    color: '#000',
  // NEGRITO
    fontWeight: 'bold',
  },
});