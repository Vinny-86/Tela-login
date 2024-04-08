import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from "../style/MainStyle";
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {

  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);


  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [nome, setNome] = useState(null);
  const [isSelected, setisSelected]  = useState(false);
  const [erroremail, setErrorEmail] = useState(null);
  const [errornome, setErrorNome] = useState(null);

  let cpffield = null
  let telefonefield = null

const salvar = () => {
  console.log('Salvo !');
    
}

const voltar = () => {
  navigation.navigate("Login")

}

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text style={specificStyle.Text} h3> HOME </Text>

      <Input
        placeholder="Nome: "
        onChangeText={(value) => setNome(value)}
        errorMessage={errornome}
      />

      <Input
        placeholder="RA: "
        onChangeText={value => {
        setEmail(value)
        setErrorEmail(null)
        }}
        keyboardType="numeric"
      />

      <Input
        placeholder="Semestre: "
        onChangeText={value => {
        setEmail(value)
        setErrorEmail(null)
        }}
        keyboardType="numeric"
      />
    
      <Input
        placeholder="Disciplina: "
        onChangeText={value => {
        setEmail(value)
        setErrorEmail(null)
        }}
      />
    
    <Button 
        icon={
        <Icon
         name= "check"
         size = {15}
         color = "white"
         />
        }
        title = "Salvar"
        buttonStyle = {specificStyle.button}
      onPress={() => salvar()}
      />
    
    <Button 
        title = "Voltar"
        buttonStyle = {specificStyle.button}
      onPress={() => voltar()}
      />
   
   </View>
  );
}

const specificStyle = StyleSheet.create({
  Text: {
    position: 'relative',
    bottom: 100,

  },
  button: {
    width: 100,
    marginTop: 20,
  
    },
  
});
