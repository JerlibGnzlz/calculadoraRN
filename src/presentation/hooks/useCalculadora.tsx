import { useState } from 'react';

const useCalculadora = () => {

    const [numero, setNumero] = useState('0');

    const clean = () => {
        return setNumero('0');
    };


    const deleteOperation = () => {
        let valorActual = '-';
        let NumeroTemporal = numero.substring(1)

        if (NumeroTemporal.length > 1) {
            return setNumero(valorActual + NumeroTemporal.slice(0, -1))
        }
        setNumero('0')
    };

    const toggleSign = () => {
        if (numero.includes('-')) {
            if (numero === '-0') {
                return setNumero('0');
            }
            return setNumero(numero.replace('-', ' '));
        }
        setNumero('-' + numero);

    };

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
        clean,
        deleteOperation,
        toggleSign,

    };
};

export default useCalculadora;
