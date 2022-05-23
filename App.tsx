import 'react-native-gesture-handler';
import { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import Widget from './src/components/Widget';
import { theme } from './src/theme';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
    }
    await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      onLayout={onLayoutRootView}
    >
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
