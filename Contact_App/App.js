import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DRAWER_ROUTES } from './routes';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {
          DRAWER_ROUTES.map((drawer) => {
            return (
              <Drawer.Screen 
                key={drawer.name}
                {...drawer}
              />
            )
          })
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
