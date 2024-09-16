/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/themes/app-themes';


interface Props {
  label: string,
  color?: string,
  anchoZero?: boolean,
  textBlack?: boolean
  onPress: () => void

}

export default function CalBotones({
  label,
  color = colors.darkGray,
  anchoZero = false,
  textBlack = false,
  onPress,
}: Props) {

  return (
    <>
      <Pressable
        onPress={() => onPress()}
        style={({ pressed }) => ({
          ...styles.button,
          backgroundColor: color,
          width: (anchoZero) ? 180 : 80,
          opacity: (pressed) ? 0.8 : 1,
        })} >
        <Text style={{
          ...styles.btnText,
          color: textBlack ? 'black' : 'white',
        }}> {label} </Text>
      </Pressable >
    </>
  );
}

