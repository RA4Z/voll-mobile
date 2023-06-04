import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent='center' p={5}>
       <Image source={Logo} alt="Logo Voll" />

       <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        marginTop={5}
       >
        Faça Login em sua conta
       </Text>
       <Box>
          <FormControl mt={3}>
            <FormControl.Label>Email</FormControl.Label>
            <Input 
              placeholder='Insira seu endereço de E-mail'
              size='lg'
              w='100%'
              borderRadius='lg'
              bgColor='gray.100'
              shadow={3}
            />
          </FormControl>

          <FormControl mt={3}>
            <FormControl.Label>Senha</FormControl.Label>
            <Input 
              placeholder='Insira sua Senha'
              size='lg'
              w='100%'
              borderRadius='lg'
              bgColor='gray.100'
              shadow={3}
            />
          </FormControl>
       </Box>

      <Button 
          w='100%'
          bg='blue.800'
          mt={10}
          borderRadius='lg'
          >
        Entrar
      </Button>

      <Link href='https://www.alura.com.br'>
        Esqueceu sua senha?
      </Link>
      <Box w='100%' flexDirection='row' justifyContent='center'>
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
