import { VStack, Text } from 'native-base';
import { CardConsulta } from '../components/CardConsulta';

export default function Consultas() {
    return (
        <VStack p={5}>
            <Text>Consultas</Text>
            <CardConsulta nome='Dr. Robert'  data='20/04/2023'
            especialidade='Cardiologista' foto='https://github.com/RA4Z.png'/>
        </VStack>
    )
}