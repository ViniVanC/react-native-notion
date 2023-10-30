import React, { useCallback } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sidebar from "./components/sidebar";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { ToDo } from "./screens/ToDo";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "back",
        overlayColor: "#00000060",
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tasks" component={ToDo} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default App;
