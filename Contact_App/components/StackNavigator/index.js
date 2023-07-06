import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { STACK_ROUTES } from "../../routes";

const Stack = createNativeStackNavigator();

function StackNavigator({ route }) {

  const routes = STACK_ROUTES[route.name];

  return (
    <Stack.Navigator>
      {routes.map((route) => {
        return (
          <Stack.Screen 
            key={route.name} 
            {...route} 
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default StackNavigator;
