import { ArrowLeft, Camera } from 'phosphor-react-native';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { captureScreen } from 'react-native-view-shot';

import { theme } from '../../theme';
import { FeedbackType, FeedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { Copyright } from '../Copyright';
import { ScreenshotButton } from '../ScreenshotButton';
import { styles } from './styles';

interface FormProps {
  type: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ type, onFeedbackCanceled, onFeedbackSent }: FormProps) {
  const [screenshot, setScreenShot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const feedbackType = FeedbackTypes[type];

  const handleRemoveScreenshot = () => {
    setScreenShot(null);
  };

  const handleScreenshot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
      .then((uri) => {
        setScreenShot(uri);
      })
      .catch((e) => console.log(e));
  };

  const handleSendFeedback = () => {
    setIsSendingFeedback(true);
    onFeedbackSent();
    setIsSendingFeedback(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
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
          onRemoveShot={handleRemoveScreenshot}
          onTakeShot={handleScreenshot}
        />
        <Button
          disabled={isSendingFeedback}
          onPress={handleSendFeedback}
          style={styles.sendButton}
          title="Enviar feedback"
          isLoading={isSendingFeedback}
        />
      </View>
      <Copyright />
    </View>
  );
}
