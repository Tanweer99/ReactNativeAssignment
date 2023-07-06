import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from './routes';
import createStore from './store';

const store = createStore();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            ROUTES.map((route) => {
              return (
                <Stack.Screen
                  key={route.name} 
                  {...route} 
                />
              )
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;