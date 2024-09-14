import { StyleSheet } from 'react-native';

export const color = {
    darkGray: '#2D2D2D',
    lightGray: '#9b9b9b',
    orange: '#ff9427',

    textPramary: 'white',
    textSecondary: '#666666',
    background: '#000000',
};


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: color.background,
    },
    mainResult: {
        color: color.textPramary,
        fontSize: 70,
    }
})
