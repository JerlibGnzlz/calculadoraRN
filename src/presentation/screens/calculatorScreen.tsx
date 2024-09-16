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
                <CalBotones label="C" color={colors.lightGray} />
                <CalBotones label="+/-" color={colors.lightGray} />
                <CalBotones label="del" color={colors.lightGray} />
                <CalBotones label="/" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones label="7" color={colors.darkGray} />
                <CalBotones label="8" color={colors.darkGray} />
                <CalBotones label="9" color={colors.darkGray} />
                <CalBotones label="x" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones label="4" color={colors.darkGray} />
                <CalBotones label="5" color={colors.darkGray} />
                <CalBotones label="6" color={colors.darkGray} />
                <CalBotones label="-" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones label="1" color={colors.darkGray} />
                <CalBotones label="2" color={colors.darkGray} />
                <CalBotones label="3" color={colors.darkGray} />
                <CalBotones label="+" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalBotones label="0" color={colors.darkGray} />
                <CalBotones label="." color={colors.darkGray} />
                <CalBotones label="+" color={colors.orange} />
            </View>

        </View >
    );
};


