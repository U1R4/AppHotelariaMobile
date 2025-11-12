import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { style } from './style';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = '#525252ff',
  textColor = '#fff',
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        style.button,
        { backgroundColor },
        fullWidth && style.fullWidth,
        disabled && style.disabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[style.text, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};