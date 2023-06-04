import { VStack, Image, Text, Box, FormControl, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent='center' p={5}>
        <Image source={Logo} alt="Logo Voll" />

        <Titulo>Faça Login em sua conta</Titulo>
        <Box>
            <EntradaTexto label='E-mail' placeholder='Insira seu endereço de E-mail' />
            <EntradaTexto label='Senha' placeholder='Insira sua Senha' />
        </Box>

      <Button 
          w='100%'
          bg='blue.800'
          mt={10}
          borderRadius='lg'
          >
        Entrar
      </Button>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color='blue.500'> 
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
