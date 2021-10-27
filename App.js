import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {default as theme} from './src/assets/theme';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
      <>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light} >
              <AppNavigator />
          </ApplicationProvider>
      </>
  );
}

export default App;
