import React from 'react';
import {
    ActivityIndicator,
    GestureResponderEvent,
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'medium',
  icon
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.btnPrimary;
      case 'secondary':
        return styles.btnSecondary;
      case 'danger':
        return styles.btnDanger;
      case 'success':
        return styles.btnSuccess;
      default:
        return styles.btnPrimary;
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.btnSmall;
      case 'medium':
        return styles.btnMedium;
      case 'large':
        return styles.btnLarge;
      default:
        return styles.btnMedium;
    }
  };

  const getTextSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.btnTextSmall;
      case 'medium':
        return styles.btnTextMedium;
      case 'large':
        return styles.btnTextLarge;
      default:
        return styles.btnTextMedium;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.btnBaseButton,
        getVariantStyle(),
        getSizeStyle(),
        disabled && styles.btnDisabled,
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color="#ffffff"
          style={styles.btnLoader}
        />
      ) : (
        <>
          {icon && <View style={styles.btnIconContainer}>{icon}</View>}
          <Text style={[
            styles.btnBaseText,
            getTextSizeStyle(),
            disabled && styles.btnTextDisabled,
            textStyle
          ]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;