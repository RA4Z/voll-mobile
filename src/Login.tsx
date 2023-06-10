import { VStack, Image, Text, Box, Button, Link, useToast } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import { useEffect, useState } from 'react'; 
import { fazerLogin } from './services/AutenticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default function Login({ navigation } : any) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [carregando, setCarregando] = useState(true)
  const toast = useToast()

  useEffect(() => {
    async function verificarLogin(){
      const token = await AsyncStorage.getItem('token')
      if(token) {
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  }, [])

  async function login() {
    const resultado = await fazerLogin(email,senha)
    if(resultado){
      const { token } = resultado
      AsyncStorage.setItem('token', token)

      const tokenDecodificado = jwtDecode(token) as any
      const pacienteId = tokenDecodificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)
      navigation.replace('Tabs')
    } else{
      toast.show({
        title: 'Erro no login', 
        description: 'O E-mail ou Senha não conferem', 
        backgroundColor: 'red.500'
      })
    }
  }

  if(carregando){
    return null
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent='center' p={5}>
        <Image source={Logo} alt="Logo Voll" />

        <Titulo>Faça Login em sua conta</Titulo>
        <Box>
            <EntradaTexto label='E-mail' placeholder='Insira seu endereço de E-mail' value={email} onChangeText={setEmail} />
            <EntradaTexto label='Senha' placeholder='Insira sua Senha' value={senha} onChangeText={setSenha} secureTextEntry />
        </Box>
      <Botao onPress={login}>Entrar</Botao>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} >
          <Text color='blue.500'> 
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
