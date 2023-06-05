import { VStack, ScrollView, Box } from 'native-base';
import { Titulo } from '../components/Titulo';
import { EntradaTexto } from '../components/EntradaTexto';
import { CardConsulta } from '../components/CardConsulta';
import { Botao } from '../components/Botao';

export default function Explorar() {
    return (
        <ScrollView p={5}>
            <VStack alignItems='flex-start' borderRadius='lg' shadow={2}>
                <Box p={5} flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    <EntradaTexto placeholder='Digite a especialidade' />
                    <EntradaTexto placeholder='Digite sua localização' />
                    <Botao textAlign='center' alignSelf='center'>Buscar</Botao>
                </Box>
            </VStack>
            <VStack alignItems='center' mb={5}>
                <Titulo color='blue.500' mb={5}>Resultado da busca</Titulo>

                <CardConsulta nome='Dr. Robert'  data='20/04/2023'
                especialidade='Cardiologista' foto='https://github.com/RA4Z.png'/>
                <CardConsulta nome='Dr. Robert'  data='20/04/2023'
                especialidade='Cardiologista' foto='https://github.com/RA4Z.png'/>
                <CardConsulta nome='Dr. Robert'  data='20/04/2023'
                especialidade='Cardiologista' foto='https://github.com/RA4Z.png'/>
                <CardConsulta nome='Dr. Robert'  data='20/04/2023'
                especialidade='Cardiologista' foto='https://github.com/RA4Z.png'/>
                <CardConsulta nome='Dr. Robert'  data='20/04/2023'
                especialidade='Cardiologista' foto='https://github.com/RA4Z.png'/>
            </VStack>
        </ScrollView>
    )
}