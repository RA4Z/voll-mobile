import { VStack, Image, Text, Box, Button, Link } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao'; 

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'E-mail',
          placeholder: 'Digite seu E-mail'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ]
    }
  ]

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
    <VStack flex={1} alignItems="center" justifyContent='center' p={5}>
        <Image source={Logo} alt="Logo Voll" />

        <Titulo>{secoes[numSecao].titulo}</Titulo>
        <Box>
            {
              secoes[numSecao].entradaTexto.map(entrada => {
                return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
              })
            }
        </Box>
        {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor='gray.400'>Voltar</Botao> }
        
        <Botao onPress={() => avancarSecao()} mt={4}>Avançar</Botao>
    </VStack>
  );
}
