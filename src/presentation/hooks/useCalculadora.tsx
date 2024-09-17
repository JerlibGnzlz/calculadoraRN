import { useState } from 'react';

const useCalculadora = () => {

    const [numero, setNumero] = useState('0');

    const buildNumber = (numeroString: string) => {

        // PUNTO DECIMAL
        if (numero.includes('.') && numeroString === '.') return;

        if (numero.startsWith('.') || numero.startsWith('-0')) {

            if (numeroString === '.') {
                return setNumero(numero + numeroString);
            }
        }


        setNumero(numero + numeroString);
    };

    return {

        // Propiedades
        numero,



        // Metodos
        buildNumber,

    }
};

export default useCalculadora;
