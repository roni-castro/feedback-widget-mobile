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

export function Button({ title, isLoading, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
