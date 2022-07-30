import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  // const theme = {
  //   ...DefaultTheme,
  //   // Specify custom property
  //   myOwnProperty: true,
  //   // Specify custom property in nested object
  //   colors: {
  //     myOwnColor: '#BADA55',
  //   }
  // };
  
  
  return (
      <Provider store={store}>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
      </Provider>
  );
};
