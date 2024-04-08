import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from "../style/MainStyle";
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from "react-native-masked-text";

export default function Cadastro() {

  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);


  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [isSelected, setisSelected]  = useState(false);
  const [erroremail, setErrorEmail] = useState(null);
  const [errornome, setErrorNome] = useState(null);
  const [errorcpf, setErrorCpf] = useState(null);
  const [errortelefone, setErrorTelefone] = useState(null);
 

const salvar = () => {
  alert("cadastrado com sucesso!");
  navigation.navigate("Home");

}
  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text style={specificStyle.Text} h3> Registre-se </Text>

      <Input
        placeholder="Nome: "
        onChangeText={(value) => setNome(value)}
        errorMessage={errornome}
      />

      <Input
        placeholder="E-mail: "
        onChangeText={value => {
        setEmail(value)
        setErrorEmail(null)
        }}
        keyboardType="email-address"
        errorMessage={erroremail}
      />
    
      <Input
        placeholder="Senha: "
        onChangeText={(value) => setPassword(value)}
        secureTextEntry = {true}
      />

      <Input
        placeholder="Confirme a senha: "
        onChangeText={(value) => setPassword2(value)}
        secureTextEntry = {true}
      />
    <CheckBox
        title = 'Aceito os termos de uso'
        checkedIcon='check'
        uncheckedIcon='square-o'
        checkedColor="green"
        uncheckedColor="red"
        checked={isSelected}
        onPress={() => setisSelected(!isSelected)}

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
