import Main from './screens/MainComponent';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import { Provider as PaperProvider} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/LoadingComponent";

const App = () => {



  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer theme={DefaultTheme}>
            <Main />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};


export default App;