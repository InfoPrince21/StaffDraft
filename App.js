import Main from './screens/MainComponent';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Provider as PaperProvider} from 'react-native-paper';

export default function App() {

  return (
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer theme={DefaultTheme}>
            <Main />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
  );
};
