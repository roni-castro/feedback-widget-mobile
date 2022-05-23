import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: theme.colors.text_primary,
  },
});
