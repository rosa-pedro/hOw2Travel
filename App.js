import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import { MaterialIconsPack } from './src/assets/Icons/material-icons';
import AppNavigator from "./src/navigation/AppNavigator";
import {AuthProvider} from "./src/contexts/AuthContext";
import {QueryClient, QueryClientProvider} from "react-query";
import {LogBox} from "react-native";

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const queryClient = new QueryClient();

const App = () => {
  return (
      <>
          <IconRegistry icons={[EvaIconsPack, MaterialIconsPack]} />
          <ApplicationProvider {...eva} theme={eva.light} >
              <AuthProvider>
                  <QueryClientProvider client={queryClient} >
                      <AppNavigator />
                  </QueryClientProvider>
              </AuthProvider>
          </ApplicationProvider>
      </>
  );
}

export default App;
