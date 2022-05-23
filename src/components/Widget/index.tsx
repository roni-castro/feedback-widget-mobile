import { useMemo, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { theme } from '../../theme';
import { styles } from './styles';
import { Options } from '../Options';
import { FeedbackType } from '../../utils/feedbackTypes';
import { Form } from '../Form';

function Widget() {
  const [selectedFeedbackType, setSelectedFeedback] =
    useState<FeedbackType | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [1, 288], []);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const handleOnFeedbackPress = (type: FeedbackType) => {
    setSelectedFeedback(type);
  };

  const restartFeedback = () => {
    setSelectedFeedback(null);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {selectedFeedbackType ? (
          <Form type={selectedFeedbackType} onBackPress={restartFeedback} />
        ) : (
          <Options onFeedbackPress={handleOnFeedbackPress} />
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
