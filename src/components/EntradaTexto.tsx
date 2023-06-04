import { Input, FormControl } from 'native-base';

export function EntradaTexto({...rest}) {
    return (
        <FormControl mt={3}>
            <FormControl.Label>{rest.label}</FormControl.Label>
                <Input 
                    size='lg'
                    w='100%'
                    borderRadius='lg'
                    bgColor='gray.100'
                    shadow={3}
                    {...rest}
            />
        </FormControl>
    )
}