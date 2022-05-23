import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface_secondary,
    position: 'relative',
  },
  removeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
