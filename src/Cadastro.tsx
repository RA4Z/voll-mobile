import { Image, Box, Checkbox, ScrollView, Text } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao'; 
import { secoes } from './utils/CadastroEntradaTexto';
import { cadastrarPaciente } from './services/PacienteServico';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  const [dados, setDados] = useState({} as any)
  const [planos, setPlanos] = useState([] as number[])

  function avancarSecao() {
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao + 1)
    } else {
      console.log(dados)
      console.log(planos)
      cadastrar()
    }
  }
  function voltarSecao() {
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    }
  }

  function atualizarDados(id: string, valor: string) {
    setDados({...dados, [id]: valor})
  }

  async function cadastrar() {
    const resultado = await cadastrarPaciente({
      cpf: dados.cpf,
      nome: dados.nome,
      email: dados.email,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        estado: dados.estado,
        complemento: dados.complemento
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: dados.imagem
    })
    if(!resultado){
      console.log('Erro ao fazer cadastro!')
    }
  }

  return (
    <ScrollView flex={1} p={5}>
        <Image source={Logo} alt="Logo Voll" alignSelf='center' />

        <Titulo>{secoes[numSecao].titulo}</Titulo>
        <Box>
          {numSecao == 2 && <Text color='blue.800' fontWeight='bold' fontSize='md' mt={2} mb={2}>
            Selecione os planos:
          </Text>}
            {
              secoes[numSecao]?.entradaTexto?.map(entrada => {
                return (
                <EntradaTexto 
                  label={entrada.label} 
                  placeholder={entrada.placeholder} 
                  key={entrada.id} 
                  value={dados[entrada.name]}
                  secureTextEntry={entrada.secureTextEntry}
                  onChangeText={(text) => atualizarDados(entrada.name, text)}
                />
              
                )})
            }
        </Box>
        <Box>
            {
              secoes[numSecao]?.checkbox?.map(checkbox => {
                return (
                <Checkbox 
                  key={checkbox.id} 
                  value={checkbox.value}
                  onChange={() => {
                    setPlanos((planosAnteriores) => {
                      if(planosAnteriores.includes(checkbox.id)){
                        return planosAnteriores.filter((id) => id !== checkbox.id)
                      }
                      return [...planosAnteriores, checkbox.id]
                    })
                  }}
                  isChecked={planos.includes(checkbox.id)}
                >
                  {checkbox.value}
                </Checkbox>
              )})
            }
        </Box>
        {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor='gray.400'>Voltar</Botao> }
        
        <Botao onPress={() => avancarSecao()} mt={4} mb={20} >{numSecao == 2? 'Finalizar' : 'Avançar'}</Botao>
    </ScrollView>
  );
}
