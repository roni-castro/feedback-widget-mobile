import { Text, View } from 'react-native';

import { styles } from './styles';
import { Copyright } from '../Copyright';
import { FeedbackType, FeedbackTypes } from '../../utils/feedbackTypes';
import { Option } from '../Option';

interface OptionProps {
  onFeedbackPress: (type: FeedbackType) => void;
}

export function Options({ onFeedbackPress }: OptionProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Deixe seu feedback</Text>
      <View style={styles.optionsContainer}>
        {Object.entries(FeedbackTypes).map(([key, value]) => (
          <Option
            key={key as FeedbackType}
            type={key as FeedbackType}
            onItemPress={onFeedbackPress}
            image={value.image}
            title={value.title}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
