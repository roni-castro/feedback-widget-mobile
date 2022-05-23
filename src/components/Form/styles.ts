import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: theme.colors.text_primary,
    marginLeft: 8,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerImage: {
    width: 24,
    height: 24,
  },
  input: {
    width: '100%',
    height: 112,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    padding: 12,
    borderColor: theme.colors.stroke,
    lineHeight: 20,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_primary,
  },
  footerButtonContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cameraButton: {
    padding: 8,
    borderRadius: 4,

    backgroundColor: theme.colors.surface_secondary,
  },
  sendButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginLeft: 8,
    color: theme.colors.text_primary,
    backgroundColor: theme.colors.brand,
  },
  sendButtonText: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.text_primary,
  },
});
