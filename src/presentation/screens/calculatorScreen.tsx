/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Text, View } from 'react-native';
import { colors, styles } from '../../config/themes/app-themes';
import CalBotones from '../components/CalBotones';

export const CalculatorScreen = () => {
    return (
        <View style={styles.containerCalculadora}  >

            <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
                <Text style={styles.mainResult} >1500</Text>
                <Text style={styles.subResult}>12</Text>
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => console.log('C')} textBlack label="C" color={colors.lightGray} />
                <CalBotones onPress={() => console.log('+/-')} textBlack label="+/-" color={colors.lightGray} />
                <CalBotones onPress={() => console.log('del')} textBlack label="del" color={colors.lightGray} />
                <CalBotones onPress={() => console.log('/')} label="/" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => console.log('7')} label="7" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('8')} label="8" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('9')} label="9" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('x')} label="x" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => console.log('4')} label="4" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('5')} label="5" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('6')} label="6" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('-')} label="-" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => console.log('1')} label="1" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('2')} label="2" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('3')} label="3" color={colors.darkGray} />
                <CalBotones onPress={() => console.log('+')} label="+" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones onPress={() => console.log('0')} label="0" color={colors.darkGray} anchoZero />
                <CalBotones onPress={() => console.log('.')} label="." color={colors.darkGray} />
                <CalBotones onPress={() => console.log('=')} label="=" color={colors.orange} />
            </View>

        </View >
    );
};


