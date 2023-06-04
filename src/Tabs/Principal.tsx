import { VStack, Text, ScrollView, Image, Box, Divider } from 'native-base';
import { Titulo } from '../components/Titulo';
import Logo from '../assets/Logo.png'
import { EntradaTexto } from '../components/EntradaTexto';
import { Botao } from '../components/Botao';
import { depoimentos } from '../utils/PrincipalDepoimentos';

export default function Principal() {
    return (
        <ScrollView p={5}>
            <VStack alignItems='flex-start'>
                <Image source={Logo} alt="Logo Voll" />
                <Titulo color='blue.500' mb={5}>Boas vindas!</Titulo>
                <Box borderRadius={1} p={5} shadow={1} flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    <EntradaTexto placeholder='Digite a especialidade' />
                    <EntradaTexto placeholder='Digite sua localização' />
                    <Botao textAlign='center' alignSelf='center'>Buscar</Botao>
                </Box>
            </VStack>
            <VStack paddingBottom={10}>
                <Titulo color='#0B3B60' >Depoimentos</Titulo>

                {depoimentos.map((depoimento) => {
                    return <Box key={depoimento.id} paddingTop={5}>
                        <Text>{depoimento.depoimento}</Text>
                        <Titulo fontSize='md'>{depoimento.nome}, {depoimento.idade} anos, {depoimento.cidade}.</Titulo>
                        <Divider mt={5} />
                    </Box>
                })}

            </VStack>
        </ScrollView>
    )
}