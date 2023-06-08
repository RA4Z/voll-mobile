import Routes from './src/Routes';
import { NativeBaseProvider, StatusBar } from 'native-base';

import {TEMAS} from './src/styles/temas';
import { useEffect } from 'react';
import api from './src/services/api';

export default function App() {

  useEffect(() => {
    async function pegarDados(){
      const resultado = await api.get('/paciente')
      console.log(resultado.data)
    }
    pegarDados()
  },[])

  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}

