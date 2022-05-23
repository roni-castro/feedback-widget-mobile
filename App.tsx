import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { Widget } from './src/components/Widget';
import { theme } from './src/theme';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
      >
        <StatusBar translucent backgroundColor="transparent" style="light" />

        <Widget />
      </View>
    </SafeAreaView>
  );
}
