import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    position: 'absolute',
    backgroundColor: theme.colors.brand,
    bottom: 16,
    right: 16,
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: 16,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  },
});
