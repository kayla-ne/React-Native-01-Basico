import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

function BoasVindas(props) {

    const [nome, setNome] = usesState('');
    const [sobrenome, setSobrenome] = useState('');
    const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
    const [mostraMensagem, setMostraMensgaem] = useState(false);

    const _apresentarMensagem = () => {
        if (!nome == '' && !sobrenome == ''){
            setMostrarMensgaem(true);
        } else {
            Alert.alert(
                'Preenchimento obrigatorio',
                'Informe o nome e sobrneome!',
                [
                    {text: 'OK'},
                ],
            );
        }
    }

    const _limpar = () => {
        setNome('');
        setSobrenome('');
        setMostraMensgaem(false);
    }

  return(

    <View style={styles.container}>

        <Text style = {styles.titulo}> Identifique-se </Text>

        <TextInput
        style = {sytle.containor}
        placeholder = "Digite seu nome"
        onChangeText = {nome => setNome(nome)}
        value = {nome}
        />

        <TextInput
        style = {StyleSheet.campo}
        placeholder = "Digite seu sobrenome"
        onChangeText = {sobrenome => setSobrenome(sobrenome)}
        value = {sobrenome}
        />

      <Text style={styles.texto}>Olá {props.saudacao}</Text>
      <Text style={styles.texto}>{mensagem}</Text>

    </View>

    <View>
        <Button
            onPress={_apresentarMensagem}
            title = 'ok'
        />
    </View>

    <View style = {styles.botaoContainer}>
        <Button
        onPress = {_Limpar}
        title = "Limpar"
    />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },
  campo: {
      backgroundColor: '#dcedff',
      fontSize: 14,
      marginBottom: 5,
      borderRadius: 5,
      height: 35,
  },
  textos: {
      fontSize: 14,
      color: '#FFFFFF',
      textAlign: "center",
  },
  botaoContainer: {
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 5,
  }
});
export default BoasVindas;
