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
          'patrick-hand': require('./assets/fonts/PatrickHand-Regular.ttf'),
          'nothing-you-could-do': require('./assets/fonts/NothingYouCouldDo.ttf'),
          hind: require('./assets/fonts/hind-regular.otf'),
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
