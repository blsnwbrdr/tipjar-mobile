import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import MainNavigation from './navigation/MainNavigation';

SplashScreen.preventAutoHideAsync();

export default App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
          'hind-semi-bold': require('./assets/fonts/Hind-SemiBold.ttf'),
          'hind-light': require('./assets/fonts/Hind-Light.ttf'),
        });
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
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <MainNavigation />
    </View>
  );
};
