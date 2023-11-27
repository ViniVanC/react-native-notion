import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/reducers/todoReducer";
import { useFonts } from "expo-font";

const store = createStore(rootReducer);

export default function AppContainer({ children }) {
  const [fontsLoaded] = useFonts({
    // "eUkraine-Thin": require("../assets/fonts/e-Ukraine/e-Ukraine-Thin.otf"),
    // "eUkraine-UltraLight": require("../assets/fonts/e-Ukraine/e-Ukraine-UltraLight.otf"),
    // "eUkraine-Light": require("../assets/fonts/e-Ukraine/e-Ukraine-Light.otf"),
    "eUkraine-Regular": require("../assets/fonts/e-Ukraine/e-Ukraine-Regular.otf"),
    // "eUkraine-Medium": require("../assets/fonts/e-Ukraine/e-Ukraine-Medium.otf"),
    "eUkraine-Bold": require("../assets/fonts/e-Ukraine/e-Ukraine-Bold.otf"),

    // "eUkraineHead-Thin": require("../assets/fonts/e-Ukraine/e-UkraineHead-Thin.otf"),
    // "eUkraineHead-UltraLight": require("../assets/fonts/e-Ukraine/e-UkraineHead-UltraLight.otf"),
    // "eUkraineHead-Light": require("../assets/fonts/e-Ukraine/e-UkraineHead-Light.otf"),
    "eUkraine-Regular": require("../assets/fonts/e-Ukraine/e-UkraineHead-Regular.otf"),
    // "eUkraineHead-Medium": require("../assets/fonts/e-Ukraine/e-UkraineHead-Medium.otf"),
    "eUkraineHead-Bold": require("../assets/fonts/e-Ukraine/e-UkraineHead-Bold.otf"),
    "eUkraineHead-NAME": require("../assets/fonts/e-Ukraine/e-UkraineHead-NAME.otf"),
    "eUkraineHead-LOGO": require("../assets/fonts/e-Ukraine/e-UkraineHead-LOGO.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
