import { StyleSheet } from 'react-native';

export const color = {
    darkGray: '#2D2D2D',
    lightGray: '9B9B9B',
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

    containerCalculadora: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
    },
    mainResult: {
        color: color.textPramary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '400',
    },
    subResult: {
        color: color.textSecondary,
        fontSize: 40,
        textAlign: 'right',
    },
});
