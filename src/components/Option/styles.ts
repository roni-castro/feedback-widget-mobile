import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 104,
    minWidth: 112,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8,
    marginHorizontal: 8,
    padding: 8,
  },
  text: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.text_primary,
    marginTop: 8,
  },
  image: {
    width: 36,
    height: 36,
  },
});
