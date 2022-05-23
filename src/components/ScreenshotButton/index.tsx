import { Camera, Trash } from 'phosphor-react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export const ScreenshotButton = ({
  onRemoveShot,
  onTakeShot,
  screenshot,
}: ScreenshotButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <Trash
          size={22}
          color={theme.colors.text_secondary}
          weight="fill"
          style={styles.removeIcon}
        />
      ) : (
        <Camera size={22} color={theme.colors.text_primary} />
      )}
    </TouchableOpacity>
  );
};
