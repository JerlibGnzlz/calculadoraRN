import React from 'react';

import { Text, View } from 'react-native';
import { styles } from '../../config/themes/app-themes';

export const CalculatorScreen = () => {
    return (
        <View >
            <Text style={styles.mainResult} >1500</Text>
            <Text style={styles.mainResult}>12</Text>
        </View>
    );
};


