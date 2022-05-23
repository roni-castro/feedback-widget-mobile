import { Text, View } from 'react-native';

import { styles } from './styles';
import { Copyright } from '../Copyright';

export function Options() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Deixe seu feedback</Text>

      <Copyright />
    </View>
  );
}
