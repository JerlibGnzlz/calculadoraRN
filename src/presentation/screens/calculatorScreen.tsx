/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Text, View } from 'react-native';
import { colors, styles } from '../../config/themes/app-themes';
import CalBotones from '../components/CalBotones';
import useCalculadora from '../hooks/useCalculadora';

export const CalculatorScreen = () => {

    const { numero, buildNumber } = useCalculadora();


    return (
        <View style={styles.containerCalculadora}  >

            <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
                <Text style={styles.mainResult} >{numero}</Text>
                <Text style={styles.subResult}>12</Text>
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => console.log('C')} textBlack label="C" color={colors.lightGray} />
                <CalBotones onPress={() => console.log('+/-')} textBlack label="+/-" color={colors.lightGray} />
                <CalBotones onPress={() => console.log('del')} textBlack label="del" color={colors.lightGray} />
                <CalBotones onPress={() => console.log('/')} label="/" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => buildNumber('7')} label="7" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('8')} label="8" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('9')} label="9" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('x')} label="x" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => buildNumber('4')} label="4" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('5')} label="5" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('6')} label="6" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('-')} label="-" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => buildNumber('1')} label="1" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('2')} label="2" color={colors.darkGray} />
                <CalBotones onPress={() => buildNumber('3')} label="3" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('+')} label="+" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => buildNumber('0')} label="0" color={colors.darkGray} anchoZero />
                <CalBotones onPress={() => buildNumber('.')} label="." color={colors.darkGray} />
                <CalBotones onPress={() => console.log('=')} label="=" color={colors.orange} />
            </View>

        </View >
    );
};


