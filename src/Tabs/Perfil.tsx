import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';
import { Titulo } from '../components/Titulo';

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' p={5}>
                <Titulo color='blue.500'>Meu Perfil</Titulo>
                <Avatar size='xl' source={{ uri: 'https://github.com/RA4Z.png' }} mt={5} />
                
                <Titulo color='blue.500'>Informações pessoais</Titulo>
                <Titulo fontSize='lg' mb={1} >Robert Aron Zimmermann</Titulo>
                <Text>31/07/2003</Text>
                <Text>Schroeder - SC</Text>
                <Divider mt={5} />
                <Titulo color='blue.500' mb={1}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}