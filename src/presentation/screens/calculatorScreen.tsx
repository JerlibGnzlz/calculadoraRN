/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Text, View } from 'react-native';
import { colors, styles } from '../../config/themes/app-themes';
import CalBotones from '../components/CalBotones';
import useCalculadora from '../hooks/useCalculadora';

export const CalculatorScreen = () => {

    const {
        numero,
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        addOperacion,
        divideOperacion,
        multyOperacion,
        susbstOperacion,
        previoNumero
    } = useCalculadora();


    return (
        <View style={styles.containerCalculadora}  >

            <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.mainResult} >{numero}</Text>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.subResult}>
                    {(previoNumero === '0') ? " " : previoNumero}</Text>
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => clean()} textBlack label="C" color={colors.lightGray} />
                <CalBotones onPress={() => toggleSign()} textBlack label="+/-" color={colors.lightGray} />
                <CalBotones onPress={() => deleteOperation()} textBlack label="del" color={colors.lightGray} />
                <CalBotones onPress={() => divideOperacion()} label="/" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => buildNumber('7')} label="7" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('8')} label="8" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('9')} label="9" color={colors.darkGray} />
                <CalBotones onPress={multyOperacion} label="x" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => buildNumber('4')} label="4" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('5')} label="5" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('6')} label="6" color={colors.darkGray} />
                <CalBotones onPress={() => susbstOperacion()} label="-" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => buildNumber('1')} label="1" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('2')} label="2" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('3')} label="3" color={colors.darkGray} />
                <CalBotones onPress={() => addOperacion()} label="+" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => buildNumber('0')} label="0" color={colors.darkGray} anchoZero />
                <CalBotones onPress={() => buildNumber('.')} label="." color={colors.darkGray} />
                <CalBotones onPress={() => console.log('=')} label="=" color={colors.orange} />
            </View>

        </View >
    );
};


