import { ArrowLeft, Camera } from 'phosphor-react-native';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { theme } from '../../theme';
import { FeedbackType, FeedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { styles } from './styles';

interface FormProps {
  type: FeedbackType;
  onBackPress: () => void;
}

export function Form({ type, onBackPress }: FormProps) {
  const feedbackType = FeedbackTypes[type];

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
        <TouchableOpacity style={styles.cameraButton}>
          <Camera size={24} color={theme.colors.text_primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar feedback</Text>
        </TouchableOpacity>
      </View>
      <Copyright />
    </View>
  );
}
