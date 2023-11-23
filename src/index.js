import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sidebar from "./components/sidebar";
import { Home } from "./screens/Home";
import { ToDo } from "./screens/ToDo";
import { Habit } from "./screens/Habit";
import { Money } from "./screens/Money";
import { Notes } from "./screens/Notes";
import { About } from "./screens/About";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        overlayColor: "#00000060",
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Habit" component={Habit} />
      <Drawer.Screen name="Money" component={Money} />
      <Drawer.Screen name="Tasks" component={ToDo} />
      <Drawer.Screen name="Notes" component={Notes} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default App;
