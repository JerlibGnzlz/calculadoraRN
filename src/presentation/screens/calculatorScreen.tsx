/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Text, View } from 'react-native';
import { styles } from '../../config/themes/app-themes';

export const CalculatorScreen = () => {
    return (
        <View style={styles.containerCalculadora}  >

            <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
                <Text style={styles.mainResult} >1500</Text>
                <Text style={styles.subResult}>12</Text>
            </View>
        </View >
    );
};


