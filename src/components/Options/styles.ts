import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    marginTop: 32,
    marginBottom: 48,
    flexDirection: 'row',
  },
  headerText: {
    marginTop: 16,
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: theme.colors.text_primary,
  },
});
