import { useMemo, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { theme } from '../../theme';
import { styles } from './styles';

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [1, 280], []);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <></>
      </BottomSheet>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
