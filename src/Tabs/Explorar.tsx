import { VStack, ScrollView, Box } from 'native-base';
import { useState } from 'react'
import { Titulo } from '../components/Titulo';
import { EntradaTexto } from '../components/EntradaTexto';
import { CardConsulta } from '../components/CardConsulta';
import { Botao } from '../components/Botao';
import { buscarEspecialistaPorEstado } from '../services/EspecialistaServico';

interface Especialista {
    nome: string,
    imagem: string,
    especialidade: string,
    id: string
}

export default function Explorar() {
    const [estado, setEstado] = useState('');
    const [especialidade, setEspecialidade] = useState('')
    const [resultadoBusca, setResultadoBusca] = useState([])

    async function buscar() {
        if(!estado || !especialidade) return null
        const resultado = await buscarEspecialistaPorEstado(estado, especialidade)
        if(resultado) {
            setResultadoBusca(resultado)
            console.log(resultado)
        }
    }

    return (
        <ScrollView p={5}>
            <VStack alignItems='flex-start' borderRadius='lg' shadow={2}>
                <Box p={5} flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    <EntradaTexto 
                        placeholder='Digite a especialidade'
                        value={especialidade}
                        onChangeText={setEspecialidade}
                     />
                    <EntradaTexto 
                        placeholder='Digite sua localização'
                        value={estado} 
                        onChangeText={setEstado}
                    />
                    <Botao textAlign='center' alignSelf='center' onPress={buscar}>Buscar</Botao>
                </Box>
            </VStack>
            <VStack alignItems='center' mb={5}>
                <Titulo color='blue.500' mb={5}>Resultado da busca</Titulo>
                {resultadoBusca?.map((especialista:Especialista , index) => (
                    <VStack flex={1} w='100%' alignItems='flex-start' bgColor='white' key={index}>
                        <CardConsulta 
                            nome={especialista.nome}
                            especialidade={especialista.especialidade} 
                            foto={especialista.imagem}
                            // onPress={especialista.id}
                        />   
                    </VStack>
                ))}

            </VStack>
        </ScrollView>
    )
}