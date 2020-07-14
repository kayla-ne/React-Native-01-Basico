import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';

const Calculos = () => {

    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resultado, setResultado] = useState ('Informe os dois numeros!');

    const _somar = () => {
        if (!n1 == '' && !n2 == ''){
            setResultado (Number (n1) + Number (n2));
        } else {
            setResultado ('Preenchimento obrigatorio');
        }
    }

    const _limpar = () => {
        setN1('');
        setN2('');
        setResultado('Informe os dois numeros!');
    }

return(
    <View style = {StyleSheet.container}>
        <Text stle = {StyleSheet.titulo}> Somar </Text>

        <TextInput
        style = {StyleSheet.campo}
        placeholder = "Digite o primeiro numero"
        onChangeText = {n1 => setN1(n1)}
        value = {String(n1)}
        />

        <TextInput
        style = {StyleSheet.campo}
        placeholder = "Digite o segundo numero"
        onChangeText = {n2 => setN1(n2)}
        value = {String(n2)}
        />

        <Text style = {styles.botaoTexto}> Resultado: </Text>
        <Text style = {styles.campo}> {resultado} </Text>

        <TouchableOpacity style = {styles.botaoContainer} onPress = {_somar}>
        <Text style = {styles.botaoTexto}> Calcular </Text> 
        </TouchableOpacity>

        <TouchableOpacity style = {styles.botaoContainer} onPress = {_limpar}>
        <Text style = {styles.botaoTexto}>Limpar </Text> 
        </TouchableOpacity>

    </View>
);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#103525',
        width: 300,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },

    titulo: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    campo: {
        backgroundColor: '#b4f2d6',
        fontSize: 14,
        height: 35,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        textAlign: 'center',
    },

    botaoContainer: {
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#e8f2e9',
        backgroundColor: '#4f5442',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    botaoTexto: {
        fontSize: 14,
        color: '#FFFFFF',
    },
});
export default Calculos;