import { Button } from "native-base"

export function Botao({children}) {
    return (
        <Button 
            w='100%'
            bg='blue.800'
            mt={10}
            borderRadius='lg'
        >
            {children}
        </Button>
    )
}