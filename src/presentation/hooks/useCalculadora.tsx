import { useRef, useState } from 'react';

enum Operador {
    add,
    subst,
    multiply,
    divide
}


const useCalculadora = () => {


    const [numero, setNumero] = useState('0');
    const [previoNumero, setPrevioNmero] = useState('0');

    const lastOperation = useRef<Operador>();

    const clean = () => {
        return setNumero('0');
    };


    const deleteOperation = () => {
        let valorActual = '-';
        let NumeroTemporal = numero.substring(1)

        if (NumeroTemporal.length > 1) {
            return setNumero(valorActual + NumeroTemporal.slice(0, -1));
        }
        setNumero('0');
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



    const setLastNumbre = () => {

        if (numero.endsWith('.')) {
            setPrevioNmero(numero.slice(0, -1));
        } else {
            setPrevioNmero(numero);
        }
        setNumero('0');
    }


    const addOperacion = () => {
        setLastNumbre();
        lastOperation.current = Operador.add;
    };
    const susbstOperacion = () => {
        setLastNumbre();
        lastOperation.current = Operador.subst;
    };

    const multyOperacion = () => {
        setLastNumbre();
        lastOperation.current = Operador.multiply;
    };

    const divideOperacion = () => {
        setLastNumbre();
        lastOperation.current = Operador.divide;
    };


    return {

        // Propiedades
        numero,



        // Metodos
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        addOperacion,
        divideOperacion,
        multyOperacion,
        susbstOperacion,
    };
};

export default useCalculadora;


