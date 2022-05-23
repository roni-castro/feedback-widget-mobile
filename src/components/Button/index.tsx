import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading: boolean;
}

export function Button({
  title,
  isLoading,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, style, disabled && styles.containerDisabled]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
