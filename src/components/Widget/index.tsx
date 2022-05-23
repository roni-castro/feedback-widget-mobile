import { ChatTeardropDots } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

export function Widget() {
  const handleFloatButtonPress = () => {};

  return (
    <TouchableOpacity style={styles.button} onPress={handleFloatButtonPress}>
      <ChatTeardropDots color={theme.colors.text_on_brand_color} />
    </TouchableOpacity>
  );
}
