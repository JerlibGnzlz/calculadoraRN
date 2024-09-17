import { useState } from 'react';

const useCalculadora = () => {

    const [numero, setNumero] = useState('0');

    const buildNumber = (numeroString: string) => {

        // PUNTO DECIMAL
        if (numero.includes('.') && numeroString === '.') { return; }

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            if (numeroString === '.') {
                return setNumero(numero + numeroString);
            }

            if (numeroString === '0' && numero.includes('.')) {
                return setNumero(numero + numeroString);
            }


            if (numeroString !== '0' && !numero.includes('.')) {
                return setNumero(numeroString);
            }

            if (numeroString === '0' && !numero.includes('.')) {
                return;
            }
            return setNumero(numero + numeroString);
        }

        setNumero(numero + numeroString);
    };


    return {

        // Propiedades
        numero,



        // Metodos
        buildNumber,

    };
};

export default useCalculadora;
