import { ArrowLeft, Camera } from 'phosphor-react-native';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { theme } from '../../theme';
import { FeedbackType, FeedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { Copyright } from '../Copyright';
import { ScreenshotButton } from '../ScreenshotButton';
import { styles } from './styles';

interface FormProps {
  type: FeedbackType;
  onBackPress: () => void;
}

export function Form({ type, onBackPress }: FormProps) {
  const [screenshot, setScreenShot] = useState<string | null>(null);
  const feedbackType = FeedbackTypes[type];

  const handleOnRemoveScreenshot = () => {
    setScreenShot(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Image style={styles.headerImage} source={feedbackType.image} />
          <Text style={styles.headerText}>{feedbackType.title}</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footerButtonContainer}>
        <ScreenshotButton
          screenshot={screenshot}
          onRemoveShot={handleOnRemoveScreenshot}
          onTakeShot={() => {}}
        />
        <Button
          style={styles.sendButton}
          title="Enviar feedback"
          isLoading={false}
        />
      </View>
      <Copyright />
    </View>
  );
}
