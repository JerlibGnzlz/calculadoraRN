import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/themes/app-themes';


interface Props {
  label: string,
  color?: string
}

export default function CalBotones({
  label,
  color = colors.darkGray,
}: Props) {
  return (
    <>
      <Pressable style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: (pressed) ? 0.8 : 1,
      })} >
        <Text style={styles.btnText}> {label} </Text>
      </Pressable>
    </>
  )
}

