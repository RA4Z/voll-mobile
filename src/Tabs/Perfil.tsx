import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';
import { useState, useEffect } from 'react'
import { Titulo } from '../components/Titulo';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { pegarDadosPaciente } from '../services/PacienteServico';

export default function Perfil() {
    const [dadosPaciente, setDadosPaciente] = useState({})

    useEffect(() => {
        async function dadosPaciente() {
            const pacienteId = await AsyncStorage.getItem('pacienteId')
            if(!pacienteId) return null

            const resultado = await pegarDadosPaciente(pacienteId)
            if(resultado) {
                setDadosPaciente(resultado)
                console.log(resultado)
            }
        }
        dadosPaciente()
    },[])

    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' p={5}>
                <Titulo color='blue.500'>Meu Perfil</Titulo>
                <Avatar size='xl' source={{ uri: 'https://github.com/RA4Z.png' }} mt={5} />
                
                <Titulo color='blue.500'>Informações pessoais</Titulo>
                <Titulo fontSize='lg' mb={1} >{dadosPaciente.nome}</Titulo>
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