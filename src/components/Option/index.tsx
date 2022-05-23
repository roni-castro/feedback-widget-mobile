import {
  Text,
  View,
  Image,
  ImageProps,
  TouchableOpacityProps,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FeedbackType } from '../../utils/feedbackTypes';

import { styles } from './styles';

interface OptionsProps extends TouchableOpacityProps {
  type: FeedbackType;
  title: string;
  image: ImageProps;
  onItemPress: (type: FeedbackType) => void;
}

export function Option({
  type,
  title,
  image,
  onItemPress,
  ...rest
}: OptionsProps) {
  const handleOnPress = () => {
    onItemPress(type);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleOnPress}
      {...rest}
    >
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
