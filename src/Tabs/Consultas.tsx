import { VStack, Divider, ScrollView } from 'native-base';
import { useState, useEffect } from 'react'
import { CardConsulta } from '../components/CardConsulta';
import { Titulo } from '../components/Titulo';
import { Botao } from '../components/Botao';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { pegarConsultasPaciente } from '../services/PacienteServico';

interface Especialista {
    id: string,
    nome: string,
    imagem: string,
    especialidade: string
}

interface Consulta {
    id: string,
    data: string,
    especialista: Especialista
}

export default function Consultas() {
    const [consultasProximas, setConsultasProximas] = useState<Consulta[]>([])
    const [consultasPassadas, setConsultasPassadas] = useState<Consulta[]>([])

    useEffect(() => {
        async function pegarConsultas() {
            const pacienteId = await AsyncStorage.getItem('pacienteId')
            if(!pacienteId) return

            const todasConsultas: Consulta[] = await pegarConsultasPaciente(pacienteId)

            const agora = new Date()

            const proximas = todasConsultas.filter((consulta) => new Date(consulta.data) > agora)
            const passadas = todasConsultas.filter((consulta) => new Date(consulta.data) <= agora)

            setConsultasProximas(proximas)
            setConsultasPassadas(passadas)
        }
        pegarConsultas()
    }, [])

    return (
        <ScrollView p={5}>
            <Titulo color='blue.500'>Minhas Consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
            <Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' mb={2}>Próximas consultas</Titulo>
            {consultasProximas?.map((consulta) => (
                <CardConsulta key={consulta.id} nome={consulta?.especialista?.nome}  data={consulta?.data} foiAgendado
                especialidade={consulta?.especialista?.especialidade} foto={consulta?.especialista?.imagem} />
            ))}
            
            <Divider mt={5} />
            <Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' mb={2}>Consultas passadas</Titulo>
            
            {consultasPassadas?.map((consulta) => (
                <CardConsulta key={consulta.id} nome={consulta?.especialista?.nome}  data={consulta?.data} foiAtendido
                especialidade={consulta?.especialista?.especialidade} foto={consulta?.especialista?.imagem} />
            ))}
        </ScrollView>
    )
}