import HomeScreen from '../fragments/MainScreen';
import * as React from 'react';

let Nav = ({Drawer}) => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
export default Nav;
