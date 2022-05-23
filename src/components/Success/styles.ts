import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: theme.colors.text_primary,
    marginTop: 4,
  },
  buttonContainer: {
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    marginTop: 24,
    marginBottom: 56,
    padding: 16,
  },
  buttonText: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.text_primary,
  },
});
