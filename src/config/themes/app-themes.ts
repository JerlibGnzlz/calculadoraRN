import { StyleSheet } from 'react-native';

export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#9B9B9B',
    orange: '#ff9427',

    textPramary: 'white',
    textSecondary: '#666666',
    background: '#000000',
};




export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
    },

    containerCalculadora: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
    },
    mainResult: {
        color: colors.textPramary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '400',
    },
    subResult: {
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
    },


    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },

    button: {
        height: 80,
        width: 80,
        backgroundColor: colors.darkGray,
        borderRadius: 50,
        justifyContent: 'center',
        marginHorizontal: 5,
    },



    btnText: {
        textAlign: 'center',
        color: 'white',
        padding: 5,
        fontSize: 30,
        fontWeight: '300',
    },
});
