import { Text, View } from 'react-native';

import { styles } from './styles';
import { Copyright } from '../Copyright';
import { FeedbackType, FeedbackTypes } from '../../utils/feedbackTypes';
import { Option } from '../Option';

export function Options() {
  const handleOnFeedbackPress = (type: FeedbackType) => {
    console.log(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Deixe seu feedback</Text>
      <View style={styles.optionsContainer}>
        {Object.entries(FeedbackTypes).map(([key, value]) => (
          <Option
            key={key as FeedbackType}
            type={key as FeedbackType}
            onItemPress={handleOnFeedbackPress}
            image={value.image}
            title={value.title}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
