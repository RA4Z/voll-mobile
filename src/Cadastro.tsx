import { VStack, Image, Box, Checkbox, ScrollView, Text } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao'; 
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);


  function avancarSecao() {
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao + 1)
    }
  }
  function voltarSecao() {
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5}>
        <Image source={Logo} alt="Logo Voll" alignSelf='center' />

        <Titulo>{secoes[numSecao].titulo}</Titulo>
        <Box>
          <Text color='blue.800' fontWeight='bold' fontSize='md' mt={2} mb={2}>
            Selecione o plano:
          </Text>
            {
              secoes[numSecao]?.entradaTexto?.map(entrada => {
                return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
              })
            }
        </Box>
        <Box>
            {
              secoes[numSecao]?.checkbox?.map(checkbox => {
                return <Checkbox key={checkbox.id} value={checkbox.value}>
                  {checkbox.value}
                </Checkbox>
              })
            }
        </Box>
        {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor='gray.400'>Voltar</Botao> }
        
        <Botao onPress={() => avancarSecao()} mt={4} mb={20} >Avançar</Botao>
    </ScrollView>
  );
}
